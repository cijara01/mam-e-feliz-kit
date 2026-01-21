import { Instagram, MessageCircle, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-12 px-5">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🍼</span>
              <span className="font-heading font-bold text-xl">
                Mãe Nutri+
              </span>
            </div>
            <p className="text-white/70 text-sm mb-4">
              Alimentação saudável e prática para bebês de 0 a 24 meses. 
              Feito com amor por mães, para mães. 💕
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/maenutriplue"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold mb-4">Contato</h4>
            <div className="space-y-3 text-sm text-white/70">
              <a
                href="https://wa.me/5511999999999"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                (11) 99999-9999
              </a>
              <a
                href="mailto:contato@maenutrí.com.br"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                contato@maenutri.com.br
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                São Paulo, SP - Brasil
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-bold mb-4">Informações</h4>
            <div className="space-y-2 text-sm text-white/70">
              <a href="#" className="block hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                Política de Devolução
              </a>
              <a href="#" className="block hover:text-white transition-colors">
                Certificações ANVISA
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 text-center text-sm text-white/50">
          <p>© 2026 Mãe Nutri+. Todos os direitos reservados.</p>
          <p className="mt-1">CNPJ: 00.000.000/0001-00</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
