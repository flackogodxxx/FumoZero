import { motion } from 'framer-motion';
import { Star, CheckCircle2, TrendingUp, Clock, Award, Heart, Zap, Users } from 'lucide-react';

const SocialValidation = () => {
  // Depoimentos Curtos (Impacto Rápido)
  const quickTestimonials = [
    {
      name: 'Carlos Mendes',
      location: 'São Paulo, SP',
      text: 'Parei em 9 dias. Não acreditei que seria possível sem sofrer tanto.',
      days: 9,
      verified: true,
    },
    {
      name: 'Juliana Alves',
      location: 'Rio de Janeiro, RJ',
      text: '15 anos fumando e consegui parar em 12 dias. A IA salvou nos momentos difíceis.',
      days: 12,
      verified: true,
    },
    {
      name: 'Roberto Silva',
      location: 'Belo Horizonte, MG',
      text: 'Melhor decisão da minha vida. Parei há 3 meses e não sinto mais vontade.',
      months: 3,
      verified: true,
    },
  ];

  // Mini Histórias (Narrativa)
  const stories = [
    {
      name: 'Ana Paula Costa',
      location: 'Curitiba, PR',
      age: 42,
      yearsSmoking: 20,
      story: 'Fumava desde os 22 anos. Tentei parar várias vezes e sempre voltava. Com o NicoTic, entendi que não era falta de força de vontade - era falta de método. Parei em 14 dias e hoje me sinto livre.',
      result: '14 dias',
      highlight: '20 anos de dependência superada',
    },
    {
      name: 'Marcos Oliveira',
      location: 'Porto Alegre, RS',
      age: 38,
      yearsSmoking: 18,
      story: 'Trabalho estressante, sempre usava o cigarro como válvula de escape. O método me ensinou técnicas que uso até hoje quando sinto ansiedade. Parei há 2 meses e minha qualidade de vida melhorou 100%.',
      result: '2 meses',
      highlight: 'Sem mais ansiedade',
    },
  ];

  // Bullets de Resultados (Especificidade)
  const results = [
    {
      icon: TrendingUp,
      number: '87%',
      label: 'Taxa de sucesso comprovada',
      color: 'from-primary-500 to-primary-600',
    },
    {
      icon: Clock,
      number: '14 dias',
      label: 'Tempo médio para resultados',
      color: 'from-accent-500 to-accent-600',
    },
    {
      icon: Users,
      number: '10.000+',
      label: 'Pessoas já transformaram suas vidas',
      color: 'from-primary-500 to-primary-600',
    },
    {
      icon: Award,
      number: '94%',
      label: 'Recomendariam para um amigo',
      color: 'from-accent-500 to-accent-600',
    },
  ];

  // Vitórias Rápidas (Benefícios Imediatos)
  const quickWins = [
    { text: 'Respiração melhorou em 7 dias', icon: Heart },
    { text: 'Mais energia já na primeira semana', icon: Zap },
    { text: 'Economia de R$ 300/mês em média', icon: TrendingUp },
    { text: 'Sono mais profundo e reparador', icon: Clock },
  ];

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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-primary-100/80 backdrop-blur-sm border border-primary-200/50 rounded-full text-xs md:text-sm font-semibold text-primary-700 mb-4 md:mb-6">
            <Users className="w-3.5 h-3.5 md:w-4 md:h-4" aria-hidden="true" />
            <span>Mais de 10.000 pessoas já pararam de fumar</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 md:mb-6 leading-tight px-2">
            Histórias reais de{' '}
            <span className="text-gradient">transformação</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-2">
            Pessoas como você que conseguiram parar de fumar de forma definitiva
          </p>
        </motion.div>

        {/* Resultados em Números */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-20"
        >
          {results.map((result, index) => {
            const Icon = result.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center p-4 md:p-6 rounded-xl md:rounded-2xl bg-gradient-to-br from-white to-slate-50 border border-slate-100 hover:border-primary-200 transition-all duration-300 hover:shadow-lg"
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-lg md:rounded-xl bg-gradient-to-br ${result.color} mb-3 md:mb-4 shadow-lg`}>
                  <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" aria-hidden="true" />
                </div>
                <div className={`text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r ${result.color} bg-clip-text text-transparent mb-1 md:mb-2`}>
                  {result.number}
                </div>
                <div className="text-xs sm:text-sm text-slate-600 font-medium leading-tight">{result.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Depoimentos Curtos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16 md:mb-20"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-6 md:mb-8 text-center px-2">
            Resultados rápidos e reais
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {quickTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="card-modern group"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-3 md:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-slate-700 mb-4 md:mb-6 leading-relaxed text-base md:text-lg font-medium">
                  "{testimonial.text}"
                </p>

                {/* Author & Result */}
                <div className="flex items-center justify-between pt-4 md:pt-6 border-t border-slate-100">
                  <div>
                    <div className="font-bold text-sm md:text-base text-slate-900">{testimonial.name}</div>
                    <div className="text-xs md:text-sm text-slate-500">{testimonial.location}</div>
                  </div>
                  {testimonial.verified && (
                    <div className="flex items-center gap-1 bg-primary-50 text-primary-700 px-2 md:px-3 py-1 md:py-1.5 rounded-full text-[10px] md:text-xs font-semibold">
                      <CheckCircle2 className="w-3 h-3 md:w-3.5 md:h-3.5" aria-hidden="true" />
                      <span>Verificado</span>
                    </div>
                  )}
                </div>

                {/* Result Badge */}
                <div className="mt-3 md:mt-4 inline-flex items-center gap-1.5 md:gap-2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-bold">
                  <Clock className="w-3.5 h-3.5 md:w-4 md:h-4" aria-hidden="true" />
                  <span>
                    {testimonial.days ? `${testimonial.days} dias` : `${testimonial.months} meses sem fumar`}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mini Histórias */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16 md:mb-20"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-6 md:mb-8 text-center px-2">
            Transformações profundas
          </h3>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {stories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="card-glass"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4 md:mb-6">
                  <div>
                    <div className="font-bold text-lg md:text-xl text-slate-900 mb-1">{story.name}</div>
                    <div className="text-xs md:text-sm text-slate-500">{story.location} • {story.age} anos</div>
                  </div>
                  <div className="flex items-center gap-1 bg-primary-50 text-primary-700 px-2 md:px-3 py-1 md:py-1.5 rounded-full text-[10px] md:text-xs font-semibold">
                    <CheckCircle2 className="w-3 h-3 md:w-3.5 md:h-3.5" aria-hidden="true" />
                    <span>Verificado</span>
                  </div>
                </div>

                {/* Context */}
                <div className="mb-3 md:mb-4 p-2.5 md:p-3 bg-slate-100 rounded-lg md:rounded-xl">
                  <p className="text-xs md:text-sm text-slate-600">
                    <span className="font-semibold">{story.yearsSmoking} anos</span> fumando
                  </p>
                </div>

                {/* Story */}
                <p className="text-slate-700 leading-relaxed text-base md:text-lg mb-4 md:mb-6">
                  {story.story}
                </p>

                {/* Result */}
                <div className="flex items-center justify-between pt-4 md:pt-6 border-t border-slate-200">
                  <div>
                    <div className="text-[10px] md:text-xs text-slate-500 mb-1">Resultado</div>
                    <div className="text-xl md:text-2xl font-bold text-primary-600">{story.result}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] md:text-xs text-slate-500 mb-1">Destaque</div>
                    <div className="text-xs md:text-sm font-semibold text-slate-900">{story.highlight}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Vitórias Rápidas */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="card-glass max-w-4xl mx-auto"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-6 md:mb-8 text-center px-2">
            Benefícios que você sente rapidamente
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            {quickWins.map((win, index) => {
              const Icon = win.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg md:rounded-xl bg-white/50 hover:bg-white/80 transition-colors"
                >
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" aria-hidden="true" />
                  </div>
                  <span className="text-base md:text-lg font-semibold text-slate-900">{win.text}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA Final da Seção */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 md:mt-16 text-center"
        >
          <p className="text-lg md:text-xl text-slate-700 mb-4 md:mb-6 font-medium px-2">
            Junte-se a milhares de pessoas que já transformaram suas vidas
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 text-xs md:text-sm text-slate-600">
            <div className="flex items-center gap-1.5 md:gap-2">
              <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary-600" aria-hidden="true" />
              <span>87% de taxa de sucesso</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2">
              <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary-600" aria-hidden="true" />
              <span>Resultados em 14 dias</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2">
              <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary-600" aria-hidden="true" />
              <span>Método comprovado</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialValidation;
