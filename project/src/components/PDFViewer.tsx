import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { ChevronLeft, ChevronRight, Download, ZoomIn, ZoomOut } from 'lucide-react';

// Configurar worker do PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface PDFViewerProps {
  pdfUrl: string;
  title: string;
  onClose: () => void;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ pdfUrl, title, onClose }) => {
  const [numPages, setNumPages] = React.useState<number>(0);
  const [pageNumber, setPageNumber] = React.useState<number>(1);
  const [scale, setScale] = React.useState<number>(1.0);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const goToPrevPage = () => {
    setPageNumber(prev => Math.max(prev - 1, 1));
  };

  const goToNextPage = () => {
    setPageNumber(prev => Math.min(prev + 1, numPages));
  };

  const zoomIn = () => {
    setScale(prev => Math.min(prev + 0.2, 2.0));
  };

  const zoomOut = () => {
    setScale(prev => Math.max(prev - 0.2, 0.5));
  };

  return (
    <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-black border-b border-red-900/30 p-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-black text-white">{title}</h3>
            <p className="text-gray-400 font-medium">
              Página {pageNumber} de {numPages}
            </p>
          </div>
          
          <div className="flex items-center space-x-3">
            {/* Controles de Zoom */}
            <button
              onClick={zoomOut}
              className="p-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all duration-300"
            >
              <ZoomOut size={20} />
            </button>
            <span className="text-white font-bold text-sm px-3">
              {Math.round(scale * 100)}%
            </span>
            <button
              onClick={zoomIn}
              className="p-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all duration-300"
            >
              <ZoomIn size={20} />
            </button>

            {/* Download */}
            <a
              href={pdfUrl}
              download
              className="p-2 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white rounded-lg transition-all duration-300"
            >
              <Download size={20} />
            </a>

            {/* Fechar */}
            <button
              onClick={onClose}
              className="p-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all duration-300"
            >
              ✕
            </button>
          </div>
        </div>
      </div>

      {/* PDF Content */}
      <div className="flex-1 flex items-center justify-center p-4 overflow-auto">
        <div className="bg-white rounded-lg shadow-2xl">
          <Document
            file={pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={
              <div className="flex items-center justify-center p-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500"></div>
              </div>
            }
            error={
              <div className="text-center p-8">
                <p className="text-red-500 font-bold">Erro ao carregar PDF</p>
              </div>
            }
          >
            <Page 
              pageNumber={pageNumber} 
              scale={scale}
              loading={
                <div className="flex items-center justify-center p-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-500"></div>
                </div>
              }
            />
          </Document>
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="bg-gradient-to-r from-gray-900 to-black border-t border-red-900/30 p-4">
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={goToPrevPage}
            disabled={pageNumber <= 1}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-bold transition-all duration-300 ${
              pageNumber <= 1
                ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white hover:scale-105'
            }`}
          >
            <ChevronLeft size={20} />
            <span>Anterior</span>
          </button>

          <div className="flex items-center space-x-2">
            <input
              type="number"
              min={1}
              max={numPages}
              value={pageNumber}
              onChange={(e) => {
                const page = parseInt(e.target.value);
                if (page >= 1 && page <= numPages) {
                  setPageNumber(page);
                }
              }}
              className="w-16 px-2 py-1 bg-gray-800 text-white text-center rounded border border-gray-600 focus:border-red-500 focus:outline-none"
            />
            <span className="text-gray-400">de {numPages}</span>
          </div>

          <button
            onClick={goToNextPage}
            disabled={pageNumber >= numPages}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-bold transition-all duration-300 ${
              pageNumber >= numPages
                ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white hover:scale-105'
            }`}
          >
            <span>Próxima</span>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PDFViewer;