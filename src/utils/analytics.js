// Google Analytics 4 Event Tracking

export const trackEvent = (eventName, eventParams = {}) => {
  // Verifica se o gtag está disponível
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
  
  // Log para desenvolvimento
  if (process.env.NODE_ENV === 'development') {
    console.log('📊 GA4 Event:', eventName, eventParams);
  }
};

// Eventos específicos da landing page
export const trackCTAClick = (location) => {
  trackEvent('cta_click', {
    location: location, // 'hero', 'benefits', 'urgency', etc.
    event_category: 'engagement',
    event_label: 'CTA Button Click'
  });
};

export const trackScroll50 = () => {
  trackEvent('scroll_50_percent', {
    event_category: 'engagement',
    event_label: 'User scrolled 50% of page'
  });
};

export const trackSocialProofView = () => {
  trackEvent('social_proof_view', {
    event_category: 'engagement',
    event_label: 'User viewed social proof section'
  });
};

// Função para inicializar scroll tracking
export const initScrollTracking = () => {
  if (typeof window === 'undefined') return;
  
  let scroll50Tracked = false;
  
  const handleScroll = () => {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    
    if (scrollPercent >= 50 && !scroll50Tracked) {
      trackScroll50();
      scroll50Tracked = true;
      // Remove listener após tracking para performance
      window.removeEventListener('scroll', handleScroll);
    }
  };
  
  window.addEventListener('scroll', handleScroll, { passive: true });
};

