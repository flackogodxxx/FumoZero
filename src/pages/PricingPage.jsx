import { useEffect } from 'react';
import Pricing from '../components/Pricing';

function PricingPage() {
  // Scroll para o topo quando a página carrega
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <>
      <Pricing />
    </>
  );
}

export default PricingPage;

