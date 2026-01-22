import { motion } from 'framer-motion';
import { Star, CheckCircle } from 'lucide-react';
import vslVideo from '@/assets/vsl-video.mov';

const HeroSection = () => {
  const scrollToPrice = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProduct = () => {
    document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-20 pb-8 md:pt-24 md:pb-12 overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 z-0"
        style={{ background: 'var(--gradient-hero)' }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Rating badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-4 md:mb-6"
        >
          <div className="inline-flex items-center gap-1.5 md:gap-2 text-xs md:text-sm">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
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
          className="font-heading text-2xl md:text-4xl lg:text-5xl text-foreground text-center mb-3 md:mb-4 leading-tight px-2"
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
          className="text-center mb-4 md:mb-6 px-2"
        >
          <p className="font-heading text-base md:text-xl text-primary font-semibold mb-1.5 md:mb-2">
            Pare de Sofrer: 500 Receitas TESTADAS para Seu Bebê Comer Sem Rejeição
          </p>
          <p className="text-muted-foreground text-sm md:text-lg">
            Acabou a insegurança. Acabou o medo de engasgar. Acabou a culpa.
          </p>
        </motion.div>

        {/* Trust badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-center mb-6 md:mb-8 px-2"
        >
          <div className="inline-flex items-center gap-2 bg-white border border-border rounded-full px-3 py-2 md:px-4">
            <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-success shrink-0" />
            <span className="text-xs md:text-sm text-foreground font-medium">
              O único guia que você precisa para alimentar seu bebê com <strong>CONFIANÇA</strong>.
            </span>
          </div>
        </motion.div>

        {/* VSL Video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto mb-6 md:mb-8 px-3"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-card bg-white p-2 md:p-3">
            <video
              src={vslVideo}
              controls
              playsInline
              className="w-full h-auto rounded-xl"
              poster=""
            >
              Seu navegador não suporta vídeos.
            </video>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col gap-3 md:flex-row md:gap-4 justify-center mb-5 md:mb-6 px-3 sm:px-4"
        >
          <button onClick={scrollToPrice} className="btn-cta text-sm sm:text-base md:text-lg py-3.5 sm:py-4 w-full md:w-auto">
            Quero Segurança Agora →
          </button>
          <button
            onClick={scrollToProduct}
            className="px-5 sm:px-6 py-3 sm:py-4 rounded-full border-2 border-primary text-primary font-heading font-semibold hover:bg-primary/5 transition-colors text-sm sm:text-base w-full md:w-auto"
          >
            Ver Conteúdo
          </button>
        </motion.div>

        {/* Social proof mini */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-2 text-xs md:text-sm text-muted-foreground"
        >
          <div className="flex -space-x-2">
            <img src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=60&h=60&fit=crop&crop=face" alt="Mãe" className="w-7 h-7 md:w-8 md:h-8 rounded-full border-2 border-white object-cover" />
            <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=60&h=60&fit=crop&crop=face" alt="Mãe" className="w-7 h-7 md:w-8 md:h-8 rounded-full border-2 border-white object-cover" />
            <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=60&h=60&fit=crop&crop=face" alt="Mãe" className="w-7 h-7 md:w-8 md:h-8 rounded-full border-2 border-white object-cover" />
          </div>
          <span>Junte-se a milhares de mães!</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
