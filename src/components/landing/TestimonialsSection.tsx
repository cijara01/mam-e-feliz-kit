import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Users, ThumbsUp, ShoppingBag } from 'lucide-react';

const testimonials = [
  {
    name: "Ana Carolina",
    location: "São Paulo, SP",
    text: "Meu bebê AMOU! Acabou com a birra na hora de comer. O sabor de abóbora com frango é o favorito dele. Super prático pro dia a dia corrido! 💕",
    rating: 5,
    avatar: "👩‍🦰",
  },
  {
    name: "Juliana Santos",
    location: "Rio de Janeiro, RJ",
    text: "Prático demais, principalmente no pós-cesárea quando eu mal conseguia ficar de pé. Salva vidas! Recomendo pra toda mãe!",
    rating: 5,
    avatar: "👩",
  },
  {
    name: "Mariana Costa",
    location: "Belo Horizonte, MG",
    text: "Eu tinha muito medo da introdução alimentar, mas o Mãe Nutri+ me deu segurança. Texturas perfeitas pro meu bebê de 6 meses!",
    rating: 5,
    avatar: "👩‍🦱",
  },
  {
    name: "Fernanda Lima",
    location: "Curitiba, PR",
    text: "Chega geladinho, embalagem linda e o mais importante: meu filho come tudo! Não sobra nada no potinho. Obrigada Mãe Nutri! 🥰",
    rating: 5,
    avatar: "👱‍♀️",
  },
];

const stats = [
  { icon: ShoppingBag, value: "2.500+", label: "Kits Vendidos" },
  { icon: ThumbsUp, value: "98%", label: "Satisfação" },
  { icon: Users, value: "2.347", label: "Mães Felizes" },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title md:text-section-md">
            Mães Que Estavam <span className="text-gradient-pink">Apavoradas</span> Como Você!
          </h2>
          <p className="section-subtitle">
            Veja o que elas dizem depois de experimentar o Mãe Nutri+
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="testimonial-card"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-heading font-bold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-foreground italic">
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-3 gap-4 max-w-xl mx-auto"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-4 rounded-2xl bg-white shadow-sm">
              <stat.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
              <p className="font-heading font-bold text-2xl text-foreground">
                {stat.value}
              </p>
              <p className="text-xs text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
