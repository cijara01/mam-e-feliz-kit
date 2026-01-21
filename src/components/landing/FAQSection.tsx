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
    question: "E se meu bebê não gostar?",
    answer: "Sem problemas! Oferecemos troca grátis de sabores ou reembolso 100% em até 30 dias. Zero risco pra você! 💕",
  },
  {
    question: "É realmente seguro e orgânico?",
    answer: "Sim! Todos os ingredientes são brasileiros, com laudos da ANVISA disponíveis. Sem conservantes, sem sal, sem açúcar adicionado. 100% natural e seguro para bebês de 0 a 24 meses.",
  },
  {
    question: "O frete é caro?",
    answer: "Frete GRÁTIS para todo Brasil em compras acima de R$197! A entrega é rápida (1-3 dias para capitais) em embalagem térmica que mantém tudo geladinho.",
  },
  {
    question: "O kit dura quantos dias?",
    answer: "O kit com 30 potes dura aproximadamente 30 dias (1 papinha por dia). Você pode fazer pedidos recorrentes com desconto!",
  },
  {
    question: "E para bebês alérgicos?",
    answer: "Temos opções sem os 8 principais alérgenos! Lista de ingredientes 100% transparente em cada potinho. Entre em contato pelo WhatsApp para personalizar seu kit.",
  },
  {
    question: "Como funciona a entrega?",
    answer: "Enviamos em caixa térmica com gelo seco. Chegando em casa, é só colocar no freezer. As papinhas duram até 3 meses congeladas!",
  },
];

const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="section-title md:text-section-md">
            Suas Dúvidas (Que Toda Mãe Tem!) 🤔
          </h2>
          <p className="section-subtitle">
            Respondemos tudo com carinho. Nenhuma dúvida fica sem resposta!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-2xl px-6 shadow-sm border-none"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
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
