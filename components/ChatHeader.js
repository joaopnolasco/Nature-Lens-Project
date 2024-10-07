// components/ChatHeader.js
import React from 'react';

const ChatHeader = () => {
  return (
    <header className="p-6 bg-[#39462C]">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">NatureLens</h1>
        <p className="text-lg text-white text-center">
          Uma I.A que ajuda a identificar espécies de animais e plantas
        </p>
        <div className="w-12 h-12">
          <img
            src="/natural-product.png"
            alt="NatureLens Logo"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </header>
  );
};

export default ChatHeader;
