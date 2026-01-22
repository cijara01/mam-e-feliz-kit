import { useState, useEffect, lazy, Suspense } from 'react';
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
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    // Delay rendering until after LCP
    const renderTimer = setTimeout(() => {
      setShouldRender(true);
    }, 3000);

    return () => clearTimeout(renderTimer);
  }, []);

  useEffect(() => {
    if (!shouldRender) return;

    // Initial delay before first notification
    const initialDelay = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    // Show notification every 25 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % notifications.length);
      setIsVisible(true);
    }, 25000);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, [shouldRender]);

  useEffect(() => {
    if (isVisible) {
      // Hide after 5 seconds
      const hideTimeout = setTimeout(() => {
        setIsVisible(false);
      }, 5000);
      return () => clearTimeout(hideTimeout);
    }
  }, [isVisible, currentIndex]);

  if (!shouldRender) return null;

  const currentNotification = notifications[currentIndex];

  return (
    <>
      {isVisible && (
        <div
          className="fixed bottom-20 left-4 z-50 max-w-[300px] animate-slide-up"
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
                  <CheckCircle className="w-3 h-3 text-success ml-1" />
                  <span className="text-[10px] text-success font-bold">VERIFICADO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SocialProofNotification;
