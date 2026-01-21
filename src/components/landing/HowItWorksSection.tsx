import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Smartphone, BookOpen, Heart } from 'lucide-react';

const steps = [
  {
    number: "1",
    icon: Smartphone,
    title: "Recebe Agora",
    description: "Comprou? Acessa na hora por email. Abre no celular, tablet ou imprime. Como preferir.",
  },
  {
    number: "2",
    icon: BookOpen,
    title: "Escolhe a Receita",
    description: "Filtra por idade do seu bebê (6m, 9m, 12m..). Vê a textura indicada. Ingredientes simples.",
  },
  {
    number: "3",
    icon: Heart,
    title: "Serve Com Confiança",
    description: "Seu bebê come. Você RELAXA. Sem medo. Sem culpa. Só amor. Preparo rápido.",
  },
];

const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-10 md:py-16 px-4 md:px-8 bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="font-heading text-xl md:text-3xl font-bold text-foreground">
            Em 3 Passos Você Sai da Insegurança:
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Step card */}
              <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-6 border border-border shadow-sm h-full">
                {/* Step number */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-primary text-white font-heading font-bold flex items-center justify-center text-xs md:text-sm">
                    {step.number}
                  </div>
                </div>
                
                <div className="text-center pt-3 md:pt-4">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <step.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-base md:text-lg text-foreground mb-1.5 md:mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
