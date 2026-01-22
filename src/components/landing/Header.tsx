import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPrice = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-soft py-2 md:py-3' 
          : 'bg-white/80 backdrop-blur-sm py-3 md:py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-1.5 md:gap-2">
          <span className="text-lg md:text-xl">🍼</span>
          <span className="font-heading font-bold text-base md:text-lg text-foreground">
            Mãe <span className="text-primary">Nutri+</span>
          </span>
        </a>

        {/* Navigation - hidden on mobile */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <button 
            onClick={() => scrollToSection('benefits')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Benefícios
          </button>
          <button 
            onClick={() => scrollToSection('testimonials')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Depoimentos
          </button>
          <button 
            onClick={() => scrollToSection('faq')}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Dúvidas
          </button>
        </nav>

        <button
          onClick={scrollToPrice}
          className="bg-primary text-primary-foreground px-3 py-1.5 md:px-4 md:py-2 rounded-full font-medium text-xs md:text-sm hover:bg-primary/90 transition-colors"
        >
          Ver Oferta
        </button>
      </div>
    </motion.header>
  );
};

export default Header;
