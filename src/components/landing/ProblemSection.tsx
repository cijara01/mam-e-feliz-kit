import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { X, Clock, Frown, AlertTriangle } from 'lucide-react';

const problems = [
  {
    icon: Clock,
    text: "Passa horas na cozinha exausta",
  },
  {
    icon: Frown,
    text: "Seu bebê rejeita comida e faz birra",
  },
  {
    icon: AlertTriangle,
    text: "Tem medo de não nutrir direito",
  },
  {
    icon: X,
    text: "Receitas complicadas demais",
  },
];

const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-secondary/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="section-title">
            Você Reconhece Isso? 😔
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm"
            >
              <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center shrink-0">
                <problem.icon className="w-5 h-5 text-destructive" />
              </div>
              <p className="text-foreground font-medium">{problem.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Not your fault card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative rounded-3xl overflow-hidden max-w-xl mx-auto"
          style={{ background: 'var(--gradient-cta)' }}
        >
          <div className="p-8 md:p-10 text-center text-white">
            <span className="text-4xl mb-4 block">💝</span>
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-3">
              NÃO É CULPA SUA.
            </h3>
            <p className="text-white/90 text-lg mb-4">
              Toda mãe passa por isso. A introdução alimentar é desafiadora, 
              mas você não precisa enfrentar sozinha.
            </p>
            <p className="font-heading font-bold text-xl">
              VOCÊ PRECISA DE SEGURANÇA. 🌟
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
