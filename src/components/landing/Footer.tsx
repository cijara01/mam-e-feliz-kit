import { Instagram, MessageCircle, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-10 md:py-12 px-4 md:px-5">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 mb-3 md:mb-4 justify-center md:justify-start">
              <span className="text-xl md:text-2xl">🍼</span>
              <span className="font-heading font-bold text-lg md:text-xl">
                Mãe Nutri+
              </span>
            </div>
            <p className="text-white/70 text-xs md:text-sm mb-3 md:mb-4">
              500 receitas testadas para introdução alimentar segura. 
              Feito por mães, para mães. 💕
            </p>
            <div className="flex gap-3 justify-center md:justify-start">
              <a
                href="https://instagram.com/maenutriplue"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-4 h-4 md:w-5 md:h-5" />
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h4 className="font-heading font-bold mb-3 md:mb-4 text-sm md:text-base">Contato</h4>
            <div className="space-y-2 md:space-y-3 text-xs md:text-sm text-white/70">
              <a
                href="https://wa.me/5511999999999"
                className="flex items-center gap-2 hover:text-white transition-colors justify-center md:justify-start"
              >
                <MessageCircle className="w-3.5 h-3.5 md:w-4 md:h-4" />
                (11) 99999-9999
              </a>
              <a
                href="mailto:contato@maenutri.com.br"
                className="flex items-center gap-2 hover:text-white transition-colors justify-center md:justify-start"
              >
                <Mail className="w-3.5 h-3.5 md:w-4 md:h-4" />
                contato@maenutri.com.br
              </a>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4" />
                São Paulo, SP - Brasil
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="text-center md:text-left">
            <h4 className="font-heading font-bold mb-3 md:mb-4 text-sm md:text-base">Informações</h4>
            <div className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-white/70">
              <a href="#" className="block hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                Política de Reembolso
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-5 md:pt-6 text-center text-xs md:text-sm text-white/50">
          <p>© 2026 Mãe Nutri+. Todos os direitos reservados.</p>
          <p className="mt-1">Produto digital. Acesso imediato após confirmação de pagamento.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
