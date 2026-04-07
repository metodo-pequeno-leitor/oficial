const PIXEL_ID = process.env.META_PIXEL_ID;
const ACCESS_TOKEN = process.env.META_CAPI_TOKEN;
const WEBHOOK_SECRET = process.env.CAKTO_WEBHOOK_SECRET;

async function sendToMeta(payload: object) {
  const res = await fetch(
    `https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }
  );
  return res;
}

async function hashSHA256(value: string): Promise<string> {
  const normalized = value.toLowerCase().trim();
  const encoded = new TextEncoder().encode(normalized);
  const hashBuffer = await crypto.subtle.digest("SHA-256", encoded);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

export default async (request: Request) => {
  if (request.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return new Response("Invalid JSON", { status: 400 });
  }

  // Webhook da Cakto (Purchase)
  if (body.event === "purchase_approved") {
    if (WEBHOOK_SECRET && body.secret !== WEBHOOK_SECRET) {
      return new Response("Unauthorized", { status: 401 });
    }

    const data = body.data as Record<string, unknown>;
    const customer = data.customer as Record<string, string>;
    const amount = data.amount as number;
    const fbc = data.fbc as string | null;
    const fbp = data.fbp as string | null;

    const eventId = `purchase-${data.id}`;

    const payload = {
      data: [
        {
          event_name: "Purchase",
          event_time: Math.floor(Date.now() / 1000),
          event_id: eventId,
          action_source: "website",
          user_data: {
            em: await hashSHA256(customer.email || ""),
            ph: await hashSHA256((customer.phone || "").replace(/\D/g, "")),
            fbc: fbc ?? undefined,
            fbp: fbp ?? undefined,
          },
          custom_data: {
            value: amount,
            currency: "BRL",
          },
        },
      ],
    };

    try {
      const res = await sendToMeta(payload);
      const result = await res.json();
      return new Response(JSON.stringify(result), {
        status: res.status,
        headers: { "Content-Type": "application/json" },
      });
    } catch {
      return new Response("Internal Server Error", { status: 500 });
    }
  }

  // Eventos do frontend (ViewContent, InitiateCheckout)
  const { eventName, eventId, sourceUrl, userData = {}, customData = {} } = body as {
    eventName: string;
    eventId: string;
    sourceUrl: string;
    userData: Record<string, string>;
    customData: Record<string, unknown>;
  };

  const payload = {
    data: [
      {
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId,
        event_source_url: sourceUrl,
        action_source: "website",
        user_data: {
          client_ip_address: request.headers.get("x-forwarded-for")?.split(",")[0],
          client_user_agent: request.headers.get("user-agent"),
          fbc: userData.fbc,
          fbp: userData.fbp,
        },
        custom_data: customData,
      },
    ],
  };

  try {
    const res = await sendToMeta(payload);
    const data = await res.json();
    return new Response(JSON.stringify(data), {
      status: res.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch {
    return new Response("Internal Server Error", { status: 500 });
  }
};

export const config = { path: "/api/capi" };
