import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "E se meu bebê não gostar das receitas?",
    answer: "Garantia de 30 dias INCONDICIONAL. Se seu bebê não se adaptar, devolvemos 100% do dinheiro. Sem perguntas chatas. O risco é TODO nosso.",
  },
  {
    question: "Não sei cozinhar bem. Vou conseguir fazer?",
    answer: "SIM! As receitas foram criadas pensando em mães exaustas e sem tempo. São passo a passo detalhado, com ingredientes simples que você já tem em casa. Se você sabe esquentar água, você consegue!",
  },
  {
    question: "Tenho medo do meu bebê engasgar. É seguro?",
    answer: "Cada receita indica a textura correta por idade, os cortes seguros e o que evitar. Você vai se sentir CONFIANTE para alimentar seu bebê sem medo.",
  },
  {
    question: "Cada médico fala uma coisa. Por que confiar nesse método?",
    answer: "O Mãe Nutri+ é 100% baseado nas diretrizes da Sociedade Brasileira de Pediatria (SBP). Zero contradições. Um único método comprovado cientificamente.",
  },
  {
    question: "Vou receber quando?",
    answer: "IMEDIATAMENTE! Após a confirmação do pagamento, você recebe o acesso por email em segundos. Pode acessar pelo celular, tablet ou computador. Para sempre.",
  },
  {
    question: "Por que é tão barato? É bom mesmo?",
    answer: "Queremos ajudar o maior número de mães possível. O preço promocional é por tempo limitado. E temos mais de 2.500 mães satisfeitas provando que funciona!",
  },
];

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="section-title md:text-section-md">
            Suas Dúvidas (Que Toda Mãe Tem):
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-secondary/30 rounded-xl px-6 border border-border"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-primary hover:no-underline py-5 text-sm md:text-base">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 text-sm">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
