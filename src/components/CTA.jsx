import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Shield, Zap } from 'lucide-react';
import { trackCTAClick } from '../utils/analytics';
import { trackCTAClick as trackMetaPixelCTA } from '../utils/metaPixel';

const CTA = ({ variant = 'primary', ctaText, onCTAClick, pageName = 'Landing' }) => {
  const handleCTAClick = () => {
    // Google Analytics
    trackCTAClick('cta_section');
    // Meta Pixel
    trackMetaPixelCTA('cta_section', pageName);
    if (onCTAClick) onCTAClick();
  };

  const benefits = [
    { icon: Zap, text: 'Acesso imediato' },
    { icon: Shield, text: 'Sem compromisso' },
    { icon: CheckCircle2, text: 'Suporte completo' },
  ];

  if (variant === 'dark') {
    return (
      <section className="section-padding bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-primary-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-accent-500 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight px-2">
              Pronto para começar sua transformação?
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-8 md:mb-12 leading-relaxed px-2">
              Não perca mais tempo. Comece agora e dê o primeiro passo para uma vida livre do cigarro.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCTAClick}
              className="bg-white text-slate-900 font-bold py-4 md:py-5 px-8 md:px-10 rounded-xl md:rounded-2xl shadow-2xl hover:shadow-primary-500/50 transition-all duration-300 text-base md:text-lg lg:text-xl flex items-center gap-2 md:gap-3 mx-auto group touch-manipulation focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
              aria-label={ctaText || 'Acessar o método agora'}
            >
              <span>{ctaText || 'Acessar o Método Agora'}</span>
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </motion.button>

            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-8 md:mt-10">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex items-center gap-1.5 md:gap-2 text-slate-400">
                    <Icon className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" />
                    <span className="text-xs md:text-sm font-medium">{benefit.text}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="section-padding bg-gradient-to-br from-primary-50/50 via-white to-accent-50/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(0,0,0) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 md:mb-6 leading-tight px-2">
            Pronto para começar sua{' '}
            <span className="text-gradient">transformação?</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 mb-8 md:mb-12 leading-relaxed px-2">
            Não perca mais tempo. Comece agora e dê o primeiro passo para uma vida livre do cigarro.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCTAClick}
            className="btn-primary flex items-center gap-2 md:gap-3 mx-auto group touch-manipulation focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            aria-label={ctaText || 'Acessar o método agora'}
          >
            <span>{ctaText || 'Acessar o Método Agora'}</span>
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </motion.button>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-8 md:mt-10">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="flex items-center gap-1.5 md:gap-2 text-slate-600">
                  <Icon className="w-4 h-4 md:w-5 md:h-5 text-primary-600" aria-hidden="true" />
                  <span className="text-xs md:text-sm font-medium">{benefit.text}</span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
