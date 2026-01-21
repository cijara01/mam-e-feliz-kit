import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Leaf, Eye, Dumbbell, Brain, Heart, Zap } from 'lucide-react';

const ingredients = [
  {
    name: "Abóbora + Frango",
    nutrients: "Vitamina A + Proteína",
    benefits: "Visão + Músculos",
    icon: Eye,
    color: "bg-orange-100 text-orange-600",
  },
  {
    name: "Espinafre + Batata",
    nutrients: "Ferro + Carboidratos",
    benefits: "Energia + Sangue forte",
    icon: Zap,
    color: "bg-green-100 text-green-600",
  },
  {
    name: "Banana + Aveia",
    nutrients: "Potássio + Fibras",
    benefits: "Digestão + Coração",
    icon: Heart,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    name: "Carne + Cenoura",
    nutrients: "Proteína + Beta-caroteno",
    benefits: "Crescimento + Imunidade",
    icon: Dumbbell,
    color: "bg-red-100 text-red-600",
  },
  {
    name: "Maçã + Pera",
    nutrients: "Vitamina C + Fibras",
    benefits: "Imunidade + Saciedade",
    icon: Leaf,
    color: "bg-pink-100 text-pink-600",
  },
  {
    name: "Brócolis + Batata Doce",
    nutrients: "Cálcio + Vitamina B6",
    benefits: "Ossos + Cérebro",
    icon: Brain,
    color: "bg-emerald-100 text-emerald-600",
  },
];

const IngredientsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="section-title md:text-section-md">
            Exemplos do Que Você Vai Receber 🥗
          </h2>
          <p className="section-subtitle">
            100% transparente! Veja os ingredientes e benefícios de cada papinha.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ingredients.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-5 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center shrink-0`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground mb-1">
                    {item.name}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-1">
                    {item.nutrients}
                  </p>
                  <p className="text-sm font-medium text-primary">
                    ✨ {item.benefits}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-muted-foreground text-sm mt-8"
        >
          + mais 9 sabores deliciosos no kit! Todos com ingredientes 100% brasileiros e orgânicos.
        </motion.p>
      </div>
    </section>
  );
};

export default IngredientsSection;
