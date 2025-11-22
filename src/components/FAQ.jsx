import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'Quanto tempo leva para ver resultados?',
      answer: 'A maioria dos nossos usuários começa a ver resultados significativos em 7-14 dias. O método é progressivo e adaptado ao seu ritmo, sem pressão ou sofrimento desnecessário.',
    },
    {
      question: 'O método funciona mesmo para quem fuma há muitos anos?',
      answer: 'Sim! O NicoTic foi desenvolvido pensando em pessoas que fumam há décadas. A combinação de técnicas comprovadas, suporte da IA e comunidade de apoio aumenta significativamente as chances de sucesso, independentemente de quanto tempo você fuma.',
    },
    {
      question: 'Preciso de força de vontade?',
      answer: 'O método foi criado justamente para quem sente que não tem força de vontade suficiente. As técnicas são práticas e simples, focadas em reduzir a dependência gradualmente, sem sofrimento. Você não precisa lutar contra a vontade - você aprende a controlá-la.',
    },
    {
      question: 'O que está incluído no método?',
      answer: 'Você recebe acesso completo ao método completo com todas as estratégias, aplicativo para acompanhamento, assistente de IA disponível 24/7 para suporte nos momentos difíceis, e acesso à comunidade exclusiva de pessoas na mesma jornada. O método funciona com cigarro, pod, vape e tabaco.',
    },
    {
      question: 'Como funciona o suporte da IA?',
      answer: 'A IA está sempre disponível no app. Quando você sentir vontade de fumar, pode conversar com ela. Ela te ajuda a aplicar as técnicas do método, oferece motivação personalizada e te guia nos momentos mais desafiadores.',
    },
    {
      question: 'E se eu não conseguir parar?',
      answer: 'O método é progressivo e adaptável. Não há pressão - você segue no seu ritmo. A comunidade e a IA estão sempre disponíveis para te ajudar. O importante é continuar tentando e aplicar as técnicas. Cada dia sem fumar é uma vitória.',
    },
    {
      question: 'Preciso parar de uma vez ou posso reduzir gradualmente?',
      answer: 'O método oferece ambas as abordagens. Você escolhe o que funciona melhor para você. Algumas pessoas param de uma vez, outras reduzem gradualmente. O importante é seguir o método e ter suporte constante.',
    },
    {
      question: 'Como recebo o acesso?',
      answer: 'Após a confirmação, você recebe acesso imediato por email. Pode começar a usar o método, baixar o app e acessar a comunidade na mesma hora.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
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
          <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-primary-100 mb-4 md:mb-6">
            <HelpCircle className="w-7 h-7 md:w-8 md:h-8 text-primary-600" aria-hidden="true" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 md:mb-6 leading-tight px-2">
            Perguntas Frequentes
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-2">
            Tire suas dúvidas sobre o método NicoTic
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="card-modern overflow-hidden group"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-4 md:p-6 lg:p-8 flex items-center justify-between hover:bg-slate-50/50 transition-colors duration-200 group focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-2xl md:rounded-3xl"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="text-base sm:text-lg md:text-xl font-semibold text-slate-900 pr-3 md:pr-4 group-hover:text-primary-600 transition-colors leading-tight">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-lg bg-primary-100 flex items-center justify-center group-hover:bg-primary-200 transition-colors"
                  aria-hidden="true"
                >
                  <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-primary-600" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 md:px-6 lg:px-8 pb-4 md:pb-6 lg:pb-8 text-slate-600 leading-relaxed text-sm md:text-base lg:text-lg">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
