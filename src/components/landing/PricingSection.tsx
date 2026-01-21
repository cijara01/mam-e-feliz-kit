import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Check, X, Star, ShieldCheck, Zap } from 'lucide-react';
import UpsellPopup from './UpsellPopup';

const basicFeatures = [
  { text: "500 Receitas por Idade", included: true },
  { text: "Acesso Vitalício", included: true },
  { text: "Garantia de 7 dias", included: true },
  { text: "Sem benefícios do Kit Completo VIP", included: false, highlight: true },
];

const vipFeatures = [
  { text: "Tudo do Básico +", included: true, bold: true },
  { text: "Guia de Texturas Seguras", included: true },
  { text: "Tabela de Alergênicos", included: true },
  { text: "Cardápios Semanais Prontos (só seguir)", included: true },
  { text: 'Guia "Como Lidar com Recusa"', included: true },
  { text: "50 Receitas de Lanchinhos", included: true },
  { text: "Garantia de 7 dias", included: true },
  { text: "Comunidade VIP & Atualizações", included: true, special: true },
];

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [showUpsell, setShowUpsell] = useState(false);

  const handleBasicClick = () => {
    setShowUpsell(true);
  };

  const handleAcceptUpsell = () => {
    setShowUpsell(false);
  };

  const handleDeclineUpsell = () => {
    setShowUpsell(false);
  };

  return (
    <section id="pricing" ref={ref} className="py-10 md:py-16 px-4 md:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 md:mb-8"
        >
          <span className="inline-flex items-center gap-2 bg-primary text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold mb-3 md:mb-4">
            OFERTA LIMITADA: PREÇO DE LANÇAMENTO
          </span>
          <h2 className="font-heading text-xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">
            Escolha Sua Transformação:
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Acesso imediato e vitalício. Sem mensalidades.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6">
          {/* Basic Plan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl p-5 md:p-6 border border-border shadow-sm order-2 md:order-1"
          >
            <h3 className="font-heading font-bold text-lg md:text-xl text-foreground mb-1.5 md:mb-2">
              Kit Básico
            </h3>
            <p className="text-muted-foreground text-xs md:text-sm mb-4 md:mb-6">
              Para mamães que querem apenas as receitas.
            </p>
            
            {/* Price */}
            <div className="mb-4 md:mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-muted-foreground line-through text-base md:text-lg">
                  R$ 29,90
                </span>
                <span className="font-heading font-bold text-3xl md:text-4xl text-foreground">
                  R$ 10,00
                </span>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-2.5 md:space-y-3 mb-5 md:mb-6">
              {basicFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-2.5 md:gap-3">
                  {feature.included ? (
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-success shrink-0 mt-0.5" />
                  ) : (
                    <X className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground shrink-0 mt-0.5" />
                  )}
                  <span className={`text-xs md:text-sm ${feature.highlight ? 'text-muted-foreground line-through' : 'text-foreground'}`}>
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button 
              onClick={handleBasicClick}
              className="w-full py-3 md:py-4 rounded-full border-2 border-foreground text-foreground font-heading font-semibold hover:bg-foreground/5 transition-colors text-sm md:text-base"
            >
              Comprar Básico
            </button>
          </motion.div>

          {/* VIP Plan */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-2xl p-5 md:p-6 border-2 border-primary shadow-lg relative order-1 md:order-2"
          >
            {/* Recommended badge */}
            <div className="absolute -top-3 right-4 md:right-6 bg-yellow-400 text-foreground px-2.5 md:px-3 py-1 rounded-full text-[10px] md:text-xs font-bold flex items-center gap-1">
              <Star className="w-3 h-3" />
              RECOMENDADO
            </div>

            <h3 className="font-heading font-bold text-lg md:text-xl text-primary mb-1.5 md:mb-2">
              Kit Completo VIP
            </h3>
            <p className="text-muted-foreground text-xs md:text-sm mb-4 md:mb-6">
              A escolha favorita de 96% das mães.
            </p>
            
            {/* Price */}
            <div className="mb-4 md:mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-muted-foreground line-through text-base md:text-lg">
                  R$ 127,90
                </span>
                <span className="font-heading font-bold text-3xl md:text-4xl text-gradient-pink">
                  R$ 19,90
                </span>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-2.5 md:space-y-3 mb-5 md:mb-6">
              {vipFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-2.5 md:gap-3">
                  {feature.special ? (
                    <Zap className="w-4 h-4 md:w-5 md:h-5 text-primary shrink-0 mt-0.5" />
                  ) : (
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-success shrink-0 mt-0.5" />
                  )}
                  <span className={`text-xs md:text-sm ${feature.bold ? 'font-bold text-foreground' : 'text-foreground'}`}>
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a 
              href="https://pagamento.receitasparabebe.site/checkout/v4/u0dHxGoABDsQ8rQmMzx6"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta w-full mb-2 md:mb-3 text-base md:text-lg py-3.5 md:py-4 block text-center"
            >
              QUERO O COMPLETO →
            </a>
            <p className="text-center text-[10px] md:text-xs text-muted-foreground">
              Garantia de 7 dias. Risco Zero.
            </p>
          </motion.div>
        </div>

        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-6 md:mt-8"
        >
          <div className="inline-flex items-center gap-2 text-muted-foreground text-xs md:text-sm">
            <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-success" />
            Compra 100% Segura.
          </div>
        </motion.div>

        {/* Upsell Popup */}
        <UpsellPopup
          open={showUpsell}
          onClose={() => setShowUpsell(false)}
          onAcceptUpsell={handleAcceptUpsell}
          onDeclineUpsell={handleDeclineUpsell}
        />
      </div>
    </section>
  );
};

export default PricingSection;
