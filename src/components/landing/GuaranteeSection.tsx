import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, RefreshCw, MessageCircle } from 'lucide-react';

const GuaranteeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-secondary/50">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden p-8 md:p-12 text-center"
          style={{ background: 'var(--gradient-cta)' }}
        >
          {/* Shield icon */}
          <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
            <Shield className="w-10 h-10 text-white" />
          </div>

          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Garantia Incondicional de 30 Dias 💯
          </h2>
          
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Se você ou seu bebê não amarem o Mãe Nutri+, devolvemos 100% do seu dinheiro. 
            Sem perguntas, sem burocracia. <strong>Zero risco!</strong>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2 text-white">
              <RefreshCw className="w-5 h-5" />
              <span className="font-medium">Troca Grátis</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-white/50" />
            <div className="flex items-center gap-2 text-white">
              <MessageCircle className="w-5 h-5" />
              <span className="font-medium">Suporte 24h WhatsApp</span>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3" />
        </motion.div>
      </div>
    </section>
  );
};

export default GuaranteeSection;
