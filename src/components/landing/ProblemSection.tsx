import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { X, AlertTriangle } from 'lucide-react';

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
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="section-title md:text-section-md">
            Você Reconhece Essa Sensação? 😰
          </h2>
          <div className="w-12 h-1 bg-primary mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Problem cards */}
        <div className="max-w-2xl mx-auto space-y-3 mb-12">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-secondary/30 rounded-xl p-4 border border-border"
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <X className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="font-heading font-bold text-primary">
                    {problem.title}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    – {problem.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Not your fault card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative rounded-3xl overflow-hidden max-w-xl mx-auto"
          style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #333 100%)' }}
        >
          <div className="p-8 md:p-10 text-center text-white">
            <span className="inline-block text-xs font-semibold tracking-wider text-pink-300 mb-4">
              A VERDADE LIBERTADORA
            </span>
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-6">
              NÃO É <span className="text-primary">CULPA SUA.</span>
            </h3>
            
            <div className="space-y-4 mb-6 text-left">
              {confusions.map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-white/5 rounded-lg p-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                  <p className="text-white/90 text-sm">
                    <strong>{item.text}</strong> {item.detail}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-white/80 mb-2">
              Você não precisa de mais informação.
            </p>
            <div className="inline-block bg-success text-white px-6 py-2 rounded-lg font-heading font-bold">
              VOCÊ PRECISA DE SEGURANÇA.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
