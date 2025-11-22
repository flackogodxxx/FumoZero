import { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import SocialValidation from '../components/SocialValidation';
import Benefits from '../components/Benefits';
import HowItWorks from '../components/HowItWorks';
import Urgency from '../components/Urgency';
import CTA from '../components/CTA';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import { initScrollTracking } from '../utils/analytics';
import { 
  trackPageView, 
  trackScroll50, 
  trackTimeOnPage
} from '../utils/metaPixel';

// Variações de Headline e CTA (para A/B testing)
const headlines = [
  'Pare de fumar em 14 dias — sem sofrimento',
  'O método que milhares de brasileiros usaram para parar de fumar',
  'Você não precisa de força de vontade para parar de fumar',
];

const ctaTexts = [
  'Quero Começar Agora',
  'Acessar o Método',
  'Dar o Primeiro Passo',
];

function LandingPage() {
  const navigate = useNavigate();

  // Para A/B testing, você pode usar localStorage ou um sistema de rotação
  const getVariant = useCallback((variants) => {
    try {
      if (typeof window === 'undefined' || !window.localStorage) {
        return variants[0];
      }
      const stored = localStorage.getItem('ab_test_variant');
      if (stored) {
        const index = parseInt(stored, 10);
        return variants[index] || variants[0];
      }
      // Gera variante aleatória e salva
      const index = Math.floor(Math.random() * variants.length);
      localStorage.setItem('ab_test_variant', index.toString());
      return variants[index];
    } catch (error) {
      console.warn('Error accessing localStorage:', error);
      return variants[0];
    }
  }, []);

  const currentHeadline = getVariant(headlines);
  const currentCTA = getVariant(ctaTexts);

  // Função para redirecionar à página de planos
  const handleCTAClick = useCallback(() => {
    navigate('/planos');
  }, [navigate]);

  // Inicializa tracking quando a página carrega
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    // Meta Pixel - PageView
    trackPageView('Landing');
    
    // Meta Pixel - Time on Page (após 30 segundos)
    const timeOnPageTimer = setTimeout(() => {
      trackTimeOnPage('Landing');
    }, 30000);
    
    // Scroll tracking (GA4 e Meta Pixel)
    const timer = setTimeout(() => {
      initScrollTracking();
      
      // Meta Pixel - Scroll 50%
      let scroll50Tracked = false;
      const handleScroll = () => {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        if (scrollPercent >= 50 && !scroll50Tracked) {
          trackScroll50('Landing');
          scroll50Tracked = true;
          window.removeEventListener('scroll', handleScroll);
        }
      };
      window.addEventListener('scroll', handleScroll, { passive: true });
    }, 100);

    return () => {
      clearTimeout(timer);
      clearTimeout(timeOnPageTimer);
    };
  }, []);

  return (
    <>
      <Hero 
        headline={currentHeadline}
        ctaText={currentCTA}
        onCTAClick={handleCTAClick}
      />
      
      <SocialValidation />
      
      <Benefits onCTAClick={handleCTAClick} />
      
      <HowItWorks />
      
      <Urgency onCTAClick={handleCTAClick} />
      
      <CTA 
        variant="primary"
        ctaText={currentCTA}
        onCTAClick={handleCTAClick}
      />
      
      <FAQ />
      
      <CTA 
        variant="dark"
        ctaText={currentCTA}
        onCTAClick={handleCTAClick}
      />
      
      <Footer />
    </>
  );
}

export default LandingPage;

