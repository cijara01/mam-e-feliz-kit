import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Clock, CheckCircle } from 'lucide-react';

const recipes = [
  {
    name: "Papinha de Abóbora com Frango",
    age: "6-8 meses",
    time: "10min",
    benefit: "Textura cremosa, bebês aceitam fácil",
  },
  {
    name: "Risoto de Legumes",
    age: "9-11 meses",
    time: "12min",
    benefit: "Treina mastigação sem riscos",
  },
  {
    name: "Bolinho de Banana (sem açúcar)",
    age: "12+ meses",
    time: "8min",
    benefit: "Lanchinhos que eles AMAM",
  },
  {
    name: "Feijão Amassadinho com Arroz",
    age: "8-10 meses",
    time: "5min",
    benefit: "Ferro + praticidade",
  },
];

const IngredientsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-10 md:py-16 px-4 md:px-8 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-10"
        >
          <h2 className="font-heading text-xl md:text-3xl font-bold text-foreground flex items-center justify-center gap-2">
            <span className="text-xl md:text-2xl">📋</span>
            Exemplos do Que Você Vai Receber:
          </h2>
        </motion.div>

        {/* Recipe cards for mobile, table for desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6 md:mb-8"
        >
          {/* Mobile: Cards */}
          <div className="md:hidden space-y-3">
            {recipes.map((recipe, index) => (
              <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-border">
                <h4 className="font-heading font-bold text-foreground text-sm mb-2">{recipe.name}</h4>
                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {recipe.age}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {recipe.time}
                  </span>
                </div>
                <p className="text-success text-xs flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" />
                  {recipe.benefit}
                </p>
              </div>
            ))}
          </div>

          {/* Desktop: Table */}
          <div className="hidden md:block bg-white rounded-2xl overflow-hidden shadow-sm border border-border">
            {/* Header */}
            <div className="grid grid-cols-4 gap-4 p-4 bg-primary/5 border-b border-border text-sm font-heading font-semibold text-foreground">
              <span>Receita</span>
              <span>Idade</span>
              <span>Preparo</span>
              <span>Por Que Funciona</span>
            </div>
            
            {/* Rows */}
            {recipes.map((recipe, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-4 gap-4 p-4 text-sm ${
                  index !== recipes.length - 1 ? 'border-b border-border' : ''
                }`}
              >
                <span className="font-medium text-foreground">{recipe.name}</span>
                <span className="text-muted-foreground flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {recipe.age}
                </span>
                <span className="text-muted-foreground flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {recipe.time}
                </span>
                <span className="text-success flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" />
                  {recipe.benefit}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-foreground font-heading font-semibold text-sm md:text-base"
        >
          + 496 receitas testadas esperando por você.
        </motion.p>
      </div>
    </section>
  );
};

export default IngredientsSection;
