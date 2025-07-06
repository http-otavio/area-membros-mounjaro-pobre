import React from 'react';
import ModuleCard from './ModuleCard';
import ModuleContent from './ModuleContent';
import ProgressBar from './ProgressBar';
import { Flame } from 'lucide-react';

interface Lesson {
  id: number;
  title: string;
  type: 'video' | 'pdf';
  url: string;
  description?: string;
  duration?: string;
}

interface Module {
  id: number;
  title: string;
  description: string;
  lessons: Lesson[];
  isUnlocked: boolean;
  isCompleted: boolean;
  unlockDate?: Date;
  progress: number;
  coverImage: string;
}

const ContentTab: React.FC = () => {
  const [selectedModule, setSelectedModule] = React.useState<Module | null>(null);
  const [modules, setModules] = React.useState<Module[]>([
    {
      id: 1,
      title: 'A Receita Proibida',
      description: 'Tome 1x por dia e fique horas sem fome.',
      lessons: [
        {
          id: 1,
          title: 'Shot Turbo Mounjaro Natural',
          type: 'video',
          url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          description: 'Receita principal que imita o efeito do remédio com ingredientes caseiros.',
          duration: '15 min'
        },
        {
          id: 2,
          title: 'Guia Completo de Ingredientes',
          type: 'pdf',
          url: '/pdfs/modulo1-ingredientes.pdf',
          description: 'Lista completa de ingredientes, onde comprar e como preparar corretamente.'
        },
        {
          id: 3,
          title: 'Por que essa receita funciona?',
          type: 'video',
          url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          description: 'Explicação do efeito GLP-1 natural e ação dos ingredientes.',
          duration: '12 min'
        },
        {
          id: 4,
          title: 'Protocolo de Segurança',
          type: 'pdf',
          url: '/pdfs/modulo1-seguranca.pdf',
          description: 'Erros comuns, melhor horário, jejum e riscos ao exagerar.'
        }
      ],
      isUnlocked: true,
      isCompleted: false,
      progress: 0,
      coverImage: 'https://i.imgur.com/6yHDp57.jpg'
    },
    {
      id: 2,
      title: 'Desinchando em 24h',
      description: 'Ritual antiestufamento que funciona rápido.',
      lessons: [
        {
          id: 1,
          title: 'Suco Antiestufamento',
          type: 'video',
          url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          description: 'Pepino, hortelã e chá verde para reduzir estufamento rápido.',
          duration: '10 min'
        },
        {
          id: 2,
          title: 'Receitas Detox Completas',
          type: 'pdf',
          url: '/pdfs/modulo2-receitas.pdf',
          description: 'Todas as receitas detox com medidas exatas e variações.'
        },
        {
          id: 3,
          title: 'Água Termogênica Noturna',
          type: 'video',
          url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          description: 'Chá com hibisco, cavalinha e canela para agir durante o sono.',
          duration: '8 min'
        }
      ],
      isUnlocked: false,
      isCompleted: false,
      unlockDate: new Date(Date.now() + 24 * 60 * 60 * 1000),
      progress: 0,
      coverImage: 'https://i.imgur.com/xbyb5EN.jpg'
    },
    {
      id: 3,
      title: 'Café da Manhã Anti-Gordura',
      description: 'Comece o dia queimando gordura naturalmente.',
      lessons: [
        {
          id: 1,
          title: 'Panqueca de Banana Verde',
          type: 'video',
          url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          description: 'Receita rica em fibras e amido resistente que prolonga a saciedade.',
          duration: '12 min'
        },
        {
          id: 2,
          title: 'Cardápio Semanal Completo',
          type: 'pdf',
          url: '/pdfs/modulo3-cardapio.pdf',
          description: 'Planejamento semanal com todas as refeições anti-gordura.'
        }
      ],
      isUnlocked: false,
      isCompleted: false,
      unlockDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
      progress: 0,
      coverImage: 'https://i.imgur.com/eQW3WhL.jpg'
    },
    {
      id: 4,
      title: 'Chás Proibidos que Secam Dormindo',
      description: 'Emagreça enquanto dorme com receitas naturais.',
      lessons: [
        {
          id: 1,
          title: 'Chá da Saciedade Noturna',
          type: 'video',
          url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          duration: '9 min'
        },
        {
          id: 2,
          title: 'Manual dos Chás Termogênicos',
          type: 'pdf',
          url: '/pdfs/modulo4-chas.pdf',
          description: 'Guia completo com todas as receitas de chás e seus benefícios.'
        }
      ],
      isUnlocked: false,
      isCompleted: false,
      unlockDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      progress: 0,
      coverImage: 'https://i.imgur.com/f5NmaTl.jpg'
    },
    {
      id: 5,
      title: 'Lanches Zero Compulsão',
      description: 'Mate a fome sem culpa e sem exageros.',
      lessons: [
        {
          id: 1,
          title: 'Gelatina com Psyllium',
          type: 'video',
          url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          duration: '7 min'
        },
        {
          id: 2,
          title: 'Livro de Receitas Fit',
          type: 'pdf',
          url: '/pdfs/modulo5-lanches.pdf',
          description: '50+ receitas de lanches saudáveis e saborosos.'
        }
      ],
      isUnlocked: false,
      isCompleted: false,
      unlockDate: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000),
      progress: 0,
      coverImage: 'https://i.imgur.com/KMreRar.jpg'
    },
    {
      id: 6,
      title: 'Estômago Chapado e Intestino Solto',
      description: 'Desinche e solte o intestino de forma natural.',
      lessons: [
        {
          id: 1,
          title: 'Mix de Fibras Natural',
          type: 'video',
          url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          duration: '11 min'
        },
        {
          id: 2,
          title: 'Protocolo Intestinal Completo',
          type: 'pdf',
          url: '/pdfs/modulo6-intestino.pdf',
          description: 'Guia completo para regular o intestino naturalmente.'
        }
      ],
      isUnlocked: false,
      isCompleted: false,
      unlockDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
      progress: 0,
      coverImage: 'https://i.imgur.com/1roJhXp.jpg'
    },
    {
      id: 7,
      title: 'Receitas Anti-Flacidez Natural',
      description: 'Firmeza de pele natural sem procedimentos.',
      lessons: [
        {
          id: 1,
          title: 'Colágeno Caseiro com Limão',
          type: 'video',
          url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          duration: '13 min'
        },
        {
          id: 2,
          title: 'Manual Anti-Flacidez',
          type: 'pdf',
          url: '/pdfs/modulo7-antiflacidez.pdf',
          description: 'Tratamentos caseiros para firmeza da pele.'
        }
      ],
      isUnlocked: false,
      isCompleted: false,
      unlockDate: new Date(Date.now() + 6 * 24 * 60 * 60 * 1000),
      progress: 0,
      coverImage: 'https://i.imgur.com/v7GFSoi.jpg'
    },
    {
      id: 8,
      title: 'Magra pra Sempre',
      description: 'Plano de manutenção para resultados duradouros.',
      lessons: [
        {
          id: 1,
          title: 'Cardápio Simples de Manutenção',
          type: 'video',
          url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
          duration: '16 min'
        },
        {
          id: 2,
          title: 'Plano de Manutenção Completo',
          type: 'pdf',
          url: '/pdfs/modulo8-manutencao.pdf',
          description: 'Estratégias para manter o peso ideal para sempre.'
        }
      ],
      isUnlocked: false,
      isCompleted: false,
      unlockDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      progress: 0,
      coverImage: 'https://i.imgur.com/0d07avM.jpg'
    }
  ]);

  const handleModuleClick = (module: Module) => {
    if (module.isUnlocked) {
      setSelectedModule(module);
    }
  };

  const handleBackToModules = () => {
    setSelectedModule(null);
  };

  const overallProgress = Math.round(
    (modules.filter(m => m.isCompleted).length / modules.length) * 100
  );

  if (selectedModule) {
    return (
      <ModuleContent 
        module={selectedModule} 
        onBack={handleBackToModules}
      />
    );
  }

  return (
    <div className="min-h-screen bg-black pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Flame className="text-yellow-400 animate-pulse" size={40} />
            <h1 className="text-6xl font-black text-white tracking-tight leading-tight">
              O PROTOCOLO NATURAL QUE TÁ <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">SECANDO BARRIGA</span> NO BRASIL
            </h1>
            <Flame className="text-yellow-400 animate-pulse" size={40} />
          </div>
          <p className="text-gray-300 text-2xl font-bold max-w-4xl mx-auto leading-relaxed mb-12">
            8 módulos com receitas caseiras potentes. <span className="text-red-400">Nada de milagre.</span>
          </p>
          
          {/* Progress Bar */}
          <div className="max-w-md mx-auto">
            <ProgressBar progress={overallProgress} />
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {modules.map((module) => (
            <ModuleCard
              key={module.id}
              module={module}
              onModuleClick={handleModuleClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentTab;