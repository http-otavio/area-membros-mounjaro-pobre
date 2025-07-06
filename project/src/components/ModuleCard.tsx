import React from 'react';
import { Play, Lock, CheckCircle, Clock } from 'lucide-react';

interface Module {
  id: number;
  title: string;
  description: string;
  lessons: string[];
  isUnlocked: boolean;
  isCompleted: boolean;
  unlockDate?: Date;
  progress: number;
  coverImage: string;
}

interface ModuleCardProps {
  module: Module;
  onModuleClick: (module: Module) => void;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ module, onModuleClick }) => {
  const getTimeUntilUnlock = () => {
    if (!module.unlockDate) return '';
    const now = new Date();
    const diff = module.unlockDate.getTime() - now.getTime();
    if (diff <= 0) return '';
    
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const [countdown, setCountdown] = React.useState(getTimeUntilUnlock());

  React.useEffect(() => {
    if (!module.isUnlocked && module.unlockDate) {
      const timer = setInterval(() => {
        setCountdown(getTimeUntilUnlock());
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [module.isUnlocked, module.unlockDate]);

  return (
    <div className="group relative">
      <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/20 hover:scale-105 border border-gray-800 hover:border-red-500/50">
        {/* Module Cover - Capa Completa */}
        <div className="relative h-80 overflow-hidden">
          <img 
            src={module.coverImage} 
            alt={module.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Overlay sutil apenas no hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-300"></div>
          
          {/* Status Icon - Canto superior direito */}
          <div className="absolute top-4 right-4 w-10 h-10 bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center">
            {module.isCompleted ? (
              <CheckCircle className="text-green-400" size={20} />
            ) : module.isUnlocked ? (
              <Play className="text-yellow-400" size={20} />
            ) : (
              <Lock className="text-gray-400" size={20} />
            )}
          </div>

          {/* Conteúdo do Hover - Centralizado */}
          <div className="absolute inset-0 flex flex-col justify-center items-center p-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <h3 className="text-2xl font-black text-white mb-3 text-center leading-tight">
              Módulo {module.id.toString().padStart(2, '0')} – {module.title}
            </h3>
            <p className="text-gray-200 text-lg mb-6 font-bold text-center leading-relaxed">
              {module.description}
            </p>

            {/* Action Button */}
            <button
              onClick={() => module.isUnlocked && onModuleClick(module)}
              disabled={!module.isUnlocked}
              className={`py-4 px-8 rounded-xl font-black text-lg transition-all duration-300 flex items-center justify-center space-x-3 ${
                module.isUnlocked
                  ? 'bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white shadow-lg shadow-red-500/30 hover:shadow-red-500/50 hover:scale-105'
                  : 'bg-gray-800 text-gray-400 cursor-not-allowed border border-gray-700'
              }`}
            >
              {module.isUnlocked ? (
                <>
                  <Play size={20} />
                  <span>VER CONTEÚDO</span>
                </>
              ) : (
                <>
                  <Clock size={20} />
                  <span>LIBERA EM: {countdown}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Indicador de Status - Minimalista */}
        <div className="absolute bottom-4 left-4 group-hover:opacity-0 transition-opacity duration-300">
          <div className="bg-black/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-gray-700">
            {module.isUnlocked ? (
              <span className="text-green-400 text-sm font-bold flex items-center space-x-1">
                <CheckCircle size={14} />
                <span>Disponível agora</span>
              </span>
            ) : (
              <span className="text-yellow-400 text-sm font-bold flex items-center space-x-1">
                <Clock size={14} />
                <span>Libera em {countdown}</span>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModuleCard;