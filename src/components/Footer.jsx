import { Mail, Clock, Sparkles } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(255,255,255) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container-custom relative z-10 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Brand */}
          <div className="space-y-3 md:space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-white" aria-hidden="true" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold">NicoTic</h3>
            </div>
            <p className="text-sm md:text-base text-slate-400 leading-relaxed">
              Liberdade do vício com tecnologia, método e suporte humano.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 md:mb-6 text-base md:text-lg">Links Rápidos</h4>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-slate-400">
              <li>
                <a href="#como-funciona" className="hover:text-white transition-colors flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#beneficios" className="hover:text-white transition-colors flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Benefícios
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 md:mb-6 text-base md:text-lg">Suporte</h4>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-slate-400">
              <li className="flex items-center gap-2 md:gap-3">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-primary-500 flex-shrink-0" aria-hidden="true" />
                <span>suporte@nicotic.com</span>
              </li>
              <li className="flex items-center gap-2 md:gap-3">
                <Clock className="w-4 h-4 md:w-5 md:h-5 text-primary-500 flex-shrink-0" aria-hidden="true" />
                <span>Atendimento: 24/7 via app</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
            <p className="text-xs md:text-sm text-slate-500 text-center md:text-left">
              © {currentYear} NicoTic. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4 md:gap-6 text-xs md:text-sm text-slate-500">
              <a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded">
                Termos de Uso
              </a>
              <span className="text-slate-700">•</span>
              <a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded">
                Política de Privacidade
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
