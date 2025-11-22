// Meta Pixel (Facebook Pixel) Event Tracking
// Utilitário para facilitar o uso do Meta Pixel em todo o projeto

/**
 * Verifica se o Meta Pixel está carregado e disponível
 */
const isMetaPixelLoaded = () => {
  return typeof window !== 'undefined' && window.fbq;
};

/**
 * Função principal para rastrear eventos no Meta Pixel
 * @param {string} eventName - Nome do evento (ex: 'PageView', 'Lead', 'Purchase')
 * @param {object} eventParams - Parâmetros adicionais do evento (opcional)
 */
export const trackMetaPixelEvent = (eventName, eventParams = {}) => {
  if (isMetaPixelLoaded()) {
    try {
      window.fbq('track', eventName, eventParams);
      
      // Log para desenvolvimento
      if (process.env.NODE_ENV === 'development') {
        console.log('📘 Meta Pixel Event:', eventName, eventParams);
      }
    } catch (error) {
      console.warn('Error tracking Meta Pixel event:', error);
    }
  } else {
    // Se o pixel ainda não carregou, tenta novamente após um delay
    if (typeof window !== 'undefined') {
      setTimeout(() => {
        if (isMetaPixelLoaded()) {
          window.fbq('track', eventName, eventParams);
        }
      }, 1000);
    }
  }
};

/**
 * Rastreia visualização de página específica
 * @param {string} pageName - Nome da página (ex: 'Quiz', 'Landing', 'Pricing')
 */
export const trackPageView = (pageName) => {
  trackMetaPixelEvent('PageView', {
    content_name: pageName,
    content_category: 'Page View'
  });
};

/**
 * Rastreia quando o quiz é iniciado
 */
export const trackQuizStart = () => {
  trackMetaPixelEvent('Lead', {
    content_name: 'Quiz Started',
    content_category: 'Quiz',
    value: 0,
    currency: 'BRL'
  });
};

/**
 * Rastreia quando uma pergunta do quiz é respondida
 * @param {number} questionNumber - Número da pergunta (1-5)
 */
export const trackQuizQuestionAnswered = (questionNumber) => {
  trackMetaPixelEvent('ViewContent', {
    content_name: `Quiz Question ${questionNumber}`,
    content_category: 'Quiz',
    content_ids: [`question_${questionNumber}`]
  });
};

/**
 * Rastreia quando o quiz é completado
 * @param {object} quizData - Dados do quiz (score, result type, etc)
 */
export const trackQuizComplete = (quizData = {}) => {
  trackMetaPixelEvent('CompleteRegistration', {
    content_name: 'Quiz Completed',
    content_category: 'Quiz',
    value: 0,
    currency: 'BRL',
    ...quizData
  });
};

/**
 * Rastreia cliques em CTAs
 * @param {string} location - Localização do CTA (ex: 'hero', 'benefits', 'urgency')
 * @param {string} pageName - Nome da página onde o CTA foi clicado
 */
export const trackCTAClick = (location, pageName = 'Landing') => {
  trackMetaPixelEvent('Lead', {
    content_name: `CTA Click - ${location}`,
    content_category: 'CTA',
    content_location: location,
    page_name: pageName,
    value: 0,
    currency: 'BRL'
  });
};

/**
 * Rastreia quando o usuário visualiza a seção de planos/preços
 */
export const trackPricingView = () => {
  trackMetaPixelEvent('ViewContent', {
    content_name: 'Pricing Page',
    content_category: 'Pricing',
    content_type: 'product_group'
  });
};

/**
 * Rastreia quando um plano específico é selecionado/clicado
 * @param {string} planName - Nome do plano
 * @param {number} planPrice - Preço do plano
 * @param {string} planId - ID do plano
 */
export const trackPlanSelection = (planName, planPrice, planId) => {
  trackMetaPixelEvent('InitiateCheckout', {
    content_name: planName,
    content_category: 'Pricing',
    content_ids: [planId],
    value: planPrice,
    currency: 'BRL'
  });
};

/**
 * Rastreia quando o usuário inicia o checkout (redirecionamento para checkout)
 * @param {string} planName - Nome do plano
 * @param {number} planPrice - Preço do plano
 * @param {string} planId - ID do plano
 */
export const trackCheckoutStart = (planName, planPrice, planId) => {
  trackMetaPixelEvent('InitiateCheckout', {
    content_name: planName,
    content_category: 'Checkout',
    content_ids: [planId],
    value: planPrice,
    currency: 'BRL'
  });
};

/**
 * Rastreia scroll de 50% da página
 * @param {string} pageName - Nome da página
 */
export const trackScroll50 = (pageName) => {
  trackMetaPixelEvent('ViewContent', {
    content_name: `${pageName} - 50% Scroll`,
    content_category: 'Engagement',
    page_name: pageName
  });
};

/**
 * Rastreia visualização de prova social
 */
export const trackSocialProofView = () => {
  trackMetaPixelEvent('ViewContent', {
    content_name: 'Social Proof Section',
    content_category: 'Engagement'
  });
};

/**
 * Rastreia visualização de FAQ
 */
export const trackFAQView = () => {
  trackMetaPixelEvent('ViewContent', {
    content_name: 'FAQ Section',
    content_category: 'Engagement'
  });
};

/**
 * Rastreia tempo na página (após 30 segundos)
 * @param {string} pageName - Nome da página
 */
export const trackTimeOnPage = (pageName) => {
  trackMetaPixelEvent('ViewContent', {
    content_name: `${pageName} - 30s Time`,
    content_category: 'Engagement',
    page_name: pageName
  });
};

