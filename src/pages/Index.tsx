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
import AuthorSection from '@/components/landing/AuthorSection';
import Footer from '@/components/landing/Footer';
import WhatsAppButton from '@/components/landing/WhatsAppButton';
import SocialProofNotification from '@/components/landing/SocialProofNotification';

const Index = () => {
  useEffect(() => {
    // Update page title and meta
    document.title = 'Mãe Nutri+ | 500 Receitas para Introdução Alimentar | Guia Completo';
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', '500 receitas testadas para introdução alimentar do seu bebê. Baseado nas diretrizes da SBP. Acesso imediato + Garantia 30 dias. Mais de 2.500 mães já aprovaram!');
    }
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <ProductSection />
        <section id="benefits">
          <BenefitsSection />
        </section>
        <HowItWorksSection />
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        <section id="faq">
          <FAQSection />
        </section>
        <IngredientsSection />
        <GuaranteeSection />
        <PricingSection />
        <AuthorSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <SocialProofNotification />
    </div>
  );
};

export default Index;
