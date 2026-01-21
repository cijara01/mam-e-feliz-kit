import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Package, Microwave, Baby } from 'lucide-react';
import deliveryImage from '@/assets/delivery-box.jpg';

const steps = [
  {
    number: "1",
    icon: Package,
    title: "Receba o Kit em Casa",
    description: "Entrega rápida em embalagem térmica. Tudo geladinho e pronto pra congelar!",
  },
  {
    number: "2",
    icon: Microwave,
    title: "Aqueça em 2 Minutos",
    description: "Só tirar do freezer e colocar no micro. Praticidade máxima!",
  },
  {
    number: "3",
    icon: Baby,
    title: "Sirva com Amor",
    description: "Veja o sorriso do seu bebê comendo uma papinha deliciosa e nutritiva! 💕",
  },
];

const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title md:text-section-md">
            Em 3 Passos Você Saí da Introdução Alimentar
          </h2>
          <p className="section-subtitle">
            Super simples! Qualquer mãe consegue, mesmo exausta no puerpério.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative text-center"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary to-primary/20" />
              )}
              
              <div className="relative z-10">
                <div className="icon-circle w-20 h-20 mx-auto mb-4 text-white font-heading font-bold text-2xl">
                  {step.number}
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <div className="rounded-3xl overflow-hidden shadow-card">
            <img
              src={deliveryImage}
              alt="Mãe recebendo kit de papinhas em casa"
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
