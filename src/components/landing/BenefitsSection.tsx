import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, BookOpen, Baby, Zap, Heart, Smartphone } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: "Segurança Contra Engasgo",
    description: "Receitas organizadas por textura e idade, com cortes seguros indicados. Zero risco, 100% confiança.",
  },
  {
    icon: BookOpen,
    title: "Método Único (SBP)",
    description: "Chega de opiniões contraditórias da internet. Siga um único guia baseado na Sociedade Brasileira de Pediatria.",
  },
  {
    icon: Baby,
    title: "Aprovado por Bebês",
    description: "Receitas validadas por mais de 2.500 mães. Transforme a recusa alimentar em pratinho limpo.",
  },
  {
    icon: Zap,
    title: "Pronto em 15 Minutos",
    description: "Use ingredientes que você já tem em casa. Receitas pensadas para mães reais que não têm tempo a perder.",
  },
  {
    icon: Heart,
    title: "Alívio da Culpa",
    description: "Respeite o ritmo do seu filho sem neuras. Entenda que 'cada bebê tem seu tempo' não é desculpa, é ciência.",
  },
  {
    icon: Smartphone,
    title: "Acesso Imediato",
    description: "Receba agora no seu email. Acesse pelo celular enquanto cozinha, sem precisar de internet.",
  },
];

const BenefitsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title md:text-section-md">
            Por Que o <span className="text-gradient-pink">Mãe Nutri+</span> Tira Sua Insegurança?
          </h2>
          <p className="section-subtitle">
            Cada detalhe do método foi desenhado para te dar paz de espírito.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary/30 rounded-2xl p-6 border border-border"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
