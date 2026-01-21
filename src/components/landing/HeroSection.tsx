import { motion } from 'framer-motion';
import { Star, CheckCircle } from 'lucide-react';
import ebookMockup from '@/assets/ebook-mockup.jpg';

const HeroSection = () => {
  const scrollToPrice = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProduct = () => {
    document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-24 pb-12 overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 z-0"
        style={{ background: 'var(--gradient-hero)' }}
      />

      <div className="container mx-auto relative z-10">
        {/* Rating badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 text-sm">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-primary font-medium">4.9/5 (2.547 mães aprovam)</span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-hero md:text-hero-md lg:text-hero-lg text-foreground text-center mb-4"
        >
          VOCÊ TÁ{' '}
          <span className="text-gradient-pink">PERDIDA</span>{' '}
          COM A INTRODUÇÃO ALIMENTAR? 😰
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-6"
        >
          <p className="font-heading text-lg md:text-xl text-primary font-semibold mb-2">
            Pare de Sofrer: 500 Receitas TESTADAS para Seu Bebê Comer Sem Rejeição
          </p>
          <p className="text-muted-foreground text-base md:text-lg">
            Acabou a insegurança. Acabou o medo de engasgar. Acabou a culpa.
          </p>
        </motion.div>

        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-white border border-border rounded-full px-4 py-2">
            <CheckCircle className="w-5 h-5 text-success" />
            <span className="text-sm text-foreground font-medium">
              O único guia que você precisa para alimentar seu bebê com <strong>CONFIANÇA</strong>.
            </span>
          </div>
        </motion.div>

        {/* Video placeholder / Product mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-md mx-auto mb-8"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-card bg-white p-4">
            <img
              src={ebookMockup}
              alt="500 Receitas para Introdução Alimentar - Ebook"
              className="w-full h-auto rounded-lg"
            />
            {/* Badge overlays */}
            <div className="absolute top-8 left-8 bg-primary/90 text-white px-3 py-1 rounded-full text-xs font-semibold">
              ZERO CONTRADIÇÕES
            </div>
            <div className="absolute top-8 right-8 bg-primary/90 text-white px-3 py-1 rounded-full text-xs font-semibold">
              BASEADO NA SBP
            </div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-foreground/80 text-white px-4 py-2 rounded-lg text-sm font-bold">
              MAIS DE 2.500 MÃES Já!
            </div>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-6"
        >
          <button onClick={scrollToPrice} className="btn-cta">
            Quero Segurança Agora →
          </button>
          <button
            onClick={scrollToProduct}
            className="px-6 py-4 rounded-full border-2 border-primary text-primary font-heading font-semibold hover:bg-primary/5 transition-colors"
          >
            Ver Conteúdo
          </button>
        </motion.div>

        {/* Social proof mini */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-2 text-sm text-muted-foreground"
        >
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-pink-200 border-2 border-white flex items-center justify-center text-xs">👩</div>
            <div className="w-8 h-8 rounded-full bg-pink-300 border-2 border-white flex items-center justify-center text-xs">👩‍🦰</div>
            <div className="w-8 h-8 rounded-full bg-pink-100 border-2 border-white flex items-center justify-center text-xs">👱‍♀️</div>
          </div>
          <span>Junte-se a milhares de mães!</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
