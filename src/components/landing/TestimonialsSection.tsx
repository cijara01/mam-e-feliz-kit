import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    title: '"EU TAVA ME SENTINDO TÃO CULPADA... AGORA TÔ ALIVIADA"',
    text: "Eu morria de medo de engasgo. Assistia 50 vídeos e ficava mais perdida. Com o Mãe Nutri+ eu finalmente me senti SEGURA. As receitas mostram exatamente o corte, a textura. Meu filho come bem e eu DURMO tranquila.",
    name: "Juliana Santos",
    baby: "Mãe do Arthur (7 meses)",
    avatar: "👩‍🦰",
  },
  {
    title: '"ACABOU A FRUSTRAÇÃO DE VER ELE RECUSAR TUDO"',
    text: "Meu bebê fazia cara de nojo pra TUDO. Eu passava 2h cozinhando e ele cuspia. Com as receitas do Mãe Nutri+ (que são aprovadas por bebês reais), ele começou a aceitar. Hoje ele RASPA o prato!",
    name: "Carla Souza",
    baby: "Mãe da Bia (10 meses)",
    avatar: "👩",
  },
  {
    title: '"PRÁTICO DEMAIS. EU NÃO TINHA CABEÇA PARA COZINHAR"',
    text: "Pós-cesárea eu tava exausta. O Mãe Nutri+ tem receitas de 5-10min com coisas que eu já tinha em casa. Salvou minha rotina e a saúde da minha filha. Investimento que valeu CADA centavo.",
    name: "Fernanda Lima",
    baby: "Mãe de gêmeas",
    avatar: "👱‍♀️",
  },
];

const stats = [
  { value: "2.500+", label: "MÃES CONFIANTES" },
  { value: "98%", label: "APROVAÇÃO" },
  { value: "4.9", label: "ESTRELAS" },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding" style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #333 100%)' }}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
            Mães Que Estavam <span className="underline decoration-wavy decoration-primary underline-offset-4">Apavoradas</span> Como Você:
          </h2>
          <p className="text-white/70">
            Veja como elas trocaram o medo pela confiança.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 relative"
            >
              {/* Quote icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              
              {/* Rating */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              {/* Title */}
              <h4 className="font-heading font-bold text-sm text-foreground mb-3 leading-tight">
                {testimonial.title}
              </h4>
              
              {/* Text */}
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {testimonial.text}
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-heading font-bold text-sm text-primary">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.baby}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-2xl p-6 max-w-lg mx-auto"
        >
          <div className="grid grid-cols-3 divide-x divide-border">
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-4">
                <p className="font-heading font-bold text-2xl md:text-3xl text-foreground">
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
