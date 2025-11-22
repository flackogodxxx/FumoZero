import { useEffect } from 'react';
import Pricing from '../components/Pricing';
import { trackPageView, trackPricingView } from '../utils/metaPixel';

function PricingPage() {
  // Scroll para o topo quando a página carrega e tracking
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    // Meta Pixel - PageView
    trackPageView('Pricing');
    
    // Meta Pixel - Pricing View
    trackPricingView();
  }, []);

  return (
    <>
      <Pricing />
    </>
  );
}

export default PricingPage;

