import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Clock, Smile, Coins, Shield, Truck } from 'lucide-react';

const benefits = [
  {
    icon: Heart,
    title: "Nutrição Completa",
    description: "15 sabores rotativos com ferro, vitaminas e proteínas para crescimento forte e saudável. 💪",
    color: "bg-pink-light",
  },
  {
    icon: Clock,
    title: "Praticidade Total",
    description: "Congele, aqueça em 2 min e sirva. Adeus bagunça na cozinha! ⏱️",
    color: "bg-accent",
  },
  {
    icon: Smile,
    title: "Sabor que Bebê Ama",
    description: "Texturas cremosas e suaves, zero rejeição. Bebê feliz = mamãe tranquila! 😊",
    color: "bg-secondary",
  },
  {
    icon: Coins,
    title: "Economia Real",
    description: "Menos de R$7 por papinha. Muito mais barato que fazer em casa + bônus incluso! 💰",
    color: "bg-pink-light",
  },
  {
    icon: Shield,
    title: "Seguro de 0 a 24m",
    description: "Testado para alérgicos, sem sal/açúcar/conservantes. Tranquilidade garantida. ✅",
    color: "bg-accent",
  },
  {
    icon: Truck,
    title: "Entrega Rápida",
    description: "Frete grátis para todo Brasil! Chega geladinho em embalagem térmica. 📦",
    color: "bg-secondary",
  },
];

const BenefitsSection = () => {
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
            Por Que o <span className="text-gradient-pink">Mãe Nutri+</span> é Tão Incrível?
          </h2>
          <p className="section-subtitle">
            Cada detalhe pensado para facilitar sua vida e nutrir seu bebê com amor.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-hover"
            >
              <div className={`icon-circle mb-4`}>
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground">
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
