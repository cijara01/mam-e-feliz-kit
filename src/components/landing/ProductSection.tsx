import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle2, Heart } from 'lucide-react';

const features = [
  "500 receitas testadas por mães REAIS que estavam apavoradas como você.",
  "Cada receita foi aprovada por bebês de verdade (não bebês de manual).",
  "Organizadas por idade, textura e segurança.",
  "Baseadas nas diretrizes da SBP – zero contradições.",
];

const ProductSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const scrollToPrice = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="product" ref={ref} className="py-10 md:py-16 px-4 md:px-8 bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-10"
        >
          <span className="inline-block text-[10px] md:text-xs font-semibold tracking-wider text-primary mb-1.5 md:mb-2">
            A RESPOSTA QUE VOCÊ PROCURAVA
          </span>
          <h2 className="font-heading text-xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
            Apresentamos: <span className="text-gradient-pink">Mãe Nutri+</span>
          </h2>
          <div className="flex justify-center">
            <Heart className="w-6 h-6 md:w-8 md:h-8 text-success fill-success" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto"
        >
          <h3 className="font-heading font-bold text-lg md:text-2xl text-center text-foreground mb-6 md:mb-8">
            O Único Guia que Tira Você da Paralisia
          </h3>

          {/* Feature card */}
          <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-8 shadow-card border border-border mb-6 md:mb-8">
            <div className="space-y-3 md:space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2.5 md:gap-3">
                  <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-success shrink-0 mt-0.5" />
                  <p className="text-foreground text-sm md:text-base">
                    {feature.includes('REAIS') ? (
                      <>
                        500 receitas testadas por mães <strong className="text-primary">REAIS</strong> que estavam apavoradas como você.
                      </>
                    ) : feature.includes('bebês de verdade') ? (
                      <>
                        Cada receita foi aprovada por <strong className="text-primary">bebês de verdade</strong> (não bebês de manual).
                      </>
                    ) : feature.includes('idade, textura') ? (
                      <>
                        Organizadas por <strong className="text-primary">idade, textura e segurança</strong>.
                      </>
                    ) : (
                      <>
                        Baseadas nas diretrizes da <strong className="text-primary">SBP</strong> – zero contradições.
                      </>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center px-2">
            <button 
              onClick={scrollToPrice} 
              className="btn-cta mb-2 md:mb-3 text-sm md:text-base py-4 px-8 inline-flex items-center justify-center gap-2"
            >
              <span>QUERO PARAR DE SOFRER</span>
              <span>→</span>
            </button>
            <p className="text-xs md:text-sm text-muted-foreground flex items-center justify-center gap-1.5 md:gap-2">
              <span className="text-base md:text-lg">🔒</span>
              Acesso imediato e vitalício
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductSection;
