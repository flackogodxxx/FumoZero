import { motion } from 'framer-motion';
import { Rocket, ListChecks, Heart, Clock } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      icon: Rocket,
      title: 'Acesse o método',
      description: 'Receba acesso imediato ao método completo, app e comunidade. Tudo pronto para você começar agora mesmo. Funciona com cigarro, pod, vape e tabaco.',
      gradient: 'from-primary-500 to-primary-600',
    },
    {
      number: '2',
      icon: ListChecks,
      title: 'Siga os 3 passos simples',
      description: 'Um método direto ao ponto, sem complicação. Você aplica as técnicas no seu dia a dia.',
      gradient: 'from-accent-500 to-accent-600',
    },
    {
      number: '3',
      icon: Heart,
      title: 'Tenha suporte completo',
      description: 'Use a IA quando precisar, participe da comunidade e acompanhe seu progresso no app.',
      gradient: 'from-primary-500 to-primary-600',
    },
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.01]">
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
            Como funciona o método
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-2">
            Três passos simples para você parar de fumar de forma definitiva
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 relative">
          {/* Connection line (desktop only) */}
          <div className="hidden md:block absolute top-24 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-primary-200 to-transparent"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative"
              >
                <div className="card-modern text-center relative z-10 h-full">
                  {/* Step number badge */}
                  <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-xl md:rounded-2xl text-xl md:text-2xl font-bold mb-4 md:mb-6 shadow-xl">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-gradient-to-br ${step.gradient} mb-4 md:mb-6 shadow-lg`}>
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" aria-hidden="true" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 md:mb-4">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-base lg:text-lg text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12 md:mt-20 card-glass text-center max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
            <Clock className="w-5 h-5 md:w-6 md:h-6 text-primary-600" aria-hidden="true" />
            <p className="text-lg md:text-xl font-bold text-slate-900">
              Tempo médio para ver resultados:{' '}
              <span className="text-gradient">14 dias</span>
            </p>
          </div>
          <p className="text-base md:text-lg text-slate-600">
            Milhares de brasileiros já começaram — agora é sua vez
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
