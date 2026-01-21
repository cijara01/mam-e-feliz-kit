import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Gift, Truck, Shield, CreditCard } from 'lucide-react';

const includes = [
  "30 potes de papinhas variadas (120g cada)",
  "15 sabores diferentes (frutas, legumes, carnes)",
  "Embalagem térmica especial",
  "Receituário digital com 50 receitas",
  "Grupo exclusivo de mães no WhatsApp",
  "Suporte nutricional por 30 dias",
];

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" ref={ref} className="section-padding">
      <div className="container mx-auto max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-flex items-center gap-2 bg-warm/10 text-warm px-4 py-2 rounded-full text-sm font-semibold mb-4">
            🔥 Oferta Especial por Tempo Limitado!
          </span>
          <h2 className="section-title md:text-section-md">
            Escolha Sua Transformação
          </h2>
        </motion.div>

        {/* Price Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="price-card"
        >
          {/* Popular badge */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-lg">
            ⭐ MAIS VENDIDO
          </div>

          <div className="text-center mb-6 pt-4">
            <h3 className="font-heading font-bold text-xl text-foreground mb-4">
              Kit Mãe Nutri+ Completo
            </h3>
            
            {/* Price */}
            <div className="mb-2">
              <span className="text-muted-foreground line-through text-lg">
                De R$ 297,00
              </span>
            </div>
            <div className="flex items-baseline justify-center gap-2 mb-1">
              <span className="text-sm text-foreground font-medium">12x de</span>
              <span className="font-heading font-bold text-5xl text-gradient-pink">
                R$ 19,90
              </span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              ou R$ 197,00 à vista com 5% OFF
            </p>

            {/* Savings badge */}
            <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-semibold">
              <Gift className="w-4 h-4" />
              Economia de R$ 100,00!
            </div>
          </div>

          {/* Includes */}
          <div className="space-y-3 mb-8">
            {includes.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-success shrink-0 mt-0.5" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button className="btn-cta w-full mb-4">
            Quero Meu Kit Agora! 💕
          </button>

          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Truck className="w-4 h-4 text-primary" />
              <span>Frete Grátis</span>
            </div>
            <div className="flex items-center gap-1">
              <Shield className="w-4 h-4 text-success" />
              <span>Garantia 30 dias</span>
            </div>
            <div className="flex items-center gap-1">
              <CreditCard className="w-4 h-4" />
              <span>12x sem juros</span>
            </div>
          </div>
        </motion.div>

        {/* Urgency */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-6"
        >
          <p className="text-muted-foreground text-sm">
            ⏰ <strong className="text-warm">Últimas unidades!</strong> Próximo lote só em 15 dias.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
