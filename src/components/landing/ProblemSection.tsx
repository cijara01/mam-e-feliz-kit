import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { X, AlertTriangle } from 'lucide-react';
import ebookMockup from '@/assets/ebook-mockup.jpg';

const problems = [
  {
    title: "Tô fazendo errado?",
    description: "Cada vídeo na internet fala uma coisa diferente.",
  },
  {
    title: "Morro de medo dele engasgar",
    description: "Você treme só de pensar em dar pedaços.",
  },
  {
    title: "Ele recusa tudo!",
    description: "Você passa horas cozinhando e ele faz cara de nojo.",
  },
  {
    title: "Não aguento mais essa culpa",
    description: "Outras mães parecem ter bebês perfeitos.",
  },
  {
    title: "Tô exausta demais pra pensar",
    description: "Você queria dar só o peito pra sempre.",
  },
];

const confusions = [
  {
    text: "São 50 métodos diferentes",
    detail: "(BLW, papinha, participativa...) confundindo sua cabeça.",
  },
  {
    text: "São 20 pediatras",
    detail: "na internet falando coisas opostas todos os dias.",
  },
  {
    text: "São 1000 receitas aleatórias",
    detail: "no Pinterest que seu bebê cospe na hora.",
  },
];

const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-10 md:py-16 px-4 md:px-8 bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-10"
        >
          <h2 className="font-heading text-xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Você Reconhece Essa Sensação? 😰
          </h2>
          <div className="w-10 md:w-12 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Problem cards */}
        <div className="max-w-xl mx-auto space-y-2.5 md:space-y-3 mb-10 md:mb-12">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-secondary/30 rounded-xl p-3 md:p-4 border border-border"
            >
              <div className="flex items-start gap-2.5 md:gap-3">
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <X className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-primary text-sm md:text-base">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground text-xs md:text-sm">
                    – {problem.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Product mockup moved here */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="max-w-xs md:max-w-md mx-auto mb-8 md:mb-10"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-card bg-white p-3 md:p-4">
            <img
              src={ebookMockup}
              alt="500 Receitas para Introdução Alimentar - Ebook"
              className="w-full h-auto rounded-lg"
              width="518"
              height="510"
              loading="lazy"
            />
            <div className="hidden sm:block absolute top-6 left-6 bg-primary/90 text-white px-2 py-1 rounded-full text-[10px] md:text-xs font-semibold">
              ZERO CONTRADIÇÕES
            </div>
            <div className="hidden sm:block absolute top-6 right-6 bg-primary/90 text-white px-2 py-1 rounded-full text-[10px] md:text-xs font-semibold">
              BASEADO NA SBP
            </div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-foreground/80 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-bold whitespace-nowrap">
              MAIS DE 2.500 MÃES Já!
            </div>
          </div>
        </motion.div>

        {/* Not your fault card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative rounded-2xl md:rounded-3xl overflow-hidden max-w-xl mx-auto"
          style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #333 100%)' }}
        >
          <div className="p-6 md:p-10 text-center text-white">
            <span className="inline-block text-[10px] md:text-xs font-semibold tracking-wider text-pink-300 mb-3 md:mb-4">
              A VERDADE LIBERTADORA
            </span>
            <h3 className="font-heading text-xl md:text-3xl font-bold mb-5 md:mb-6">
              NÃO É <span className="text-primary">CULPA SUA.</span>
            </h3>
            
            <div className="space-y-3 md:space-y-4 mb-5 md:mb-6 text-left">
              {confusions.map((item, index) => (
                <div key={index} className="flex items-start gap-2.5 md:gap-3 bg-white/5 rounded-lg p-2.5 md:p-3">
                  <AlertTriangle className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 shrink-0 mt-0.5" />
                  <p className="text-white/90 text-xs md:text-sm">
                    <strong>{item.text}</strong> {item.detail}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-white/80 text-sm md:text-base mb-2">
              Você não precisa de mais informação.
            </p>
            <div className="inline-block bg-success text-white px-5 md:px-6 py-2 rounded-lg font-heading font-bold text-sm md:text-base">
              VOCÊ PRECISA DE SEGURANÇA.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
