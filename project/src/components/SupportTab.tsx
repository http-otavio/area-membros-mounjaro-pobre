import React from 'react';
import { MessageCircle, Clock, Users, CheckCircle, Headphones, Zap } from 'lucide-react';

const SupportTab: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Headphones className="text-red-400 animate-pulse" size={32} />
            <h2 className="text-5xl font-black text-white tracking-tight">
              SUPORTE <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">VIP</span>
            </h2>
            <Headphones className="text-red-400 animate-pulse" size={32} />
          </div>
          <p className="text-gray-300 text-xl font-bold">
            Nossa equipe está <span className="text-yellow-400">24/7</span> para sua transformação
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-2xl p-8 backdrop-blur-sm border border-green-500/20 hover:border-green-400/40 transition-all duration-300">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                <MessageCircle className="text-white" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white">WhatsApp Direto</h3>
                <p className="text-green-400 font-bold">Resposta em até 2 horas</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 font-medium leading-relaxed">
              Tire suas dúvidas diretamente com nossa equipe especializada via WhatsApp. 
              <span className="text-green-400 font-bold"> Respondemos rapidamente</span> para não atrasar sua transformação.
            </p>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-4 px-6 rounded-xl font-black text-lg transition-all duration-300 flex items-center justify-center space-x-3 hover:scale-105 shadow-lg shadow-green-500/30"
            >
              <MessageCircle size={24} />
              <span>FALAR NO WHATSAPP</span>
            </a>
          </div>

          <div className="bg-gradient-to-br from-red-900/30 to-pink-900/30 rounded-2xl p-8 backdrop-blur-sm border border-red-500/20 hover:border-red-400/40 transition-all duration-300">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                <Users className="text-white" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white">Grupo VIP</h3>
                <p className="text-red-400 font-bold">Comunidade exclusiva</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 font-medium leading-relaxed">
              Participe do nosso grupo exclusivo no WhatsApp com outros alunos. 
              <span className="text-red-400 font-bold"> Compartilhe resultados</span>, tire dúvidas e receba motivação diária.
            </p>
            <button className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white py-4 px-6 rounded-xl font-black text-lg transition-all duration-300 flex items-center justify-center space-x-3 hover:scale-105 shadow-lg shadow-red-500/30">
              <Users size={24} />
              <span>ENTRAR NO GRUPO</span>
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 rounded-2xl p-8 backdrop-blur-sm border border-yellow-500/20">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <Zap className="text-yellow-400" size={32} />
            <h3 className="text-3xl font-black text-white">HORÁRIO DE ATENDIMENTO</h3>
            <Zap className="text-yellow-400" size={32} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="text-yellow-400 mx-auto mb-4" size={40} />
              <h4 className="text-white font-black text-xl mb-2">Segunda a Sexta</h4>
              <p className="text-gray-300 font-bold text-lg">8:00 às 18:00</p>
            </div>
            <div className="text-center">
              <Clock className="text-yellow-400 mx-auto mb-4" size={40} />
              <h4 className="text-white font-black text-xl mb-2">Sábado</h4>
              <p className="text-gray-300 font-bold text-lg">8:00 às 14:00</p>
            </div>
            <div className="text-center">
              <CheckCircle className="text-green-400 mx-auto mb-4" size={40} />
              <h4 className="text-white font-black text-xl mb-2">Resposta Rápida</h4>
              <p className="text-green-400 font-bold text-lg">Até 2 horas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportTab;