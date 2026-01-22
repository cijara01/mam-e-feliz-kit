const Footer = () => {
  return (
    <footer className="bg-foreground py-8 md:py-10 px-4 md:px-5">
      <div className="container mx-auto">
        {/* Brand */}
        <div className="text-center mb-6">
          <div className="flex items-center gap-2 mb-3 justify-center">
            <span className="text-xl md:text-2xl">🍼</span>
            <span className="font-heading font-bold text-lg md:text-xl text-white">
              Mãe Nutri+
            </span>
          </div>
          <p className="text-white/80 text-xs md:text-sm mb-4 max-w-md mx-auto">
            500 receitas testadas para introdução alimentar segura. 
            Feito por mães, para mães. 💕
          </p>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-5 text-center text-xs md:text-sm text-white/70">
          <p>© 2026 Mãe Nutri+. Todos os direitos reservados.</p>
          <p className="mt-1">Produto digital. Acesso imediato após confirmação de pagamento.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
