/* eslint-disable @next/next/no-img-element */
// components/AboutSection.js
import React from 'react';

const AboutSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Texto Introdutório */}
        <div className="md:w-1/2">
          <h1 className="text-5xl font-bold mb-4 text-black-800">Bem vindo ao NatureLens!</h1>
          <p className="mb-4 text-lg text-black-600">
          Nosso objetivo é conectar as pessoas com a biodiversidade ao seu redor. Combinando a tecnologia de aprendizado de máquina com dados de biodiversidade, oferecemos uma maneira simples de identificar plantas e animais.
          </p>
          <p className="text-lg text-black-600">
          Acreditamos que, ao facilitar o conhecimento sobre a natureza, podemos inspirar ações de preservação e cuidado com o meio ambiente. Junte-se a nós nessa jornada de respeito e amor pela vida selvagem!
          </p>
        </div>

        {/* Imagem de Ilustração */}
        <div className="md:w-1/2 flex justify-end mt-8 md:mt-0">
          <img
            src="/imagemsobrenos.webp"
            alt="Nature illustration"
            className="w-full max-w-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


