// components/Header.js
import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Header = () => {
  return (
    <header className="bg-green-400 bg-opacity-50 text-white fixed top-0 left-0 w-full z-50 shadow-md backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Menu de Navegação Alinhado à Esquerda */}
        <nav className="flex-1">
          <ul className="flex space-x-6">
            <li>
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-green-300"
              >
                Home
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-green-300"
              >
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="login"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-green-300"
              >
                Login
              </ScrollLink>
            </li>
          </ul>
        </nav>

        {/* Logo Alinhada à Direita */}
        <div className="logo text-right">
          <img src="/natural-product.png" alt="Logo" className="h-8 inline-block" />
        </div>
      </div>
    </header>
  );
};

export default Header;

