import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  return (
    <a
      href="https://wa.me/5511999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="relative">
        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 transition-all duration-300 hover:scale-110">
          <MessageCircle className="text-white" size={28} />
        </div>
        
        {/* Pulse animation */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-30"></div>
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-black text-white text-sm rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap font-bold border border-green-500/30">
          FALAR NO WHATSAPP
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
        </div>
      </div>
    </a>
  );
};

export default WhatsAppButton;