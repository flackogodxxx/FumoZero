import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';

const Quiz = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState(null);

  const questions = [
    {
      id: 1,
      question: 'Há quanto tempo o cigarro controla sua vida?',
      type: 'choice',
      options: [
        { value: 'less-1', label: 'Menos de 1 ano', score: 1 },
        { value: '1-5', label: 'Entre 1 e 5 anos', score: 2 },
        { value: '5-10', label: 'Entre 5 e 10 anos', score: 3 },
        { value: '10-20', label: 'Entre 10 e 20 anos', score: 4 },
        { value: 'more-20', label: 'Mais de 20 anos', score: 5 },
      ],
    },
    {
      id: 2,
      question: 'Quantas vezes você já falhou ao tentar parar?',
      type: 'choice',
      options: [
        { value: 'never', label: 'Nunca tentei', score: 1 },
        { value: '1-2', label: '1 ou 2 vezes', score: 2 },
        { value: '3-5', label: '3 a 5 vezes', score: 3 },
        { value: 'more-5', label: 'Mais de 5 vezes', score: 4 },
        { value: 'many', label: 'Perdi a conta de quantas vezes', score: 5 },
      ],
    },
    {
      id: 3,
      question: 'O que mais dói quando você pensa em continuar fumando?',
      type: 'choice',
      options: [
        { value: 'health', label: 'Ver minha saúde piorar a cada dia', score: 5 },
        { value: 'money', label: 'Gastar centenas de reais por mês', score: 3 },
        { value: 'family', label: 'Saber que estou prejudicando minha família', score: 5 },
        { value: 'control', label: 'Sentir que não tenho controle sobre minha vida', score: 4 },
        { value: 'future', label: 'Saber que estou destruindo meu futuro', score: 5 },
      ],
    },
    {
      id: 4,
      question: 'O que acontece quando você tenta parar sozinho?',
      type: 'choice',
      options: [
        { value: 'easy', label: 'Consigo parar facilmente', score: 1 },
        { value: 'hard', label: 'É uma luta constante', score: 3 },
        { value: 'impossible', label: 'Parece completamente impossível', score: 5 },
        { value: 'anxious', label: 'Fico ansioso, irritado e sem controle', score: 4 },
        { value: 'fails', label: 'Sempre volto e me sinto um fracasso', score: 5 },
      ],
    },
    {
      id: 5,
      question: 'O que você mais deseja ao parar de fumar?',
      type: 'choice',
      options: [
        { value: 'health', label: 'Recuperar minha saúde e energia', score: 4 },
        { value: 'freedom', label: 'Me sentir livre dessa prisão', score: 5 },
        { value: 'money', label: 'Parar de queimar dinheiro', score: 3 },
        { value: 'family', label: 'Ser o exemplo que minha família merece', score: 5 },
        { value: 'confidence', label: 'Recuperar minha dignidade e autoestima', score: 4 },
      ],
    },
  ];

  const handleAnswer = useCallback((option) => {
    const newAnswers = {
      ...answers,
      [currentQuestion]: option,
    };
    setAnswers(newAnswers);

    // Avança para próxima pergunta ou mostra resultado
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(prev => prev + 1);
      }, 400);
    } else {
      // Calcula resultado
      calculateResult(newAnswers);
    }
  }, [answers, currentQuestion, questions.length]);

  const calculateResult = useCallback((allAnswers) => {
    const totalScore = Object.values(allAnswers).reduce((sum, answer) => sum + answer.score, 0);
    const avgScore = totalScore / questions.length;

    let resultType;
    let message;
    let subtitle;
    let insights = [];

    if (avgScore >= 4.5) {
      resultType = 'high';
      message = 'Você precisa de uma solução que realmente funcione';
      subtitle = 'Sua situação mostra que métodos tradicionais não funcionaram. Você precisa de algo diferente. Algo que realmente funcione.';
      insights = [
        'Você já tentou de tudo e sabe que precisa de um método diferente',
        'A dependência está destruindo sua vida e você sabe disso',
        'Você tem a motivação - só falta o método certo para transformar sua vida',
      ];
    } else if (avgScore >= 3.5) {
      resultType = 'medium';
      message = 'Este é o momento perfeito para sua transformação';
      subtitle = 'Você já reconhece o problema e está pronto para uma solução definitiva. Não deixe essa oportunidade passar.';
      insights = [
        'Você já sente o impacto do cigarro na sua vida',
        'Este é o melhor momento para fazer a mudança',
        'Com o método certo, você pode parar de forma definitiva e sem sofrimento',
      ];
    } else {
      resultType = 'low';
      message = 'Você pode evitar anos de sofrimento';
      subtitle = 'Quanto antes você agir, mais fácil será. Não espere a dependência se tornar mais forte. Aja agora.';
      insights = [
        'Você está no início - o momento mais fácil para parar',
        'Evitar anos de dependência é a decisão mais inteligente',
        'Começar agora é infinitamente mais fácil do que esperar',
      ];
    }

    setResult({
      type: resultType,
      message,
      subtitle,
      insights,
      score: avgScore,
    });
    setShowResult(true);
  }, [questions.length]);

  const handleContinue = useCallback(() => {
    if (onComplete) {
      onComplete();
    }
  }, [onComplete]);

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-primary-50/30 relative overflow-hidden flex items-center py-6 sm:py-8 md:py-12">
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

      <div className="container-custom relative z-10 w-full max-w-2xl mx-auto px-4 sm:px-6">
        <AnimatePresence mode="wait">
          {!showResult ? (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="card-glass"
            >
              {/* Header */}
              <div className="text-center mb-6 md:mb-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                  className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-primary-100/80 backdrop-blur-sm border border-primary-200/50 rounded-full text-xs md:text-sm font-semibold text-primary-700 mb-4"
                >
                  <Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  <span>Quiz Personalizado</span>
                </motion.div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-2 md:mb-3 leading-tight px-2">
                  Descubra seu perfil de ex-fumante
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-slate-600 px-2">
                  Responda 5 perguntas e receba uma análise personalizada
                </p>
              </div>

              {/* Progress Bar */}
              <div className="mb-6 md:mb-8">
                <div className="flex items-center justify-between text-xs md:text-sm text-slate-600 mb-2">
                  <span className="font-medium">Pergunta {currentQuestion + 1} de {questions.length}</span>
                  <span className="font-semibold">{Math.round(progress)}%</span>
                </div>
                <div className="w-full h-2.5 md:h-3 bg-slate-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full shadow-sm"
                  />
                </div>
              </div>

              {/* Question */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQuestion}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-slate-900 mb-6 md:mb-8 text-center leading-tight px-2">
                    {questions[currentQuestion].question}
                  </h3>

                  {/* Options */}
                  <div className="space-y-3 md:space-y-4">
                    {questions[currentQuestion].options.map((option, index) => (
                      <motion.button
                        key={option.value}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.06, duration: 0.4 }}
                        onClick={() => handleAnswer(option)}
                        className="w-full p-4 md:p-5 text-left rounded-xl md:rounded-2xl bg-white/90 backdrop-blur-sm border-2 border-slate-200 hover:border-primary-400 hover:bg-primary-50/70 active:scale-[0.98] transition-all duration-300 group touch-manipulation focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                        aria-label={option.label}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-base md:text-lg font-semibold text-slate-900 group-hover:text-primary-700 transition-colors leading-snug">
                            {option.label}
                          </span>
                          <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-slate-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all flex-shrink-0" />
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="card-glass text-center"
            >
              {/* Result Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 15 }}
                className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-gradient-to-br from-primary-500 to-primary-600 mb-4 md:mb-6 shadow-xl"
                aria-hidden="true"
              >
                <CheckCircle2 className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </motion.div>

              {/* Result Message */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 md:mb-4 leading-tight px-2">
                {result.message}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-6 md:mb-8 leading-relaxed px-2">
                {result.subtitle}
              </p>

              {/* Insights */}
              <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl md:rounded-2xl p-5 md:p-6 mb-6 md:mb-8 border border-primary-100">
                <h3 className="text-base md:text-lg font-bold text-slate-900 mb-4 flex items-center justify-center gap-2">
                  <AlertCircle className="w-4 h-4 md:w-5 md:h-5 text-primary-600" aria-hidden="true" />
                  <span>Análise Personalizada</span>
                </h3>
                <ul className="space-y-2.5 md:space-y-3 text-left">
                  {result.insights.map((insight, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.12, duration: 0.5 }}
                      className="flex items-start gap-2.5 md:gap-3 text-slate-700 text-sm md:text-base leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{insight}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="space-y-3 md:space-y-4">
                <p className="text-base md:text-lg font-semibold text-slate-900 px-2">
                  O método NicoTic foi feito para sua situação específica
                </p>
                <button
                  onClick={handleContinue}
                  className="btn-primary w-full group touch-manipulation focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                  aria-label="Ver o método NicoTic"
                >
                  <span>Ver o Método Agora</span>
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </button>
                <p className="text-xs md:text-sm text-slate-500 px-2">
                  ✓ Análise personalizada baseada nas suas respostas
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Quiz;
