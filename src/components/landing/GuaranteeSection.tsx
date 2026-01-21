import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ShieldCheck } from 'lucide-react';

const GuaranteeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToPrice = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-success/10 rounded-3xl p-8 md:p-12 text-center border-2 border-success/20"
        >
          {/* Shield icon */}
          <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-6">
            <ShieldCheck className="w-8 h-8 text-success" />
          </div>

          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            Garantia Incondicional de 30 Dias
          </h2>
          
          <p className="text-muted-foreground text-lg mb-6">
            Seu bebê não gostou? Nós devolvemos seu dinheiro. <strong className="text-foreground">Sem perguntas chatas, sem letras miúdas.</strong> O risco é todo nosso para você ter tranquilidade total.
          </p>

          <button onClick={scrollToPrice} className="bg-success text-white px-8 py-4 rounded-full font-heading font-bold text-lg hover:bg-success/90 transition-colors shadow-lg">
            Zero Risco para a Mamãe!
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
