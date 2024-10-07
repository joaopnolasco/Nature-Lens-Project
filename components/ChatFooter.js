// components/ChatFooter.js
import React from 'react';

const ChatFooter = ({
  selectedFile,
  handleFileChange,
  handleUpload,
  loading,
}) => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 flex justify-center items-center p-6 bg-[#FAF1E4]">
      <div className="flex items-center space-x-2 w-full max-w-5xl">
        <label
          htmlFor="file-upload"
          className="cursor-pointer text-gray-700 font-semibold py-2 px-4 rounded-l-full shadow hover:bg-gray-100 flex-1 text-center flex items-center justify-center"
          style={{
            height: '54px',
            backgroundColor: '#FAF1E4',
            border: '2px solid #435334',
          }}
        >
          {selectedFile ? selectedFile.name : 'Selecione uma imagem'}
        </label>
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
        <button
          onClick={handleUpload}
          className="bg-[#435334] hover:bg-green-700 text-white font-bold rounded-r-full px-6 shadow-lg flex items-center justify-center"
          disabled={loading}
          style={{ width: '54px', height: '54px' }}
        >
          {loading ? (
            <svg
              className="animate-spin h-6 w-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              ></path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          )}
        </button>
      </div>
    </footer>
  );
};

export default ChatFooter;
