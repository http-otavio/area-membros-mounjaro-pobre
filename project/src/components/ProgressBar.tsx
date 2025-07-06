import React from 'react';
import { Zap } from 'lucide-react';

interface ProgressBarProps {
  progress: number;
  label?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, label }) => {
  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm font-black text-gray-300 uppercase tracking-wider">{label}</span>
          <span className="text-sm font-black text-yellow-400">{progress}%</span>
        </div>
      )}
      <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden border border-gray-700">
        <div 
          className="h-3 bg-gradient-to-r from-red-500 via-pink-500 to-yellow-400 rounded-full transition-all duration-1000 ease-out relative"
          style={{ width: `${progress}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
        </div>
      </div>
      {!label && (
        <div className="text-center mt-3 flex items-center justify-center space-x-2">
          <Zap className="text-yellow-400" size={16} />
          <span className="text-sm font-black text-yellow-400 uppercase tracking-wider">
            Progresso: {progress}%
          </span>
          <Zap className="text-yellow-400" size={16} />
        </div>
      )}
    </div>
  );
};

export default ProgressBar;