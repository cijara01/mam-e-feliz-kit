import { useEffect } from 'react';
import Header from '@/components/landing/Header';
import HeroSection from '@/components/landing/HeroSection';
import ProblemSection from '@/components/landing/ProblemSection';
import ProductSection from '@/components/landing/ProductSection';
import BenefitsSection from '@/components/landing/BenefitsSection';
import HowItWorksSection from '@/components/landing/HowItWorksSection';
import TestimonialsSection from '@/components/landing/TestimonialsSection';
import FAQSection from '@/components/landing/FAQSection';
import IngredientsSection from '@/components/landing/IngredientsSection';
import GuaranteeSection from '@/components/landing/GuaranteeSection';
import PricingSection from '@/components/landing/PricingSection';
import Footer from '@/components/landing/Footer';
import WhatsAppButton from '@/components/landing/WhatsAppButton';

const Index = () => {
  useEffect(() => {
    // Update page title and meta
    document.title = 'Mãe Nutri+ | Papinhas Prontas para Bebês 0-24m | Frete Grátis';
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Kit completo de papinhas prontas, 100% naturais para bebês de 0 a 24 meses. Sem conservantes, pronto em 2 minutos. Frete grátis + Garantia 30 dias. Milhares de mães já aprovaram!');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <ProductSection />
        <BenefitsSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <FAQSection />
        <IngredientsSection />
        <GuaranteeSection />
        <PricingSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
