import { Instagram, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-8 md:py-10 px-4 md:px-5">
      <div className="container mx-auto">
        {/* Brand */}
        <div className="text-center mb-6">
          <div className="flex items-center gap-2 mb-3 justify-center">
            <span className="text-xl md:text-2xl">🍼</span>
            <span className="font-heading font-bold text-lg md:text-xl">
              Mãe Nutri+
            </span>
          </div>
          <p className="text-white/70 text-xs md:text-sm mb-4 max-w-md mx-auto">
            500 receitas testadas para introdução alimentar segura. 
            Feito por mães, para mães. 💕
          </p>
          <div className="flex gap-3 justify-center">
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

        {/* Bottom */}
        <div className="border-t border-white/10 pt-5 text-center text-xs md:text-sm text-white/50">
          <p>© 2026 Mãe Nutri+. Todos os direitos reservados.</p>
          <p className="mt-1">Produto digital. Acesso imediato após confirmação de pagamento.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
