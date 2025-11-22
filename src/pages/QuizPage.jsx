import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Quiz from '../components/Quiz';

function QuizPage() {
  const navigate = useNavigate();

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

