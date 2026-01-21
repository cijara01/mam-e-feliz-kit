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
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title md:text-section-md">
            Em 3 Passos Você Sai da Insegurança:
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Step card */}
              <div className="bg-white rounded-2xl p-6 border border-border shadow-sm h-full">
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="w-8 h-8 rounded-full bg-primary text-white font-heading font-bold flex items-center justify-center text-sm">
                    {step.number}
                  </div>
                </div>
                
                <div className="text-center pt-4">
                  <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
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
