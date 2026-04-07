import { Check, Shield } from "lucide-react";
import { useEffect } from "react";
import { trackViewContent, trackInitiateCheckout } from "@/lib/pixel";

const benefits = [
  "Aprendizado leve e sem pressão",
  "Mais confiança na leitura",
  "Mais interesse por palavras e livros",
];

const CHECKOUT_URL = "https://pay.cakto.com.br/p5q39zj";

const bonuses = [
  "Cartões Flash de Leitura",
  "Quebra-cabeça Inteligente do Alfabeto",
  "Alfabeto Visual Interativo",
];

export default function BackRedirectPage() {
  useEffect(() => {
    trackViewContent();
  }, []);

  const handleCheckout = () => {
    trackInitiateCheckout(24.9);
    window.location.href = CHECKOUT_URL;
  };

  return (
    <div className="min-h-svh bg-background flex flex-col items-center p-4 text-foreground">
      {/* Urgency Header */}
      <div className="w-full max-w-md text-center mb-6 mt-4 animate-slide-up">
        <span className="text-urgency font-bold text-sm uppercase tracking-widest">
          Oportunidade Final
        </span>
        <h1
          className="text-2xl font-bold mt-2 text-balance text-foreground tracking-tight"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          Última chance de garantir o Método Pequeno Leitor com desconto especial
        </h1>
      </div>

      {/* Main Card */}
      <div
        className="w-full max-w-md bg-card rounded-3xl p-8 shadow-card animate-slide-up"
        style={{ animationDelay: "80ms" }}
      >
        {/* Price */}
        <div className="flex flex-col items-center mb-6">
          <span className="text-red-600 line-through text-xl font-semibold">
            R$ 47,90
          </span>
          <div className="flex items-baseline gap-1 text-success">
            <span className="text-2xl font-bold">R$</span>
            <span
              className="text-6xl font-black tracking-tighter tabular-nums"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              24,90
            </span>
          </div>
          <p className="text-muted-foreground font-medium mt-2 text-center text-pretty">
            Apenas 10 minutos por dia para ensinar seu filho a ler
          </p>
        </div>

        {/* Benefits */}
        <div className="space-y-4 mb-8">
          {benefits.map((b, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-success/15 flex items-center justify-center">
                <Check className="w-3 h-3 text-success" />
              </div>
              <span className="text-foreground/80 text-sm font-medium">{b}</span>
            </div>
          ))}
        </div>

        {/* Included */}
        <div className="bg-muted rounded-2xl p-4 mb-8">
          <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
            O que você recebe:
          </h3>
          <p className="text-sm text-foreground/70 leading-relaxed">
            <strong className="text-foreground">+100 atividades</strong> em
            níveis progressivos (2, 3 e 4 sílabas) com método guiado.
          </p>
          <div className="mt-3 pt-3 border-t border-border flex gap-2 flex-wrap">
            {bonuses.map((bonus) => (
              <span
                key={bonus}
                className="text-[10px] font-bold bg-card px-2 py-1 rounded-md border border-border text-muted-foreground"
              >
                + {bonus}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={handleCheckout}
          className="w-full bg-success hover:bg-success-dark text-primary-foreground font-black text-xl py-5 rounded-2xl shadow-cta active:shadow-none active:translate-y-1 transition-all animate-pulse-cta cursor-pointer"
        >
          QUERO GARANTIR AGORA
        </button>

        {/* Guarantee */}
        <div className="mt-6 flex items-center justify-center gap-2 text-muted-foreground">
          <Shield className="w-4 h-4" />
          <span className="text-xs font-medium">
            7 dias de garantia ou seu dinheiro de volta
          </span>
        </div>
      </div>
    </div>
  );
}
