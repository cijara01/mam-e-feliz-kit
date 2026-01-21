import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import nutritionistPhoto from '@/assets/nutritionist-photo.jpg';

const AuthorSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-10 md:py-16 px-4 md:px-8 bg-white">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-6 md:gap-8 items-center"
        >
          {/* Photo */}
          <div className="order-2 md:order-1">
            <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-card max-w-xs mx-auto md:max-w-none">
              <img
                src={nutritionistPhoto}
                alt="Ana Paula Costa - Nutricionista Especialista em Pediatria"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 text-center md:text-left">
            <span className="inline-block text-[10px] md:text-xs font-semibold tracking-wider text-muted-foreground mb-1.5 md:mb-2">
              QUEM CRIOU O MÉTODO
            </span>
            <h2 className="font-heading text-xl md:text-3xl font-bold text-foreground mb-1.5 md:mb-2">
              Ana Paula Costa
            </h2>
            <p className="text-primary font-medium text-sm md:text-base mb-4 md:mb-6">
              Nutricionista Especialista em Pediatria
            </p>

            <div className="bg-secondary/50 rounded-xl md:rounded-2xl p-4 md:p-6 border-l-4 border-primary text-left">
              <p className="text-foreground italic text-sm md:text-base leading-relaxed">
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
