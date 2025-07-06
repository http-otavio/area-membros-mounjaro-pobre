import React from 'react';
import { Play, FileText, Download, ArrowLeft } from 'lucide-react';
import PDFViewer from './PDFViewer';

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
  coverImage: string;
}

interface ModuleContentProps {
  module: Module;
  onBack: () => void;
}

const ModuleContent: React.FC<ModuleContentProps> = ({ module, onBack }) => {
  const [selectedLesson, setSelectedLesson] = React.useState<Lesson | null>(null);
  const [showPDFViewer, setShowPDFViewer] = React.useState(false);

  const handleLessonClick = (lesson: Lesson) => {
    setSelectedLesson(lesson);
    if (lesson.type === 'pdf') {
      setShowPDFViewer(true);
    }
  };

  const closePDFViewer = () => {
    setShowPDFViewer(false);
    setSelectedLesson(null);
  };

  return (
    <div className="min-h-screen bg-black pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-8">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-xl font-bold transition-all duration-300 hover:scale-105"
          >
            <ArrowLeft size={20} />
            <span>VOLTAR</span>
          </button>
          <div>
            <h1 className="text-4xl font-black text-white">{module.title}</h1>
            <p className="text-gray-300 text-lg font-medium">{module.description}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Lista de Aulas */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-black text-white mb-6">CONTEÚDO DO MÓDULO</h2>
            <div className="space-y-4">
              {module.lessons.map((lesson) => (
                <button
                  key={lesson.id}
                  onClick={() => handleLessonClick(lesson)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 hover:scale-105 border ${
                    selectedLesson?.id === lesson.id
                      ? 'bg-gradient-to-r from-red-900/50 to-pink-900/50 border-red-500/50'
                      : 'bg-gray-900 border-gray-700 hover:border-red-500/50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      lesson.type === 'video' 
                        ? 'bg-gradient-to-r from-red-500 to-pink-500' 
                        : 'bg-gradient-to-r from-blue-500 to-purple-500'
                    }`}>
                      {lesson.type === 'video' ? (
                        <Play className="text-white" size={16} />
                      ) : (
                        <FileText className="text-white" size={16} />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-bold">{lesson.title}</h3>
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <span className="capitalize">{lesson.type}</span>
                        {lesson.duration && (
                          <>
                            <span>•</span>
                            <span>{lesson.duration}</span>
                          </>
                        )}
                      </div>
                    </div>
                    {lesson.type === 'pdf' && (
                      <Download className="text-gray-400" size={16} />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Área de Conteúdo */}
          <div className="lg:col-span-2">
            {selectedLesson ? (
              <div className="bg-gray-900 rounded-2xl overflow-hidden">
                {selectedLesson.type === 'video' ? (
                  <div className="aspect-video bg-black flex items-center justify-center">
                    <iframe
                      src={selectedLesson.url}
                      className="w-full h-full"
                      allowFullScreen
                      title={selectedLesson.title}
                    />
                  </div>
                ) : (
                  <div className="p-8 text-center">
                    <FileText className="text-blue-400 mx-auto mb-4" size={64} />
                    <h3 className="text-2xl font-black text-white mb-4">{selectedLesson.title}</h3>
                    <p className="text-gray-300 mb-6">
                      {selectedLesson.description || 'Material em PDF para download e visualização'}
                    </p>
                    <div className="flex items-center justify-center space-x-4">
                      <button
                        onClick={() => setShowPDFViewer(true)}
                        className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105"
                      >
                        <FileText size={20} />
                        <span>VISUALIZAR PDF</span>
                      </button>
                      <a
                        href={selectedLesson.url}
                        download
                        className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 hover:scale-105"
                      >
                        <Download size={20} />
                        <span>BAIXAR PDF</span>
                      </a>
                    </div>
                  </div>
                )}
                
                {selectedLesson.description && selectedLesson.type === 'video' && (
                  <div className="p-6">
                    <h3 className="text-xl font-black text-white mb-3">Sobre esta aula</h3>
                    <p className="text-gray-300 leading-relaxed">{selectedLesson.description}</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-gray-900 rounded-2xl p-12 text-center">
                <img 
                  src={module.coverImage} 
                  alt={module.title}
                  className="w-64 h-64 object-cover rounded-2xl mx-auto mb-6"
                />
                <h3 className="text-3xl font-black text-white mb-4">Selecione uma aula</h3>
                <p className="text-gray-300 text-lg">
                  Escolha uma aula na lista ao lado para começar a assistir ou baixar o material
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* PDF Viewer Modal */}
      {showPDFViewer && selectedLesson && (
        <PDFViewer
          pdfUrl={selectedLesson.url}
          title={selectedLesson.title}
          onClose={closePDFViewer}
        />
      )}
    </div>
  );
};

export default ModuleContent;