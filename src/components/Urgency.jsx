import { motion } from 'framer-motion';
import { AlertTriangle, DollarSign, Lock, Heart, Zap } from 'lucide-react';
import { trackCTAClick } from '../utils/analytics';

const Urgency = ({ onCTAClick }) => {
  const handleCTAClick = () => {
    trackCTAClick('urgency');
    if (onCTAClick) onCTAClick();
  };

  const painPoints = [
    { 
      icon: AlertTriangle, 
      text: 'Cada dia que passa, sua saúde se deteriora mais' 
    },
    { 
      icon: DollarSign, 
      text: 'O dinheiro gasto com cigarro poderia estar no seu bolso' 
    },
    { 
      icon: Lock, 
      text: 'A dependência controla sua vida e suas decisões' 
    },
    { 
      icon: Heart, 
      text: 'Você merece viver livre e com mais qualidade de vida' 
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-primary-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-accent-500 rounded-full filter blur-3xl"></div>
      </div>

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(255,255,255) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight px-2">
            Não deixe para amanhã o que você pode resolver hoje
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-2">
            Cada momento que você espera, é um momento a mais de dependência
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mb-12 md:mb-16">
          {painPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-white/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" aria-hidden="true" />
                  </div>
                  <p className="text-base md:text-lg leading-relaxed text-slate-200">{point.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center"
        >
          <div className="card-glass bg-gradient-to-r from-primary-600/20 to-accent-600/20 border-primary-500/30 max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 px-2">
              A decisão é sua. A mudança começa agora.
            </h3>
            <p className="text-base md:text-lg mb-6 md:mb-8 text-slate-200 px-2">
              Junte-se a milhares de pessoas que já transformaram suas vidas
            </p>
            <button
              onClick={handleCTAClick}
              className="bg-white text-slate-900 font-bold py-4 md:py-5 px-8 md:px-10 rounded-xl md:rounded-2xl shadow-2xl hover:shadow-primary-500/50 hover:scale-105 active:scale-95 transition-all duration-300 text-base md:text-lg flex items-center gap-2 md:gap-3 mx-auto touch-manipulation focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
              aria-label="Dar o primeiro passo agora"
            >
              <Zap className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" />
              Dar o Primeiro Passo Agora
            </button>
          </div>

          <p className="text-xs md:text-sm text-slate-400 mt-4 md:mt-6 flex items-center justify-center gap-2">
            <Zap className="w-3.5 h-3.5 md:w-4 md:h-4" aria-hidden="true" />
            Acesso imediato após a confirmação
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Urgency;
