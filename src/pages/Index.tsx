import { useEffect, useState } from "react";
import { trackViewContent, trackInitiateCheckout } from "@/lib/pixel";
import { 
  CheckCircle, ArrowDown, Frown, TrendingDown, HeartCrack, ChevronDown, ChevronsDown,
  AlertTriangle, Star, CheckSquare, BookOpen, Footprints, Brain,
  Volume2, Mail, Printer, Heart, Book, Calendar, Users, Video,
  Award, Headphones, ShieldCheck, ThumbsUp, MessageCircle, Clock, ShoppingBag
} from "lucide-react";
import heroKit from "@/assets/hero-kit.jpg";
import momChild from "@/assets/mom-child.jpg";
import childReading from "@/assets/child-reading.jpg";
import childWriting from "@/assets/child-writing.jpg";
import kitComplete from "@/assets/kit-complete.jpg";
import bonus1 from "@/assets/bonus1.jpg";
import bonus2 from "@/assets/bonus2.jpg";
import bonus3 from "@/assets/bonus3.jpg";
import bonus4 from "@/assets/bonus4.jpg";
import bonus5 from "@/assets/bonus5.jpg";
import bonus6 from "@/assets/bonus6.jpg";
import depo1 from "@/assets/depoimento.jpg";

const CTAButton = ({
  children,
  className = "",
  onClick
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => (
  <button
    type="button"
    className={`btn-cta ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

const StickyCountdown = () => {
  const [timeLeft, setTimeLeft] = useState(17 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 1 ? prev - 1 : 17 * 60));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-red-600 text-white shadow-lg">
      <div className="section-container py-3 flex items-center justify-center gap-3 text-center">
        <Clock size={18} className="shrink-0" />
<div className="text-center leading-tight">
  
  <p className="text-xs sm:text-sm font-semibold uppercase tracking-wide">
    Promoção Semana do Consumidor
  </p>

  <p className="text-sm sm:text-base font-bold">
    Oferta especial disponível por mais{" "}
    <span className="bg-white text-red-600 px-2 py-1 rounded-md mx-1 inline-block">
      {minutes}:{seconds}
    </span>
  </p>

</div>
      </div>
    </div>
  );
};

const PurchaseNotifications = () => {
  const notifications = [
    "Mariana de Azevedo acabou de garantir o método",
    "Juliana Freitas acabou de comprar",
    "Davi Pascarelli acabou de comprar",
    "Patrícia Menezes garaniu o acesso",
    "Fernanda Bruna finalizou a compra agora",
    "Aline da Silva acabou de comprar",
    "Marcos Vinicius acabou de comprar",
    "Camila Lopes acabou de garantir o método",
    "Renata Yoshiro finalizou o pedido",
    "Vanessa Magalhães acabou de comprar",
    "Agnaldo Fernando acabou de garantir o método",
    "Katia Souza acabou de comprar",
    "Thais Lopes acabou de comprar",
    "Letícia Negrini garaniu o acesso",
    "Bruna Santos finalizou a compra agora",
    "Rebeca Oliveira acabou de comprar",
    "Kelly de Lima acabou de comprar",
    "Fabiana Carla acabou de garantir o método",
    "Soraia Rodrigues finalizou o pedido",
    "Maria Costa Magalhães acabou de comprar",
  ];

  const [visible, setVisible] = useState(false);
  const [currentNotification, setCurrentNotification] = useState("");

  useEffect(() => {
    let index = 0;
    let intervalId: ReturnType<typeof setInterval>;

    const showNotification = () => {
      setCurrentNotification(notifications[index]);
      setVisible(true);

      setTimeout(() => {
        setVisible(false);
      }, 5000);

      index = (index + 1) % notifications.length;
    };

    const startTimeout = setTimeout(() => {
      showNotification();
      intervalId = setInterval(showNotification, 29000);
    }, 4000);

    return () => {
      clearTimeout(startTimeout);
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-4 left-4 z-50 transition-all duration-500 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <div className="max-w-[320px] bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 flex items-start gap-3">
        <div className="bg-green-100 rounded-full p-2 shrink-0">
          <ShoppingBag size={18} className="text-green-600" />
        </div>

        <div>
          <p className="text-sm font-semibold text-gray-900 leading-snug">
            {currentNotification}
          </p>
          <p className="text-xs text-gray-500 mt-1">há poucos instantes</p>
        </div>
      </div>
    </div>
  );
};

    const FAQSection = () => {
      const [openIndex, setOpenIndex] = useState<number | null>(0);

      const faqItems = [
        {
          question: "Quais são as Formas de Pagamento?",
          answer: "Você pode pagar com qualquer cartão, boleto ou PIX."
        },
        {
          question: "Como acesso ao material?",
          answer:
            "O material é enviado para seu e-mail imediatamente após a confirmação do pagamento. Lá você poderá baixar todo o conteúdo em PDF."
        },
        {
          question: "Tenho que pagar todo mês?",
          answer:
            "Não, o pagamento é apenas uma vez e você poderá ter acesso vitalício ao material."
        },
        {
          question: "Para quem é indicado o material?",
          answer:
            "Nossas atividades são indicadas para crianças de diferentes faixas etárias, especialmente as que estão em fase de alfabetização ou precisam de reforço no desenvolvimento da leitura."
        },
        {
          question: "Quais são os benefícios do Método Pequeno Leitor?",
          answer:
            "O método facilita a associação entre som e letra, desenvolve a consciência fonológica, fortalece a memória visual e auditiva, estimula a coordenação motora e torna a leitura mais interessante e prazerosa."
        }
      ];

      return (
        <section className="section-pad bg-muted">
          <div className="section-container max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 uppercase text-gray-800">
              Perguntas Frequentes
            </h2>

            <div className="w-full">
              {faqItems.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div key={index} className="border-b border-gray-400/80">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full text-left py-5 sm:py-6 flex items-start gap-3"
                    >
                      <span className="text-[#3b5cff] text-sm sm:text-base font-bold mt-1 shrink-0">
                        {isOpen ? "▴" : "▸"}
                      </span>

                      <span className="text-[#3b5cff] text-lg sm:text-xl font-medium leading-snug">
                        {item.question}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="pb-6 sm:pb-7 pl-7 sm:pl-8 pr-3">
                        <p className="text-[15px] sm:text-[18px] text-gray-600 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      );
    };

const Index = () => {
  const checkoutLink = "https://pay.cakto.com.br/ky7hop9";
  const backRedirectLink = "/oferta";

  const handleCheckout = () => {
    trackInitiateCheckout(97);
    window.location.href = checkoutLink;
  };

  useEffect(() => {
    trackViewContent();

    window.history.pushState({ page: "landing" }, "", window.location.href);

    const handlePopState = () => {
      window.location.href = backRedirectLink;
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background pt-16">
      <StickyCountdown />
      <PurchaseNotifications />

      {/* SEÇÃO 1 – HERO */}
      <section className="py-4">
        <div className="section-container">
          <div className="text-center mb-8">
            <img src={heroKit} alt="Método Pequeno Leitor - Material educativo infantil" className="w-full rounded-3xl shadow-lg" />
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 leading-tight">
            <span className="highlight-tag">Descubra o método AMERICANO</span> que ensina as crianças a ler até <span className="highlight-tag">5 vezes mais rápido</span>, sem pressão!
          </h1>
          
          <h2 className="text-lg sm:text-xl text-center font-semibold mb-8">
            Com apenas <span className="text-xl sm:text-2xl font-bold text-gold">10 minutos por dia.</span>
          </h2>
          
          <div className="space-y-3 mb-8">
            {[
              "Ideal para crianças de 2 a 12 anos",
              "Mesmo que ainda não reconheça letras ou sons",
              "Funciona também com crianças com TDAH, autismo ou dificuldades de foco"
            ].map((text, i) => (
              <div key={i} className="bg-cream lp-card flex items-start gap-3">
                <CheckCircle className="text-gold mt-0.5 shrink-0" size={22} />
                <span className="font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 2 – CTA */}
      <section className="py-4">
        <div className="section-container">
          <CTAButton
            className="bg-red-600 hover:bg-red-700 text-white"
            onClick={handleCheckout}
          >
            Quero meu pequeno lendo rápido!
          </CTAButton>
        </div>
      </section>

      {/* SEÇÃO 3 – EXPLICAÇÃO */}
      <section className="py-6">
        <div className="section-container">
          <p className="text-center text-base sm:text-lg mb-8">
            Com o <strong>Método Pequeno Leitor</strong>, baseado no método americano de alfabetização, seu filho aprende a ler até <strong>5x mais rápido</strong> — de forma divertida, simples e eficaz, direto de casa!
          </p>
          <div className="text-center">
            <ChevronsDown className="text-gold mx-auto" size={36} />
          </div>
        </div>
      </section>

      {/* SEÇÃO 4 – DOR */}
      <section className="py-1 bg-muted">
        <div className="section-container">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">
            Muitos pais acham que <span className="highlight-tag">'cada criança tem seu tempo pra ler'</span>
          </h2>
          <p className="text-center text-xl font-semibold mb-8">Até que...</p>
          <div className="space-y-3">
            {[
              { icon: Frown, text: "As tarefas de leitura viram um sofrimento" },
              { icon: TrendingDown, text: "As notas baixam constantemente" },
              { icon: HeartCrack, text: "A criança se sente menos inteligente que os colegas" }
            ].map(({ icon: Icon, text }, i) => (
              <div key={i} className="lp-card flex items-start gap-3 border-2 border-dashed border-pain-border bg-pain-bg">
                <Icon className="text-pain-icon mt-0.5 shrink-0" size={22} />
                <span className="font-medium text-pain-text">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 5 – E O PIOR */}
      <section className="py-6">
        <div className="section-container">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">
            <span className="gold-tag">E o pior:</span> Começa a achar que não é capaz, sem entender o porquê.
          </h2>
          <div className="text-center">
            <ChevronsDown className="text-gold mx-auto" size={36} />
          </div>
        </div>
      </section>

      {/* SEÇÃO 6 – CAUSA REAL */}
      <section className="py-7 bg-cream">
        <div className="section-container">
          <div className="text-center mb-8">
            <AlertTriangle className="text-gold mx-auto" size={48} />
          </div>
          <div className="lp-card border-2 border-dashed border-gold p-6">
            <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">
              <span className="highlight-tag">Entenda o que realmente atrasa</span> a leitura do seu filho...
            </h2>
            <p className="mb-4">
              A falta de estímulo fonético na fase certa torna o processo mais lento, frustrante e confuso.
            </p>
            <p>
              Muitas crianças não desenvolvem a consciência fonológica no momento ideal, o que dificulta a associação entre sons e letras, gerando bloqueios que poderiam ser evitados com a abordagem correta.
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 7 – TRANSIÇÃO */}
      <section className="py-3 bg-cream">
        <div className="section-container">
          
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">
            Mas calma, você não tem culpa disso...
          </h2>

          <p className="text-center text-base sm:text-lg mb-6">
            É que ninguém te ensinou como ajudar seu filho a despertar a leitura de forma leve, divertida e no tempo certo.
          </p>

          <div className="text-center mb-6">
            <ArrowDown className="text-green-cta mx-auto" size={36} />
          </div>

          <p className="text-center text-xl font-bold mb-8 text-gold">
            Por isso você precisa do Método Pequeno Leitor...
          </p>

          {/* IMAGEM ÚNICA GRANDE */}
          <div className="text-center mb-8">
            <img
              src={childReading} 
              alt="Crianças praticando o Método Pequeno Leitor"
              className="w-full rounded-3xl shadow-lg"
            />
          </div>

        </div>
      </section>

      {/* SEÇÃO 8 – BENEFÍCIOS */}
      <section className="py-1 bg-cream">
        <div className="section-container">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-8">
            Benefícios do Método Pequeno Leitor
          </h2>
          <div className="space-y-4 mb-8">
            {[
              "Desenvolver a coordenação motora fina",
              "Estimular a criatividade e a atenção",
              "Fortalecer conexões cerebrais",
              "Despertar o interesse pelas palavras e sons",
              "Tornar a alfabetização leve, divertida e eficaz"
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckSquare className="text-green-cta mt-0.5 shrink-0" size={22} />
                <span className="font-medium">{text}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-base sm:text-lg">
            Tudo isso com apenas alguns minutos por dia — direto de casa, no ritmo natural da criança.
          </p>
        </div>
      </section>

      {/* SEÇÃO 9 – PEDAGÓGICA */}
      <section className="py-6 bg-muted">
        <div className="section-container">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">
            Porque as atividades de Grafismo Fonético funcionam?
          </h2>
          <div className="flex justify-center space-x-2 mb-8">
            <div className="w-8 h-2 rounded-full bg-gold" />
            <div className="w-8 h-2 rounded-full bg-green-cta" />
            <div className="w-8 h-2 rounded-full bg-lilac" />
          </div>
          <div className="lp-card bg-lilac p-6">
            <div className="text-center mb-6">
              <img src={childWriting} alt="Criança segurando material" className="w-full rounded-2xl shadow-md" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-center mb-6" style={{ color: '#1e40af' }}>
              Antes de aprender a ler, o cérebro da criança precisa reconhecer padrões, sons e movimentos.
            </h3>
            <p className="mb-4">
              O Grafismo Fonético trabalha a <strong>consciência fonológica</strong> e visual, fortalecendo as conexões cerebrais necessárias para a leitura fluente.
            </p>
            <p>
              Com atividades lúdicas e progressivas, a criança desenvolve habilidades fundamentais de forma natural, sem pressão, tornando a alfabetização um processo divertido e eficaz.
            </p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 10 – RESULTADOS */}
      <section className="py-8 bg-light-green">
        <div className="section-container">
          <div className="text-center mb-8">
            <img src={momChild} alt="Mãe e criança estudando juntas" className="w-full rounded-3xl shadow-lg" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-8" style={{ color: '#166534' }}>
            E em poucos dias você vai notar a diferença na leitura do seu filho:
          </h2>
          <div className="space-y-3">
            {[
              "Vai reconhecer sílabas e sons com mais facilidade",
              "Vai se sentir mais confiante",
              "Vai mostrar mais interesse por livros e histórias",
              "Vai aprender no ritmo dele",
              "Vai começar a gostar do momento da leitura em casa"
            ].map((text, i) => (
              <div key={i} className="lp-card flex items-start gap-3 p-5">
                <CheckCircle className="text-green-cta mt-0.5 shrink-0" size={22} />
                <span className="font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 11 – CTA INTERMEDIÁRIO */}
      <section className="spy-10">
        <div className="section-container">
          <p className="text-center text-lg sm:text-xl font-bold mt-7 mb-8">
            Com o Método Pequeno Leitor, seu filho desenvolve o cérebro para aprender a ler com leveza, no tempo dele — e com resultados visíveis em poucos dias.
          </p>

          <div className="bg-cream rounded-3xl p-6 mb-8">
            <div className="flex justify-center mb-4">
              <div className="bg-gold rounded-full p-4">
                <Star className="text-gold-foreground" size={32} />
              </div>
            </div>

            <p className="text-center text-lg font-bold">
              Comece a jornada de aprendizado do seu filho hoje
            </p>
          </div>

          <CTAButton
            className="bg-red-600 hover:bg-red-700 text-white"
            onClick={handleCheckout}
          >
            Quero meu filho(a) Lendo!
          </CTAButton>

        </div>
      </section>

      {/* SEÇÃO 12 – O QUE VAI APRENDER */}
      <section className="py-10 bg-muted">
        <div className="section-container">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-10">
            📚 O Que Seu Filho Vai Aprender 📚
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🧩",
                title: "Reconhecimento de Sons e Letras",
                desc: "Cada som é associado de forma estratégica, fortalecendo as conexões cerebrais de maneira sólida e natural."
              },
              {
                icon: "📝",
                title: "Formação de Palavras",
                desc: "Atividades dinâmicas que transformam a construção de palavras em uma experiência divertida e intuitiva."
              },
              {
                icon: "📖",
                title: "Compreensão e Leitura Fluente",
                desc: "Exercícios práticos que aprimoram a compreensão do que está sendo lido, ajudando seu filho a ganhar fluência e confiança."
              },
              {
                icon: "🌟",
                title: "Guia Passo a Passo com Ilustrações",
                desc: "Instruções visuais e detalhadas para que cada fase do aprendizado seja clara e tranquila, sem complicações."
              },
              {
                icon: "🧠",
                title: "Desenvolvimento Cognitivo",
                desc: "Exercícios que estimulam diversas áreas do cérebro, promovendo desenvolvimento integral das habilidades de leitura e escrita."
              }
            ].map(({ icon, title, desc }, i) => (
              <div
                key={i}
                className="lp-card border-2 border-dashed border-gold p-6 text-center rounded-3xl"
              >
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 leading-tight">{title}</h3>
                <p className="text-sm sm:text-base leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 14 – VÍDEO */}
      <section className="section-pad bg-cream">
        <div className="section-container">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">
            Veja como é fácil ensinar seu filho(a) a ler com o Método Pequeno Leitor...
          </h2>

          <p className="text-center text-base sm:text-lg mt-1 mb-8">
            <span className="highlight-tag">Aperte o play</span>para assistir!
          </p>

          <div className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl bg-black mb-6">
            <video
              className="w-full h-auto block"
              controls
              playsInline
              preload="metadata"
              poster="/videos/vsl-thumb.jpg"
            >
              <source src="/videos/vsl.mp4" type="video/mp4" />
              Seu navegador não suporta vídeo.
            </video>
          </div>

          <p className="text-center">
            Assista e descubra como o método transforma a alfabetização em uma experiência divertida e eficaz.
          </p>
        </div>
      </section>

      {/* SEÇÃO 15 – PARA QUEM */}
      <section className="py-5 bg-muted">
        <div className="section-container">
          <div className="text-center mb-6">
            <ArrowDown className="text-green-cta mx-auto" size={36} />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-8">
            <span className="highlight-tag">Praticando apenas 10 minutos por dia</span>, seu filho colherá estes benefícios para o resto da vida:
          </h2>
          <div className="space-y-6">
            {[
              { n: 1, title: "Crianças em fase de alfabetização", desc: "Desenvolve as bases sólidas para leitura fluente e compreensão textual desde cedo." },
              { n: 2, title: "Pais e educadores que buscam alternativas aos métodos tradicionais", desc: "Oferece uma abordagem moderna, lúdica e comprovadamente eficaz para ensinar a ler." },
              { n: 3, title: "Crianças com dificuldade de leitura", desc: "Supera bloqueios e desenvolve habilidades de forma personalizada, no ritmo de cada criança." },
              { n: 4, title: "Escolas e instituições que valorizam inovação no ensino", desc: "Metodologia complementar que potencializa os resultados da alfabetização em sala de aula." }
            ].map(({ n, title, desc }) => (
              <div key={n} className="lp-card border-2 border-dashed border-gold p-6 text-center">
                <div className="number-circle">{n}</div>
                <h3 className="text-lg sm:text-xl font-bold mb-3">{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 16 – DEPOIMENTOS */}
      <section className="py-7">
        <div className="section-container">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-8">
            O que <span className="highlight-tag">pais e educadores</span> estão vendo na prática
          </h2>

          <div className="lp-card p-5 sm:p-6">
            <div className="space-y-4">
              {[
                { 
                  name: "Maria Silva", 
                  role: "Mãe do João, 6 anos", 
                  text: '"Em apenas 2 semanas, meu filho já estava lendo sílabas simples. Ele adora as atividades e sempre pede mais. Mudou completamente nossa rotina!"' 
                },
                { 
                  name: "Professora Fernanda", 
                  role: "Educadora há 15 anos", 
                  text: '"Uso o material como complemento em sala de aula e os resultados aparecem rápido. As crianças desenvolvem coordenação e consciência fonológica com muito mais facilidade. Recomendo!"' 
                }
              ].map(({ name, role, text }, i) => (
                <div key={i} className="testimonial-card">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-cream flex items-center justify-center font-bold text-gold mr-3 shrink-0">
                      {name[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm sm:text-base">{name}</h4>
                      <p className="text-sm text-muted-foreground">{role}</p>
                    </div>
                  </div>

                  <p className="mb-3 text-sm sm:text-base">{text}</p>

                  <div className="flex items-center text-sm gap-4">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.currentTarget.classList.toggle("text-blue-600");
                        e.currentTarget.classList.toggle("font-semibold");
                      }}
                      className="flex items-center gap-1 text-muted-foreground transition-colors"
                    >
                      <ThumbsUp size={14} />
                      Curtir
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* IMAGEM DE PROVA REAL */}
            <div className="mt-6">
              <p className="text-xl sm:text-2xl font-bold text-center mb-8">
                Veja o relato da Juliana:
              </p>
              <img src="/src/assets/depoimento.jpg" alt="Depoimento real de cliente" className="w-full rounded-2xl shadow-lg"/>
            </div>

          </div>
        </div>
      </section>

      {/* SEÇÃO 2 – CTA */}
      <section className="py-4">
        <div className="section-container">
          <CTAButton
            className="bg-red-600 hover:bg-red-700 text-white"
            onClick={handleCheckout}
          >
            Quero meu pequeno lendo rápido!
          </CTAButton>
        </div>
      </section>

      {/* SEÇÃO 17 – O QUE VAI RECEBER */}
      <section className="py-4 bg-gold">
        <div className="section-container">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-8 text-gold-foreground uppercase">
            VEJA TUDO QUE VOCÊ VAI RECEBER NO KIT DE ATIVIDADES
          </h2>

          <div className="text-center mb-8">
            <img
              src={kitComplete}
              alt="Material completo do Kit"
              className="w-full rounded-3xl shadow-lg"
            />
          </div>

          <div className="space-y-3">
            {[
              { text: "+100 atividades de grafismo fonético", color: "#3b82f6" },
              { text: "Atividades nível 01: palavras com 02 sílabas", color: "#8b5cf6" },
              { text: "Atividades nível 02: palavras com 03 sílabas", color: "#f59e0b" },
              { text: "Atividades nível 03: palavras com 04 sílabas", color: "#ef4444" },
              { text: "Bônus: Cartões Flash de Leitura", color: "#3b82f6" },
              { text: "Bônus: Quebra-Cabeça Inteligente do Alfabeto", color: "#ec4899" },
              { text: "Bônus: Alfabeto Visual Interativo", color: "#10b981" }
            ].map(({ text, color }, i) => (
              <div
                key={i}
                className="color-strip"
                style={{ backgroundColor: color }}
              >
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 18 – COMO FUNCIONA */}
      <section className="section-pad bg-cream">
        <div className="section-container">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-8">
            Muito simples de começar a utilizar!
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Mail, title: "CHEGA NO E-MAIL", desc: "Após a compra você recebe no e-mail o acesso à plataforma/arquivos em PDF. Download imediato!", bg: "bg-blue-100", iconColor: "#1d4ed8" },
              { icon: Printer, title: "VOCÊ IMPRIME", desc: "Você pode imprimir quando quiser, acesso vitalício, quantas vezes desejar. Economiza tinta com formato otimizado!", bg: "bg-light-green", iconColor: "#059669" },
              { icon: Heart, title: "OS PEQUENOS AMAM", desc: "Atividades lúdicas que as crianças adoram! Importante que um adulto auxilie a criança para potencializar os resultados.", bg: "bg-pink-100", iconColor: "#db2777" }
            ].map(({ icon: Icon, title, desc, bg, iconColor }, i) => (
              <div key={i} className="lp-card p-8 text-center">
                <div className="flex justify-center mb-6">
                  <div className={`${bg} rounded-full p-5`}>
                    <Icon style={{ color: iconColor }} size={48} />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-4 uppercase">{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEÇÃO 19 – FAIXA */}
      <section className="py-10 bg-gold">
        <div className="section-container">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gold-foreground">
            e ainda não acabou...
          </h2>
        </div>
      </section>

      {/* SEÇÃO 20 – BÔNUS */}
      <section className="py-7 bg-muted">
        <div className="section-container">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-10 leading-tight">
            GARANTINDO SEU ACESSO HOJE <br className="hidden sm:block" />
            VOCÊ LEVA <span className="highlight-tag">3 SUPER BÔNUS</span> 🎁
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                image: bonus1,
                title: "Cartões Flash de Leitura",
                desc: "Fichas de leitura avançadas que desenvolvem compreensão, fluência e vocabulário de forma leve e progressiva.",
                oldPrice: "De R$ 79",
              },
              {
                image: bonus2,
                title: "Quebra-Cabeça Inteligente do Alfabeto",
                desc: "Atividades de quebra-cabeça com letras do alfabeto para fixação divertida e interativa.",
                oldPrice: "De R$ 37",
              },
              {
                image: bonus3,
                title: "Alfabeto Visual Interativo",
                desc: "Apresenta cada letra do alfabeto com imagens associadas, ajudando na familiarização das crianças com as letras de forma visual e divertida.",
                oldPrice: "De R$ 37",
              },
            ].map((bonus, i) => (
              <div
                key={i}
                className="bg-white rounded-[28px] shadow-lg p-6 sm:p-8 text-center h-full flex flex-col"
              >
                <div className="flex justify-center mb-6">
                  <img
                    src={bonus.image}
                    alt={bonus.title}
                    className="w-full max-w-[220px] object-contain mx-auto"
                  />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold leading-tight mb-4">
                  {bonus.title}
                </h3>

                <p className="text-base sm:text-lg leading-relaxed mb-5 flex-grow">
                  {bonus.desc}
                </p>

                <p className="text-red-500 line-through text-lg sm:text-xl mb-3">
                  {bonus.oldPrice}
                </p>

                <div>
                  <span className="inline-block bg-[#f6ebc8] text-[#9a7410] font-bold px-4 py-2 rounded-md text-lg">
                    HOJE: GRÁTIS
                  </span>
                </div>
              </div>
            ))}
          </div>

          <CTAButton onClick={handleCheckout}>
            SIM, QUERO TODOS OS BÔNUS!
          </CTAButton>

          <p className="text-center text-sm mt-4 flex items-center justify-center gap-1">
            <ShieldCheck className="text-green-cta shrink-0" size={16} />
            <span>
              <strong>Garantia de 7 dias:</strong> Se em 7 dias você não perceber melhorias na leitura do seu filho, devolvemos 100% do seu dinheiro.
            </span>
          </p>
        </div>
      </section>

      {/* SEÇÃO 21 – OFERTA FINAL */}
      <section className="section-pad bg-cream">
        <div className="section-container">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 leading-tight">
            Recapitulando tudo o que você vai receber junto com o
            <br />
            <span className="highlight-tag">Método Pequeno Leitor</span>
          </h2>

          <div className="bg-white rounded-[28px] shadow-lg p-5 sm:p-8 max-w-3xl mx-auto">
            <div className="flex justify-center mb-8">
              <img
                src={heroKit}
                alt="Kit Atividades Grafismo Fonético completo"
                className="w-full max-w-[500px] object-contain mx-auto"
              />
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-2 text-base sm:text-lg">
                <span className="text-green-600 font-bold">✅</span>
                <p>
                  <strong>+100 Atividades de Grafismo Fonético Nível 1, 2 e 3</strong>{" "}
                  <span className="text-red-500 line-through">De R$ 137</span>
                </p>
              </div>

              <div className="flex items-start gap-2 text-base sm:text-lg">
                <span className="text-green-600 font-bold">✅</span>
                <p>
                  <strong>Bônus 01:</strong> Cartões Flash de Leitura{" "}
                  <span className="text-red-500 line-through">De R$ 79</span>
                </p>
              </div>

              <div className="flex items-start gap-2 text-base sm:text-lg">
                <span className="text-green-600 font-bold">✅</span>
                <p>
                  <strong>Bônus 02:</strong> Quebra-Cabeça Inteligente do Alfabeto{" "}
                  <span className="text-red-500 line-through">De R$ 57</span>
                </p>
              </div>

              <div className="flex items-start gap-2 text-base sm:text-lg">
                <span className="text-green-600 font-bold">✅</span>
                <p>
                  <strong>Bônus 03:</strong> Alfabeto Visual Interativo{" "}
                  <span className="text-red-500 line-through">De R$ 39</span>
                </p>
              </div>
            </div>

            <div className="text-center mb-6">
              <p className="text-xl sm:text-2xl leading-tight">
                No total tudo deveria custar{" "}
                <span className="text-red-600 font-bold line-through">R$ 312,00</span>
                <br />
                Mas hoje você vai ter acesso completo por
              </p>
            </div>

            <div className="text-center mb-4">
              <p className="text-[44px] sm:text-[64px] font-extrabold text-green-600 leading-none">
                R$ 47,90
              </p>
              <p className="text-xl sm:text-2xl font-semibold mt-2">
                * 5x de R$ 9,58 *
              </p>
            </div>

            <div className="w-full h-px bg-gray-300 my-6"></div>

            <div className="text-center mb-6">
              <p className="text-sm sm:text-base font-semibold tracking-wide text-gray-600 uppercase">
                Acesso vitalício | Acesso imediato
              </p>
            </div>

            <div className="mb-5">
              <button
                type="button"
                onClick={handleCheckout}
                className="w-full bg-green-500 hover:bg-green-600 text-white text-lg sm:text-xl font-bold py-4 px-6 rounded-full shadow-lg transition-all duration-200"
              >
                QUERO GARANTIR O MÉTODO AGORA!
              </button>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-4 text-xs sm:text-sm text-gray-700 font-semibold">
              <span>✅ Compra Segura</span>
              <span>🏅 Satisfação Garantida</span>
              <span>🔒 Privacidade Protegida</span>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />

      {/* FOOTER */}
      <footer className="section-pad" style={{ backgroundColor: '#1f2937', color: 'white' }}>
        <div className="section-container text-center">
          <p className="mb-4">
            <strong>Método Pequeno Leitor</strong><br />
            Ensine seu filho a ler 5x mais rápido
          </p>
          <div className="text-xs opacity-60">
            <p className="mb-2">© 2023 Método Pequeno Leitor. Todos os direitos reservados.</p>
            <p className="space-x-4">
              <a href="#" className="underline">Política de Privacidade</a>
              <a href="#" className="underline">Termos de Uso</a>
              <a href="#" className="underline">Contato</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;



