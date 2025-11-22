import { Routes, Route, Navigate } from 'react-router-dom';
import QuizPage from './pages/QuizPage';
import LandingPage from './pages/LandingPage';
import PricingPage from './pages/PricingPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Rota raiz: mostra o quiz primeiro */}
        <Route path="/" element={<QuizPage />} />
        
        {/* Rota da landing page (após quiz) */}
        <Route path="/landing" element={<LandingPage />} />
        
        {/* Rota da página de planos */}
        <Route path="/planos" element={<PricingPage />} />
        
        {/* Redireciona qualquer rota desconhecida para a raiz */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
