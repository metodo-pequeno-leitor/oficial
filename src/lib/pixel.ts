declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

function getCookie(name: string): string | undefined {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith(name + "="))
    ?.split("=")[1];
}

function generateEventId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

function getUserData() {
  return {
    fbp: getCookie("_fbp"),
    fbc: getCookie("_fbc"),
  };
}

async function sendCapi(params: {
  eventName: string;
  eventId: string;
  customData?: Record<string, unknown>;
}) {
  try {
    await fetch("/api/capi", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        eventName: params.eventName,
        eventId: params.eventId,
        sourceUrl: window.location.href,
        userData: getUserData(),
        customData: params.customData ?? {},
      }),
    });
  } catch {
    // silently fail — não bloquear a navegação do usuário
  }
}

export function trackViewContent() {
  const eventId = generateEventId();
  window.fbq?.("track", "ViewContent", {}, { eventID: eventId });
  sendCapi({ eventName: "ViewContent", eventId });
}

export function trackInitiateCheckout(value: number, currency = "BRL") {
  const eventId = generateEventId();
  window.fbq?.(
    "track",
    "InitiateCheckout",
    { value, currency },
    { eventID: eventId }
  );
  sendCapi({
    eventName: "InitiateCheckout",
    eventId,
    customData: { value, currency },
  });
}
