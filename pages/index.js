// pages/index.js
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection'; // Importando o componente AboutSection
import LoginButton from '../components/LoginButton'; // Usar o botão de login do NextAuth.js

export default function Home() {
  return (
    <div>
      <Head>
        <title>Protecting Nature</title>
      </Head>

      <Header />

      {/* Seção Home */}
      <section id="home">
        <Hero />
      </section>

      {/* Seção Sobre Nós */}
      <section id="about">
        <AboutSection />
      </section>

      {/* Seção Login com Plano de Fundo */}
      <section
        id="login"
        className="h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/imagemlogin3.jpg')" }} // Caminho da imagem
      >
        <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg max-w-lg text-center">
          <h2 className="text-4xl font-bold text-gray-800">Faça Login</h2>
          <p className="mt-4 text-lg text-gray-700">
            Entre com sua conta Google para começar a explorar.
          </p>
          {/* Usando o LoginButton */}
          <LoginButton />
        </div>
      </section>
    </div>
  );
}
