import { motion } from 'framer-motion';
import { Star, Shield, Truck, Play } from 'lucide-react';
import heroImage from '@/assets/hero-mom-baby.jpg';

const HeroSection = () => {
  const scrollToPrice = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProduct = () => {
    document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 z-0"
        style={{ background: 'var(--gradient-hero)' }}
      />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-48 h-48 bg-primary/15 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6"
            >
              <span className="text-sm font-medium">🌟 +2.500 mães já aprovaram!</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-hero md:text-hero-md lg:text-hero-lg text-foreground mb-6"
            >
              Você Tá{' '}
              <span className="text-gradient-pink">Perdida</span>{' '}
              Com a Introdução Alimentar? 🍼
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-body-lg md:text-body-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Papinhas 100% naturais, prontas para aquecer em 2 minutos. 
              Seu bebê come saudável, você descansa! 
              <strong className="text-foreground"> Frete grátis + Garantia 30 dias.</strong>
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <button onClick={scrollToPrice} className="btn-cta">
                Quero Meu Kit Agora! 💕
              </button>
              <button
                onClick={scrollToProduct}
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-full border-2 border-primary text-primary font-heading font-semibold hover:bg-primary/5 transition-colors"
              >
                <Play className="w-5 h-5" />
                Veja Como Funciona
              </button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="ml-2 text-sm font-medium text-muted-foreground">
                  4.9/5 (2.347 avaliações)
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-success" />
                <span>Garantia 30 dias</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Truck className="w-4 h-4 text-primary" />
                <span>Frete Grátis</span>
              </div>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-cta">
              <img
                src={heroImage}
                alt="Mãe feliz alimentando bebê com papinha nutritiva"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-4 -left-4 md:left-4 bg-white rounded-2xl p-4 shadow-card"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
                  <span className="text-2xl">✅</span>
                </div>
                <div>
                  <p className="font-heading font-bold text-foreground">Pronto em 2min</p>
                  <p className="text-sm text-muted-foreground">Sem conservantes</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
