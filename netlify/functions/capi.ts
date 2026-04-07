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

  const PIXEL_ID = process.env.META_PIXEL_ID;
  const ACCESS_TOKEN = process.env.META_CAPI_TOKEN;

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
          fbc: (userData as Record<string, string>).fbc,
          fbp: (userData as Record<string, string>).fbp,
        },
        custom_data: customData,
      },
    ],
  };

  try {
    const res = await fetch(
      `https://graph.facebook.com/v19.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

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
