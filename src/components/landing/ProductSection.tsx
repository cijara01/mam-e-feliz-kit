import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Timer, Leaf, Baby, CheckCircle2 } from 'lucide-react';
import productImage from '@/assets/product-jars.jpg';

const features = [
  {
    icon: Timer,
    title: "Pronto em 2min",
    description: "Só aquecer no microondas"
  },
  {
    icon: Leaf,
    title: "100% Natural",
    description: "Sem conservantes ou aditivos"
  },
  {
    icon: Baby,
    title: "0 a 24 meses",
    description: "Texturas adaptadas por idade"
  },
];

const ProductSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToPrice = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="product" ref={ref} className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-primary font-heading font-semibold mb-2">
            ✨ A Solução Perfeita
          </span>
          <h2 className="section-title md:text-section-md lg:text-section-lg">
            Apresentamos: <span className="text-gradient-pink">Mãe Nutri+</span>
          </h2>
          <p className="section-subtitle">
            O kit completo de papinhas prontas que toda mãe sonha. 
            Nutritivo, prático e aprovado por pediatras.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-card">
              <img
                src={productImage}
                alt="Potes coloridos de papinhas nutritivas"
                className="w-full h-auto"
              />
            </div>
            
            {/* Feature badges */}
            <div className="absolute -top-4 -right-4 bg-success text-white px-4 py-2 rounded-full font-heading font-bold text-sm shadow-lg">
              30 potes! 🎉
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="space-y-6">
              <p className="text-body-lg text-muted-foreground">
                Imagine seu bebê devorando papinhas cremosas, cheias de vitaminas, 
                <strong className="text-foreground"> sem você passar horas na cozinha exausta</strong>. 
                Nosso kit tem 30 potes variados (frutas, legumes, carnes), 
                porções de 120g cada, validados por nutricionistas.
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="card-hover text-center">
                    <div className="icon-circle w-12 h-12 mx-auto mb-3">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-heading font-bold text-foreground mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Safety badge */}
              <div className="bg-success/10 rounded-2xl p-4 flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-success shrink-0 mt-0.5" />
                <div>
                  <p className="font-heading font-bold text-foreground mb-1">
                    100% Seguro para seu bebê! ✅
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Aprovado pela ANVISA, sem alérgenos comuns, sem sal/açúcar adicionados. 
                    Ingredientes orgânicos brasileiros.
                  </p>
                </div>
              </div>

              <button onClick={scrollToPrice} className="btn-cta">
                Quero Esse Kit! 💕
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
