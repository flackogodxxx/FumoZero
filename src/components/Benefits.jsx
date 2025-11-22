import { motion } from 'framer-motion';
import { Zap, Brain, Users, Smartphone, BookOpen, Target, ArrowRight } from 'lucide-react';
import { trackCTAClick } from '../utils/analytics';

const Benefits = ({ onCTAClick }) => {
  const benefits = [
    {
      icon: Zap,
      title: 'Controle a fissura em segundos',
      description: 'Técnicas simples que você aplica na hora que a vontade aparecer.',
      gradient: 'from-yellow-400 to-orange-500',
    },
    {
      icon: Brain,
      title: 'IA que entende você',
      description: 'Assistente inteligente disponível 24/7 para te ajudar nos momentos difíceis.',
      gradient: 'from-purple-400 to-pink-500',
    },
    {
      icon: Users,
      title: 'Comunidade de apoio',
      description: 'Milhares de pessoas na mesma jornada, compartilhando experiências e vitórias.',
      gradient: 'from-blue-400 to-cyan-500',
    },
    {
      icon: Smartphone,
      title: 'App prático e simples',
      description: 'Tudo em um só lugar: método, acompanhamento e ferramentas de controle.',
      gradient: 'from-green-400 to-emerald-500',
    },
    {
      icon: BookOpen,
      title: 'Método completo',
      description: 'Guia definitivo com estratégias comprovadas para parar de fumar de vez. Funciona com cigarro, pod, vape e tabaco.',
      gradient: 'from-indigo-400 to-blue-500',
    },
    {
      icon: Target,
      title: 'Resultado rápido',
      description: 'Você não precisa sofrer para largar o cigarro. Método testado e aprovado.',
      gradient: 'from-red-400 to-pink-500',
    },
  ];

  const handleCTAClick = () => {
    trackCTAClick('benefits');
    if (onCTAClick) onCTAClick();
  };

  return (
    <section className="section-padding bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.015]">
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
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 md:mb-6 leading-tight px-2">
            Você não precisa sofrer para{' '}
            <span className="text-gradient">largar o cigarro</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-2">
            Um método completo que combina tecnologia, conhecimento e comunidade para te ajudar a parar de fumar de forma definitiva.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="card-modern group cursor-pointer"
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-br ${benefit.gradient} mb-4 md:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" aria-hidden="true" />
                </div>

                {/* Content */}
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3 group-hover:text-primary-600 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Arrow indicator */}
                <div className="mt-4 md:mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-primary-600" aria-hidden="true" />
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center"
        >
          <button
            onClick={handleCTAClick}
            className="btn-primary focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            aria-label="Quero começar agora"
          >
            Quero Começar Agora
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
