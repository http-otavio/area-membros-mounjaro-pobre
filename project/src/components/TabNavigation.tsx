import React from 'react';
import { User, MessageCircle, HelpCircle, BookOpen, Star } from 'lucide-react';

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'conteudo', label: 'CONTEÚDO', icon: BookOpen },
    { id: 'suporte', label: 'SUPORTE', icon: MessageCircle },
    { id: 'faq', label: 'FAQ', icon: HelpCircle },
    { id: 'avaliacoes', label: 'AVALIAÇÕES', icon: Star },
    { id: 'perfil', label: 'PERFIL', icon: User },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-md border-b border-red-900/30 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg shadow-red-500/30">
              <span className="text-white font-black text-lg">M</span>
            </div>
            <div>
              <h1 className="text-white font-black text-xl tracking-tight">MOUNJARO DE POBRE</h1>
              <p className="text-yellow-400 text-xs font-bold uppercase tracking-wider">Protocolo Secreto</p>
            </div>
          </div>
          
          <div className="flex space-x-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className={`relative px-4 py-2 rounded-xl transition-all duration-300 flex items-center space-x-2 font-black text-sm ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-red-600 to-pink-600 text-white shadow-lg shadow-red-500/30 scale-105'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50 hover:scale-105'
                  }`}
                >
                  <Icon size={16} />
                  <span>{tab.label}</span>
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-yellow-400 rounded-full"></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TabNavigation;