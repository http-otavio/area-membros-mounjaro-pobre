import React from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Lightbulb } from 'lucide-react';

const FAQTab: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const faqs = [
    {
      question: "Posso tomar o Mounjaro Natural todos os dias?",
      answer: "Sim. A receita principal é feita com ingredientes naturais e pode ser usada diariamente, desde que com moderação."
    },
    {
      question: "Em quanto tempo começo a perder peso?",
      answer: "Muitos alunos relatam resultado nos 2 primeiros dias, mas varia de corpo para corpo."
    },
    {
      question: "Tem efeito colateral?",
      answer: "Se tomado corretamente, não. Evite exageros e respeite as instruções."
    },
    {
      question: "Funciona sem exercício?",
      answer: "Sim. O protocolo foi feito para funcionar mesmo sem academia."
    },
    {
      question: "Grávidas ou lactantes podem usar?",
      answer: "Consulte sempre seu médico antes de iniciar qualquer protocolo."
    },
    {
      question: "Quantos quilos posso perder com esse protocolo?",
      answer: "A média de alunos gira entre 4 e 8kg no primeiro mês."
    },
    {
      question: "Preciso mudar minha alimentação para funcionar?",
      answer: "Não é obrigatório, mas pequenas trocas aceleram os resultados."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <HelpCircle className="text-yellow-400 animate-pulse" size={32} />
            <h2 className="text-5xl font-black text-white tracking-tight">
              DÚVIDAS <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">FREQUENTES</span>
            </h2>
            <HelpCircle className="text-yellow-400 animate-pulse" size={32} />
          </div>
          <p className="text-gray-300 text-xl font-bold">
            Tire suas principais dúvidas sobre o <span className="text-red-400">protocolo secreto</span>
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden backdrop-blur-sm border border-red-900/30 hover:border-red-500/50 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gradient-to-r hover:from-red-900/20 hover:to-pink-900/20 transition-all duration-300"
              >
                <h3 className="text-lg font-black text-white pr-4 leading-relaxed">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="text-red-400 flex-shrink-0" size={24} />
                ) : (
                  <ChevronDown className="text-red-400 flex-shrink-0" size={24} />
                )}
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6 animate-in slide-in-from-top-2 duration-300">
                  <p className="text-gray-300 leading-relaxed font-medium">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-br from-red-900/30 to-pink-900/30 rounded-2xl p-8 border border-red-500/20">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Lightbulb className="text-yellow-400" size={32} />
              <h3 className="text-3xl font-black text-white">
                NÃO ENCONTROU SUA RESPOSTA?
              </h3>
              <Lightbulb className="text-yellow-400" size={32} />
            </div>
            <p className="text-gray-300 mb-6 font-bold text-lg">
              Nossa equipe está pronta para ajudar você com <span className="text-red-400">qualquer dúvida</span>
            </p>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white py-4 px-8 rounded-xl font-black text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-red-500/30"
            >
              <span>FALAR COM SUPORTE</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQTab;