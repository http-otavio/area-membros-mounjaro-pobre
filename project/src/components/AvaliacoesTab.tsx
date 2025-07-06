import React from 'react';
import { Star, Heart, ThumbsUp } from 'lucide-react';

const AvaliacoesTab: React.FC = () => {
  const testimonials = [
    {
      name: 'Camila A.',
      location: 'Belo Horizonte/MG',
      rating: 5,
      comment: 'Juro que achei que era mais uma enganação da internet. Mas o shot do primeiro dia me tirou totalmente a fome! Em 3 dias perdi 2kg!'
    },
    {
      name: 'Vanessa R.',
      location: 'Curitiba/PR',
      rating: 5,
      comment: 'Perdi 6kg sem sentir que estava de dieta. O café turbo virou meu ritual sagrado!'
    },
    {
      name: 'Márcia L.',
      location: 'São Paulo/SP',
      rating: 5,
      comment: 'Minha barriga desinchou tanto que minha calça 42 virou 38. E sem exercício!'
    },
    {
      name: 'Bruna C.',
      location: 'Salvador/BA',
      rating: 5,
      comment: 'Cada módulo é melhor que o outro. Tudo muito simples e gostoso de fazer.'
    },
    {
      name: 'Danilo F.',
      location: 'Recife/PE',
      rating: 4,
      comment: 'Só usei os shots e os chás, mesmo assim perdi 4kg em 10 dias.'
    },
    {
      name: 'Luciana M.',
      location: 'Porto Alegre/RS',
      rating: 5,
      comment: 'Essa é a melhor compra que já fiz! Parece bobo, mas mudou minha autoestima.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Heart className="text-red-400 animate-pulse" size={32} />
            <h2 className="text-5xl font-black text-white tracking-tight">
              TRANSFORMAÇÕES <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">REAIS</span>
            </h2>
            <Heart className="text-red-400 animate-pulse" size={32} />
          </div>
          <p className="text-gray-300 text-xl font-bold">
            Mais de <span className="text-yellow-400">10.000 pessoas</span> já transformaram suas vidas com o protocolo
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-2xl p-6 border border-green-500/20">
              <ThumbsUp className="text-green-400 mx-auto mb-3" size={32} />
              <h3 className="text-2xl font-black text-white">98%</h3>
              <p className="text-gray-300 font-medium">Satisfação</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 rounded-2xl p-6 border border-yellow-500/20">
              <Star className="text-yellow-400 mx-auto mb-3" size={32} />
              <h3 className="text-2xl font-black text-white">4.8</h3>
              <p className="text-gray-300 font-medium">Nota Média</p>
            </div>
            <div className="bg-gradient-to-br from-red-900/30 to-pink-900/30 rounded-2xl p-6 border border-red-500/20">
              <Heart className="text-red-400 mx-auto mb-3" size={32} />
              <h3 className="text-2xl font-black text-white">10k+</h3>
              <p className="text-gray-300 font-medium">Vidas Transformadas</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 hover:from-gray-800 hover:to-gray-900 transition-all duration-300 hover:scale-105 border border-red-900/30 hover:border-red-500/50 shadow-xl"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-black text-xl">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="text-white font-black text-xl">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm font-medium">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex items-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}
                  />
                ))}
              </div>

              <blockquote className="text-gray-300 italic font-medium leading-relaxed text-lg">
                "{testimonial.comment}"
              </blockquote>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-red-900/30 to-pink-900/30 rounded-3xl p-8 border border-red-500/20 text-center">
          <h3 className="text-3xl font-black text-white mb-4">
            QUER COMPARTILHAR SEU RESULTADO?
          </h3>
          <p className="text-gray-300 text-lg font-medium mb-6">
            Envie seu depoimento e inspire outras pessoas na jornada de transformação
          </p>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white py-4 px-8 rounded-xl font-black text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-red-500/30"
          >
            <Heart size={24} />
            <span>ENVIAR DEPOIMENTO</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AvaliacoesTab;