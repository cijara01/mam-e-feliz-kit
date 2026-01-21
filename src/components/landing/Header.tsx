import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-soft py-3' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="text-2xl">🍼</span>
          <span className="font-heading font-bold text-xl text-foreground">
            Mãe <span className="text-gradient-pink">Nutri+</span>
          </span>
        </a>

        <a
          href="https://wa.me/5511999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full font-medium text-sm hover:bg-success/20 transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          <span className="hidden sm:inline">Fale Conosco</span>
        </a>
      </div>
    </motion.header>
  );
};

export default Header;
