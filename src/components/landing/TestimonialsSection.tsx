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
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face&auto=format&fm=webp&q=75",
  },
  {
    title: '"ACABOU A FRUSTRAÇÃO DE VER ELE RECUSAR TUDO"',
    text: "Meu bebê fazia cara de nojo pra TUDO. Eu passava 2h cozinhando e ele cuspia. Com as receitas do Mãe Nutri+ (que são aprovadas por bebês reais), ele começou a aceitar. Hoje ele RASPA o prato!",
    name: "Carla Souza",
    baby: "Mãe da Bia (10 meses)",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&crop=face&auto=format&fm=webp&q=75",
  },
  {
    title: '"PRÁTICO DEMAIS. EU NÃO TINHA CABEÇA PARA COZINHAR"',
    text: "Pós-cesárea eu tava exausta. O Mãe Nutri+ tem receitas de 5-10min com coisas que eu já tinha em casa. Salvou minha rotina e a saúde da minha filha. Investimento que valeu CADA centavo.",
    name: "Fernanda Lima",
    baby: "Mãe de gêmeas",
    avatar: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=80&h=80&fit=crop&crop=face&auto=format&fm=webp&q=75",
  },
];

const stats = [
  { value: "2.500+", label: "MÃES CONFIANTES" },
  { value: "98%", label: "APROVAÇÃO" },
  { value: "4.9", label: "ESTRELAS" },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-10 md:py-16 px-4 md:px-8" style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #333 100%)' }}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="font-heading text-xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
            Mães Que Estavam <span className="underline decoration-wavy decoration-primary underline-offset-4">Apavoradas</span> Como Você:
          </h2>
          <p className="text-white/80 text-sm md:text-base">
            Veja como elas trocaram o medo pela confiança.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 relative"
            >
              {/* Quote icon */}
              <Quote className="absolute top-3 right-3 md:top-4 md:right-4 w-6 h-6 md:w-8 md:h-8 text-primary/20" />
              
              {/* Rating */}
              <div className="flex gap-0.5 mb-2 md:mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              {/* Title - Changed from h4 to h3 for proper hierarchy */}
              <h3 className="font-heading font-bold text-xs md:text-sm text-foreground mb-2 md:mb-3 leading-tight">
                {testimonial.title}
              </h3>
              
              {/* Text */}
              <p className="text-muted-foreground text-xs md:text-sm mb-3 md:mb-4 leading-relaxed">
                {testimonial.text}
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-2.5 md:gap-3 pt-3 md:pt-4 border-t border-border">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden border-2 border-primary/20">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                    width="40"
                    height="40"
                    loading="lazy"
                  />
                </div>
                <div>
                  <p className="font-heading font-bold text-xs md:text-sm text-primary">
                    {testimonial.name}
                  </p>
                  <p className="text-[10px] md:text-xs text-muted-foreground">
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
          className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 max-w-md mx-auto"
        >
          <div className="grid grid-cols-3 divide-x divide-border">
            {stats.map((stat, index) => (
              <div key={index} className="text-center px-2 md:px-4">
                <p className="font-heading font-bold text-xl md:text-3xl text-foreground">
                  {stat.value}
                </p>
                <p className="text-[9px] md:text-xs text-muted-foreground font-medium">
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
