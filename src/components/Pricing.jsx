import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  Sparkles, 
  Zap, 
  Brain, 
  Smartphone, 
  Users, 
  Shield, 
  TrendingUp,
  ArrowRight,
  Star,
  Lock,
  Clock
} from 'lucide-react';
import { trackCTAClick } from '../utils/analytics';

const Pricing = ({ onCTAClick }) => {
  // Função para CTAs dos planos (redireciona para checkout externo)
  const handlePlanCTAClick = (planName, checkoutUrl) => {
    trackCTAClick(`pricing_${planName.toLowerCase().replace(/\s+/g, '_')}`);
    // Redireciona para checkout oficial do plano
    window.location.href = checkoutUrl;
    // Ou use: window.open(checkoutUrl, '_blank');
  };

  const plans = [
    {
      id: 1,
      name: 'Liberdade Imediata',
      price: '19,90',
      description: 'O essencial para começar sua transformação hoje',
      color: 'from-green-500 to-emerald-600',
      badge: null,
      features: [
        'Protocolo NicoTic (7 a 30 dias)',
        'Técnicas Anti-Fissura comprovadas',
        'Controle de gatilhos emocionais',
        'Estratégias Anti-Recaída básicas',
        'Passo a passo simples e direto',
      ],
      guarantee: 'Reembolso se não funcionar em até 30 dias',
      cta: 'Quero começar agora',
      highlight: 'Ideal para quem quer começar',
      painPoint: 'Você já tentou sozinho e não funcionou',
      benefit: 'Método testado que realmente funciona',
      checkoutUrl: 'https://pay.cakto.com.br/34ggn9h_662000',
    },
    {
      id: 2,
      name: 'Controle Total',
      price: '39,90',
      description: 'Liberdade Imediata + suporte inteligente 24h',
      color: 'from-yellow-500 to-orange-600',
      badge: null,
      features: [
        'Tudo do plano Liberdade Imediata',
        'IA Anti-Recaída funcionando 24h',
        'Técnicas personalizadas por perfil',
        'Apoio imediato quando a vontade aparece',
        'Reforços diários automáticos',
      ],
      guarantee: 'Resultados em até 30 dias ou dinheiro de volta',
      cta: 'Quero Controle Total',
      highlight: 'Mais suporte, mais resultados',
      painPoint: 'Você precisa de ajuda nos momentos difíceis',
      benefit: 'Suporte inteligente sempre que precisar',
      checkoutUrl: 'https://pay.cakto.com.br/9b6irfq_662017',
    },
    {
      id: 3,
      name: 'Jornada Completa',
      price: '59,90',
      description: 'Controle Total + app completo com IA integrada',
      color: 'from-red-500 to-pink-600',
      badge: null,
      features: [
        'Tudo do plano Controle Total',
        'App NicoTic (pré-venda incluída)',
        'Diário da Fissura personalizado',
        'Gráficos de progresso em tempo real',
        'Checklists de acompanhamento',
        'IA integrada dentro do app',
        'Planejamento automático diário',
      ],
      guarantee: '30 dias para testar sem risco',
      cta: 'Quero a Jornada Completa',
      highlight: 'Tecnologia + método = resultado',
      painPoint: 'Você quer acompanhar seu progresso',
      benefit: 'Tudo organizado em um só lugar',
      checkoutUrl: 'https://pay.cakto.com.br/va4s8u8_662028',
    },
    {
      id: 4,
      name: 'Transformação Definitiva',
      price: '79,90',
      description: 'Jornada Completa + comunidade exclusiva',
      color: 'from-purple-500 to-indigo-600',
      badge: 'Mais Recomendado',
      features: [
        'Tudo da Jornada Completa',
        'Comunidade NicoTic exclusiva',
        'Relatos reais de ex-fumantes',
        'Motivação diária personalizada',
        'Acompanhamento 24h',
        'Triplica as chances de parar para sempre',
      ],
      guarantee: 'Seguindo o processo por 30 dias, se não houver resultado, devolução total',
      cta: 'Quero Parar de Fumar Para Sempre',
      highlight: 'A solução mais completa',
      painPoint: 'Você quer garantir que vai conseguir desta vez',
      benefit: 'Triplica suas chances de sucesso',
      popular: true,
      checkoutUrl: 'https://pay.cakto.com.br/5ueghgw_662042',
    },
  ];

  const getIconForFeature = (feature) => {
    if (feature.includes('Protocolo') || feature.includes('Técnicas')) return Zap;
    if (feature.includes('IA') || feature.includes('inteligente') || feature.includes('personalizadas')) return Brain;
    if (feature.includes('App') || feature.includes('app') || feature.includes('Gráficos') || feature.includes('Checklists') || feature.includes('Planejamento')) return Smartphone;
    if (feature.includes('Comunidade') || feature.includes('ex-fumantes') || feature.includes('Motivação')) return Users;
    if (feature.includes('progresso') || feature.includes('Diário')) return TrendingUp;
    if (feature.includes('Acompanhamento') || feature.includes('24h')) return Clock;
    return CheckCircle2;
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-primary-100/80 backdrop-blur-sm border border-primary-200/50 rounded-full text-xs md:text-sm font-semibold text-primary-700 mb-4 md:mb-6">
            <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4" aria-hidden="true" />
            <span>Escolha o plano ideal para você</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 md:mb-6 leading-tight px-2">
            Pare de fumar de forma{' '}
            <span className="text-gradient">definitiva</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-2">
            Escolha o plano que melhor se adapta à sua jornada. Todos com garantia de resultados ou seu dinheiro de volta.
          </p>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {plans.map((plan, index) => {
            const isPopular = plan.popular;
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`relative ${isPopular ? 'lg:-mt-4 lg:mb-4' : ''}`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: 'spring' }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 z-20"
                  >
                    <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-1.5 rounded-full text-xs md:text-sm font-bold shadow-xl flex items-center gap-1.5 whitespace-nowrap">
                      <Star className="w-3.5 h-3.5 md:w-4 md:h-4 fill-white" aria-hidden="true" />
                      <span>{plan.badge}</span>
                    </div>
                  </motion.div>
                )}

                <div className={`card-modern h-full flex flex-col transition-all duration-300 ${isPopular ? 'ring-2 ring-purple-500/50 shadow-2xl hover:ring-purple-500/70' : 'hover:shadow-xl'}`}>
                  {/* Header */}
                  <div className="mb-6">
                    <div className={`inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br ${plan.color} mb-4 shadow-lg`}>
                      {plan.id === 1 && <Zap className="w-6 h-6 md:w-7 md:h-7 text-white" aria-hidden="true" />}
                      {plan.id === 2 && <Brain className="w-6 h-6 md:w-7 md:h-7 text-white" aria-hidden="true" />}
                      {plan.id === 3 && <Smartphone className="w-6 h-6 md:w-7 md:h-7 text-white" aria-hidden="true" />}
                      {plan.id === 4 && <Users className="w-6 h-6 md:w-7 md:h-7 text-white" aria-hidden="true" />}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-sm md:text-base text-slate-600 mb-4 leading-relaxed">
                      {plan.description}
                    </p>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-3xl md:text-4xl font-bold text-slate-900">
                        R$ {plan.price}
                      </span>
                    </div>
                    {plan.highlight && (
                      <p className="text-xs md:text-sm text-slate-500 mt-2 italic">
                        {plan.highlight}
                      </p>
                    )}
                  </div>

                  {/* Pain Point (Microcopy) */}
                  {plan.painPoint && (
                    <div className="mb-4 p-2.5 md:p-3 bg-slate-100 rounded-lg border-l-2 border-primary-500">
                      <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
                        <span className="font-semibold">Para você que:</span> {plan.painPoint}
                      </p>
                    </div>
                  )}

                  {/* Features */}
                  <div className="flex-grow mb-6">
                    <ul className="space-y-2.5 md:space-y-3">
                      {plan.features.map((feature, featureIndex) => {
                        const Icon = getIconForFeature(feature);
                        return (
                          <li key={featureIndex} className="flex items-start gap-2.5 md:gap-3">
                            <Icon className="w-4 h-4 md:w-5 md:h-5 text-primary-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                            <span className="text-sm md:text-base text-slate-700 leading-relaxed">
                              {feature}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  {/* Benefit (Microcopy) */}
                  {plan.benefit && (
                    <div className="mb-4 p-2.5 md:p-3 bg-primary-50 rounded-lg border border-primary-200">
                      <p className="text-xs md:text-sm text-primary-800 leading-relaxed font-medium">
                        ✓ {plan.benefit}
                      </p>
                    </div>
                  )}

                  {/* Guarantee */}
                  <div className="mb-6 p-3 md:p-4 bg-slate-50 rounded-xl border border-slate-200">
                    <div className="flex items-start gap-2">
                      <Shield className="w-4 h-4 md:w-5 md:h-5 text-primary-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        <span className="font-semibold text-slate-900">Garantia:</span> {plan.guarantee}
                      </p>
                    </div>
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => handlePlanCTAClick(plan.name, plan.checkoutUrl)}
                    className={`w-full py-3 md:py-4 px-6 rounded-xl md:rounded-2xl font-bold text-sm md:text-base transition-all duration-300 touch-manipulation focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center justify-center gap-2 ${
                      isPopular
                        ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 focus:ring-purple-500'
                        : 'bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 focus:ring-slate-500'
                    }`}
                    aria-label={plan.cta}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="card-glass max-w-4xl mx-auto text-center mb-12 md:mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Shield className="w-5 h-5 md:w-6 md:h-6 text-primary-600" aria-hidden="true" />
            <h3 className="text-xl md:text-2xl font-bold text-slate-900">
              Garantia de Resultados
            </h3>
          </div>
          <p className="text-base md:text-lg text-slate-600 mb-6 leading-relaxed px-2">
            Todos os planos incluem garantia de 30 dias. Se você seguir o método e não conseguir resultados, devolvemos 100% do seu investimento. Sem perguntas, sem complicação.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm md:text-base text-slate-600">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary-600" aria-hidden="true" />
              <span>Garantia de 30 dias</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary-600" aria-hidden="true" />
              <span>Sem risco</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary-600" aria-hidden="true" />
              <span>Reembolso total</span>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-6 md:mb-8 px-2">
            Perguntas sobre os planos
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto text-left">
            <div className="p-4 md:p-6 bg-white/70 backdrop-blur-sm rounded-xl md:rounded-2xl border border-slate-200 hover:border-primary-200 transition-colors">
              <h4 className="font-bold text-slate-900 mb-2 text-sm md:text-base flex items-center gap-2">
                <Lock className="w-4 h-4 md:w-5 md:h-5 text-primary-600" aria-hidden="true" />
                Posso mudar de plano depois?
              </h4>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                Sim, você pode fazer upgrade a qualquer momento. A diferença será calculada proporcionalmente.
              </p>
            </div>
            <div className="p-4 md:p-6 bg-white/70 backdrop-blur-sm rounded-xl md:rounded-2xl border border-slate-200 hover:border-primary-200 transition-colors">
              <h4 className="font-bold text-slate-900 mb-2 text-sm md:text-base flex items-center gap-2">
                <Zap className="w-4 h-4 md:w-5 md:h-5 text-primary-600" aria-hidden="true" />
                Como recebo o acesso?
              </h4>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                Após a confirmação do pagamento, você recebe acesso imediato por email. Tudo disponível na mesma hora.
              </p>
            </div>
            <div className="p-4 md:p-6 bg-white/70 backdrop-blur-sm rounded-xl md:rounded-2xl border border-slate-200 hover:border-primary-200 transition-colors">
              <h4 className="font-bold text-slate-900 mb-2 text-sm md:text-base flex items-center gap-2">
                <Shield className="w-4 h-4 md:w-5 md:h-5 text-primary-600" aria-hidden="true" />
                A garantia funciona mesmo?
              </h4>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                Sim. Se você seguir o método por 30 dias e não conseguir resultados, devolvemos 100% do valor pago.
              </p>
            </div>
            <div className="p-4 md:p-6 bg-white/70 backdrop-blur-sm rounded-xl md:rounded-2xl border border-slate-200 hover:border-primary-200 transition-colors">
              <h4 className="font-bold text-slate-900 mb-2 text-sm md:text-base flex items-center gap-2">
                <Star className="w-4 h-4 md:w-5 md:h-5 text-primary-600" aria-hidden="true" />
                Qual plano é melhor para mim?
              </h4>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                O plano Transformação Definitiva é o mais completo e recomendado, pois triplica suas chances de sucesso.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
