import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Quiz from '../components/Quiz';
import { trackPageView } from '../utils/metaPixel';

function QuizPage() {
  const navigate = useNavigate();

  // Rastreia visualização da página do quiz
  useEffect(() => {
    trackPageView('Quiz');
  }, []);

  // Handler para quando o quiz é completado
  const handleQuizComplete = useCallback(() => {
    // Redireciona para a landing page
    navigate('/landing');
  }, [navigate]);

  return (
    <Quiz onComplete={handleQuizComplete} />
  );
}

export default QuizPage;

