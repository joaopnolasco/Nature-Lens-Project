// components/Hero.js
import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen">
      {/* Imagem de Fundo */}
      <div className="absolute inset-0">
        <img
          src="/planodefundodees.jpg"
          alt="Nature Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Sobreposição para melhorar o contraste */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Conteúdo Principal */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
          Protegendo a Natureza para um Futuro Sustentável
        </h1>
        <p className="text-lg md:text-xl mb-8 text-white max-w-2xl">
        Descubra a biodiversidade ao seu redor e veja como pequenas ações podem preservar o que há de mais bonito na natureza. Identifique espécies e ajude a proteger o meio ambiente de forma prática e divertida.
        </p>
        <button className="px-8 py-3 bg-green-600 hover:bg-green-700 rounded-full text-white font-semibold">
          Ver mais
        </button>
      </div>
    </section>
  );
};

export default Hero;
