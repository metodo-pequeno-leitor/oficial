import type { Handler, HandlerEvent } from "@netlify/functions";

const PIXEL_ID = process.env.META_PIXEL_ID;
const ACCESS_TOKEN = process.env.META_CAPI_TOKEN;

const handler: Handler = async (event: HandlerEvent) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  let body: Record<string, unknown>;
  try {
    body = JSON.parse(event.body || "{}");
  } catch {
    return { statusCode: 400, body: "Invalid JSON" };
  }

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
          client_ip_address: event.headers["x-forwarded-for"]?.split(",")[0] || event.headers["client-ip"],
          client_user_agent: event.headers["user-agent"],
          fbc: userData.fbc,
          fbp: userData.fbp,
          em: userData.em,
          ph: userData.ph,
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
    return {
      statusCode: res.status,
      body: JSON.stringify(data),
    };
  } catch (err) {
    return { statusCode: 500, body: "Internal Server Error" };
  }
};

export { handler };
