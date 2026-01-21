import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Star } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogOverlay,
} from "@/components/ui/dialog";

interface UpsellPopupProps {
  open: boolean;
  onClose: () => void;
  onAcceptUpsell: () => void;
  onDeclineUpsell: () => void;
}

const vipBenefits = [
  "Guia de Texturas Seguras",
  "Tabela de Alergênicos",
  "Cardápios Semanais Prontos",
  'Guia "Lidando com a Recusa"',
  "50 Receitas de Lanchinhos",
  "Comunidade VIP de Mães",
  "Atualizações",
  "Garantia de 7 dias",
];

const UpsellPopup = ({ open, onClose, onAcceptUpsell, onDeclineUpsell }: UpsellPopupProps) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="p-0 border-0 bg-transparent shadow-none max-w-[340px] md:max-w-[400px] overflow-hidden">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative bg-gradient-to-b from-primary via-primary to-rose-400 rounded-2xl overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-10 text-white/80 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="pt-6 pb-4 px-6 text-center">
            <span className="inline-block bg-foreground text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wide mb-4">
              UPGRADE PREMIUM
            </span>
            
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-white mb-2">
              Kit Completo VIP
            </h3>
            
            <div className="flex items-center justify-center gap-1 mb-1">
              <span className="font-heading font-bold text-4xl md:text-5xl text-yellow-400 drop-shadow-lg">
                R$ 15,00
              </span>
            </div>
            <p className="text-white/90 text-sm font-medium">
              ACESSO VITALÍCIO
            </p>
          </div>

          {/* Benefits Card */}
          <div className="mx-4 mb-4 bg-white rounded-2xl p-4 md:p-5 shadow-lg">
            <p className="text-xs font-bold text-muted-foreground mb-3 tracking-wide">
              INCLUI:
            </p>
            <div className="space-y-2.5">
              {vipBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2.5">
                  <div className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-foreground" strokeWidth={3} />
                  </div>
                  <span className="text-sm text-foreground font-medium">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="px-4 pb-5 space-y-2.5">
            <button
              onClick={onAcceptUpsell}
              className="w-full py-4 rounded-full bg-yellow-400 hover:bg-yellow-300 text-foreground font-heading font-bold text-sm md:text-base transition-all shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
            >
              QUERO O PREMIUM COM DESCONTO!
            </button>
            
            <button
              onClick={onDeclineUpsell}
              className="w-full py-3 rounded-full bg-white/20 hover:bg-white/30 text-white font-medium text-sm transition-colors border border-white/30"
            >
              Quero só a oferta básica
            </button>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
};

export default UpsellPopup;
