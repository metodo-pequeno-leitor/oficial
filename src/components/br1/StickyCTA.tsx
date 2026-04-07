import { trackInitiateCheckout } from "@/lib/pixel";

const CTA_URL = "https://pay.cakto.com.br/34tozsu";

const StickyCTA = () => {
  const handleCheckout = () => {
    trackInitiateCheckout(34.9);
    window.location.href = CTA_URL;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-card/95 backdrop-blur-sm border-t border-border shadow-elevated md:hidden">
      <button
        type="button"
        onClick={handleCheckout}
        className="block w-full py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-bold text-lg text-center transition-all active:scale-95"
      >
        GARANTIR POR R$ 34,90 →
      </button>
    </div>
  );
};

export default StickyCTA;
