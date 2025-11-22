import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2, Zap, Shield } from 'lucide-react';
import { trackCTAClick } from '../utils/analytics';
import { trackCTAClick as trackMetaPixelCTA } from '../utils/metaPixel';
import NicoticLogo from '../assets/nicotic-logo.svg';

const Hero = ({ headline, ctaText, onCTAClick }) => {
  const handleCTAClick = () => {
    // Google Analytics
    trackCTAClick('hero');
    // Meta Pixel
    trackMetaPixelCTA('hero', 'Landing');
    if (onCTAClick) onCTAClick();
  };

  const trustPoints = [
    { icon: Shield, text: 'Sem sofrimento' },
    { icon: Zap, text: 'Resultado rápido' },
    { icon: CheckCircle2, text: 'Método simples' },
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-primary-50/30 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(0,0,0) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 right-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-primary-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-accent-200/20 rounded-full blur-3xl"></div>

      <div className="relative w-full section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6 md:space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-primary-100/80 backdrop-blur-sm border border-primary-200/50 rounded-full text-xs md:text-sm font-semibold text-primary-700"
              >
                <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4" aria-hidden="true" />
                <span>Método Definitivo</span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight"
              >
                {headline}
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-lg sm:text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl"
              >
                Pare de fumar mais rápido do que imagina — com um método simples que cabe no seu dia.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4"
              >
                <button
                  onClick={handleCTAClick}
                  className="btn-primary group relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                  aria-label={ctaText}
                >
                  <span className="relative z-10">{ctaText}</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary-700 to-primary-600"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                    aria-hidden="true"
                  />
                </button>
                <button 
                  className="btn-secondary focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                  aria-label="Ver como funciona o método"
                >
                  Ver Como Funciona
                </button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-wrap items-center gap-4 md:gap-6 pt-2 md:pt-4"
              >
                {trustPoints.map((point, index) => {
                  const Icon = point.icon;
                  return (
                    <div key={index} className="flex items-center gap-2 text-slate-700">
                      <Icon className="w-4 h-4 md:w-5 md:h-5 text-primary-600" aria-hidden="true" />
                      <span className="text-xs md:text-sm font-medium">{point.text}</span>
                    </div>
                  );
                })}
              </motion.div>
            </motion.div>

            {/* Right Column - Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative mt-8 lg:mt-0"
            >
              <div className="relative">
                {/* Main Card */}
                <div className="card-glass relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-accent-500/10" aria-hidden="true"></div>
                  <div className="relative bg-white/50 backdrop-blur-sm rounded-xl md:rounded-2xl p-8 md:p-12 text-center border border-white/50">
                    <div className="w-20 h-20 md:w-32 md:h-32 mx-auto mb-4 md:mb-6 flex items-center justify-center">
                      <img 
                        src={NicoticLogo} 
                        alt="Logotipo NicoTic"
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">NicoTic</h3>
                    <p className="text-slate-600 text-xs md:text-sm font-semibold uppercase tracking-[0.2em]">Liberdade do vício</p>
                    <p className="text-[10px] md:text-xs text-slate-500 mt-1.5 font-medium">Funciona com cigarro, pod, vape e tabaco</p>
                  </div>
                </div>

                {/* Floating Badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-gradient-to-r from-accent-500 to-accent-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-xl md:rounded-2xl shadow-2xl border-2 border-white"
                >
                  <div className="flex items-center gap-1.5 md:gap-2">
                    <span className="text-xs md:text-sm font-bold">+10.000</span>
                    <span className="text-[10px] md:text-xs opacity-90">usuários</span>
                  </div>
                </motion.div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-6 md:-bottom-8 -left-6 md:-left-8 w-24 md:w-32 h-24 md:h-32 bg-primary-200/30 rounded-full blur-2xl" aria-hidden="true"></div>
                <div className="absolute -top-6 md:-top-8 -right-6 md:-right-8 w-20 md:w-24 h-20 md:h-24 bg-accent-200/30 rounded-full blur-2xl" aria-hidden="true"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
