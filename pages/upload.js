// pages/upload.js
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ChatHeader from '../components/ChatHeader';
import ChatFooter from '../components/ChatFooter';

export default function UploadPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [aiResponse, setAiResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Redireciona o usuário para a tela de login se não estiver autenticado
  useEffect(() => {
    if (status === 'loading') {
      return;
    }

    if (status === 'unauthenticated') {
      router.push('/');
    }
  }, [status, router]);

  // Lida com a seleção do arquivo de imagem
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setAiResponse('');
    setError(null);

    // Atualiza o URL de preview para a imagem selecionada
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewUrl(imageUrl);
    } else {
      setPreviewUrl(null);
    }
  };

  // Faz o upload da imagem para o backend e processa a resposta
  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Por favor, selecione uma imagem para enviar.');
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append('image', selectedFile);

      const response = await fetch('http://localhost:5001/api/identify', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || 'Erro ao enviar a imagem para o backend'
        );
      }

      const data = await response.json();
      setAiResponse(data.description); // Atualiza a resposta da IA
    } catch (error) {
      console.error('Erro no upload da imagem:', error);
      setError(
        error.message ||
          'Houve um problema ao processar a imagem. Tente novamente.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    session && (
      <div className="min-h-screen bg-[#FAF1E4] flex flex-col text-gray-900">
        {/* Cabeçalho */}
        <ChatHeader />

        {/* Conteúdo Principal */}
        <main className="flex-1 overflow-auto p-6">
          {/* Marca d'água ou mensagem inicial */}
          {!previewUrl && !aiResponse && (
            <div className="flex flex-col items-center justify-center h-full">
              <h2 className="text-6xl font-bold opacity-25 text-green-700">
                NatureLens
              </h2>
            </div>
          )}

          {/* Preview centralizado antes da resposta */}
          {previewUrl && !aiResponse && (
            <div className="flex justify-center items-center h-full">
              <img
                src={previewUrl}
                alt="Preview"
                className="w-auto max-h-80 object-contain rounded-lg shadow-md"
              />
            </div>
          )}

          {/* Área de conversa com a IA após a resposta */}
          {aiResponse && (
            <div className="flex flex-col items-start w-full max-w-5xl mx-auto">
              <div
                className="flex flex-col md:flex-row justify-between items-start w-full flex-wrap gap-6 md:gap-12"
              >
                {/* Resposta da IA à esquerda */}
                <div className="flex items-start flex-1 mb-6 md:mb-0">
                  <div className="flex items-start space-x-4">
                    {/* Avatar com sigla "NL" */}
                    <div className="w-12 h-12 bg-[#39462C] text-white font-bold flex items-center justify-center rounded-full flex-shrink-0">
                      NL
                    </div>
                    {/* Balão de Resposta */}
                    <div className="bg-[#FFEED6] p-4 rounded-lg shadow-md w-full max-w-2xl">
                      <h2 className="text-lg font-bold text-black">
                        NatureLens Responde:
                      </h2>
                      <p className="mt-2 text-black whitespace-pre-wrap">
                        {aiResponse}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Preview da Imagem à direita após a resposta */}
                <div className="flex items-start flex-shrink-0">
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="w-full md:w-auto max-h-80 object-contain rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Exibição de Erro */}
          {error && (
            <div className="mt-4 text-red-500">
              <p>{error}</p>
            </div>
          )}
        </main>

        {/* Área de Upload */}
        <ChatFooter
          selectedFile={selectedFile}
          handleFileChange={handleFileChange}
          handleUpload={handleUpload}
          loading={loading}
        />
      </div>
    )
  );
}
