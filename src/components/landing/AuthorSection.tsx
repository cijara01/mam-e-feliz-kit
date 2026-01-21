import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import nutritionistPhoto from '@/assets/nutritionist-photo.jpg';

const AuthorSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          {/* Photo */}
          <div className="order-2 md:order-1">
            <div className="rounded-3xl overflow-hidden shadow-card">
              <img
                src={nutritionistPhoto}
                alt="Ana Paula Costa - Nutricionista Especialista em Pediatria"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2">
            <span className="inline-block text-xs font-semibold tracking-wider text-muted-foreground mb-2">
              QUEM CRIOU O MÉTODO
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
              Ana Paula Costa
            </h2>
            <p className="text-primary font-medium mb-6">
              Nutricionista Especialista em Pediatria
            </p>

            <div className="bg-secondary/50 rounded-2xl p-6 border-l-4 border-primary">
              <p className="text-foreground italic leading-relaxed">
                "Meu filho quase teve anemia por rejeição alimentar. Eu era nutricionista, mas estava exausta demais para pensar. Foi aí que entendi: <strong>conhecimento sem praticidade não salva ninguém</strong>. Criei estas 500 receitas testadas para que nenhuma mãe passe o que eu passei."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AuthorSection;
