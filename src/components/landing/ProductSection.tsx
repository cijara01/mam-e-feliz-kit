import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { CheckCircle2, Heart } from 'lucide-react';
import ebookMockup from '@/assets/ebook-mockup.jpg';

const features = [
  "500 receitas testadas por mães REAIS que estavam apavoradas como você.",
  "Cada receita foi aprovada por bebês de verdade (não bebês de manual).",
  "Organizadas por idade, textura e segurança.",
  "Baseadas nas diretrizes da SBP – zero contradições.",
];

const ProductSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToPrice = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="product" ref={ref} className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-block text-xs font-semibold tracking-wider text-primary mb-2">
            A RESPOSTA QUE VOCÊ PROCURAVA
          </span>
          <h2 className="section-title md:text-section-md">
            Apresentamos: <span className="text-gradient-pink">Mãe Nutri+</span>
          </h2>
          <div className="flex justify-center mt-4">
            <Heart className="w-8 h-8 text-success fill-success" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <h3 className="font-heading font-bold text-xl md:text-2xl text-center text-foreground mb-8">
            O Único Guia que Tira Você da Paralisia
          </h3>

          {/* Feature card */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-card border border-border mb-8">
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
                  <p className="text-foreground">
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
          <div className="text-center">
            <button onClick={scrollToPrice} className="btn-cta mb-3">
              QUERO PARAR DE SOFRER →
            </button>
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              <span className="text-lg">🔒</span>
              Acesso imediato e vitalício
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductSection;
