import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Users, TrendingUp, Clock, Star, CheckCircle2 } from 'lucide-react';
import { trackSocialProofView } from '../utils/analytics';

const SocialProof = () => {
  const sectionRef = useRef(null);
  const hasTracked = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTracked.current) {
            trackSocialProofView();
            hasTracked.current = true;
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const stats = [
    { 
      icon: Users, 
      number: '10.000+', 
      label: 'Pessoas já começaram',
      color: 'text-primary-600'
    },
    { 
      icon: TrendingUp, 
      number: '87%', 
      label: 'Taxa de sucesso',
      color: 'text-accent-600'
    },
    { 
      icon: Clock, 
      number: '14 dias', 
      label: 'Resultado médio',
      color: 'text-primary-600'
    },
  ];

  const testimonials = [
    {
      name: 'Maria Silva',
      location: 'São Paulo, SP',
      text: 'Parei em 12 dias. Não acreditei que seria tão simples. O método realmente funciona!',
      rating: 5,
      verified: true,
    },
    {
      name: 'João Santos',
      location: 'Rio de Janeiro, RJ',
      text: 'Depois de 15 anos fumando, finalmente consegui. A IA me ajudou muito nos momentos difíceis.',
      rating: 5,
      verified: true,
    },
    {
      name: 'Ana Costa',
      location: 'Belo Horizonte, MG',
      text: 'O melhor investimento que fiz. Hoje me sinto livre e com muito mais saúde.',
      rating: 5,
      verified: true,
    },
  ];

  return (
    <section ref={sectionRef} className="section-padding bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.01]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(0,0,0) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container-custom relative">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center p-8 rounded-3xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 hover:border-primary-200 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-100 mb-6">
                  <Icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              O que nossos usuários dizem
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Histórias reais de pessoas que transformaram suas vidas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="card-modern group"
              >
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-slate-700 mb-6 leading-relaxed text-lg">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                  <div>
                    <div className="font-bold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-500">{testimonial.location}</div>
                  </div>
                  {testimonial.verified && (
                    <div className="flex items-center gap-1 bg-primary-50 text-primary-700 px-3 py-1.5 rounded-full text-xs font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Verificado</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Screenshots Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center"
        >
          <p className="text-slate-600 mb-8 text-lg font-medium">
            Veja resultados reais de nossos usuários
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="aspect-square bg-gradient-to-br from-primary-100/50 to-primary-200/30 rounded-2xl border border-primary-200/50 flex items-center justify-center overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl opacity-40 group-hover:opacity-60 transition-opacity">
                  📸
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-xs text-slate-500 mt-6">Screenshots de depoimentos reais</p>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
