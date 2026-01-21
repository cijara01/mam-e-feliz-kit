import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, CheckCircle } from 'lucide-react';

const notifications = [
  { name: "Leticia", city: "Porto Alegre", product: "Kit Completo" },
  { name: "Mariana", city: "São Paulo", product: "Kit VIP" },
  { name: "Camila", city: "Rio de Janeiro", product: "Kit Completo" },
  { name: "Fernanda", city: "Belo Horizonte", product: "Kit VIP" },
  { name: "Juliana", city: "Curitiba", product: "Kit Completo" },
  { name: "Gabriela", city: "Recife", product: "Kit VIP" },
  { name: "Patricia", city: "Brasília", product: "Kit Completo" },
  { name: "Amanda", city: "Salvador", product: "Kit VIP" },
];


const SocialProofNotification = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Initial delay before first notification
    const initialDelay = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    // Show notification every 25 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % notifications.length);
      setIsVisible(true);
    }, 25000);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      // Hide after 5 seconds
      const hideTimeout = setTimeout(() => {
        setIsVisible(false);
      }, 5000);
      return () => clearTimeout(hideTimeout);
    }
  }, [isVisible, currentIndex]);

  const currentNotification = notifications[currentIndex];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -100, y: 0 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="fixed bottom-20 left-4 z-50 max-w-[300px]"
        >
          <div className="bg-white rounded-xl shadow-2xl border border-pink-100 overflow-hidden">
            <div className="flex items-start gap-3 p-3">
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground">
                  <span className="font-bold">{currentNotification.name}</span>
                  <span className="text-muted-foreground"> de {currentNotification.city}</span>
                </p>
                <p className="text-primary font-semibold text-sm flex items-center gap-1">
                  Acabou de adquirir o {currentNotification.product}! 📦✨
                </p>
                <div className="flex items-center gap-1 mt-1">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CheckCircle className="w-3 h-3 text-green-500 ml-1" />
                  <span className="text-[10px] text-green-600 font-medium">VERIFICADO</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SocialProofNotification;
