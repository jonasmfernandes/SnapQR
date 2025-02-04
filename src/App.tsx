import './App.css';
import { useState, useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { QrCode } from 'lucide-react';

const isValidURL = (text: string) => {
  try {
    const url = new URL(text);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch (_) {
    return false;
  }
};

function App() {
  const [text, setText] = useState('');
  const [showQRCode, setShowQRCode] = useState(false);
  const [showText, setShowText] = useState(true);
  const [showGenerateButton, setShowGenerateButton] = useState(true);  
  // const [urlValid, setUrlValid] = useState<boolean | null>(null);
  const qrRef = useRef<HTMLDivElement | null>(null);

  const downloadQRCode = () => {
    if (!qrRef.current) return;

    const canvas = qrRef.current.querySelector('canvas');
    if (canvas instanceof HTMLCanvasElement) {
      const url = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = url;
      link.download = 'qrcode.png';
      link.click();
    }
  };

  const handleGenerate = () => {
    setShowQRCode(true);
    setShowText(false);
    setShowGenerateButton(false); 
  };

  const handleGenerateOther = () => {
    setShowQRCode(false);
    setText('');
    setShowText(true);
    setShowGenerateButton(true);
    // setUrlValid(null);
  };

  // const checkURL = async (url: string) => {
  //   setShowGenerateButton(false);

  
  //   try {
  //     const response = await fetch('http://localhost:3000/verify-url', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ url })

  //     });

  //     const data = await response.json();
  //     setUrlValid(data.valid);
  //     setShowGenerateButton(true);
  //   } catch (error) {
  //     setUrlValid(false);
  //     setShowGenerateButton(true);
  //     console.error('Error checking URL:', error);
  //   }
  // };

  // const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const newText = e.target.value;
  //   setText(newText);

  //   if (isValidURL(newText)) {
  //     setShowGenerateButton(true);
  //     checkURL(newText);
  //   } else {
  //     setUrlValid(null);
  //     setShowGenerateButton(false);
  //   }
  // };

  return (
    <>
      <div
        className="sm:gap-2 px-5 xl:px-0 h-screen flex justify-center items-center flex-col xl:gap-20"
        style={{
          background: "url('/wave.svg')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col gap-3 align-center items-center mb-5">
          <div className="flex items-center align-center text-[#684557]">
            <div className="mt-[7px]">
            <QrCode size={48} />

            </div>
            <h1 className="text-5xl font-bold text-[#684557]">SnapQR</h1>
          </div>

          {showText && (
            <p className="w-[100%] sm:w-[80%] text-[#000000a5] xl:w-[50%] text-center">
              🚀 Seu negócio ainda não tem um QR Code? Você está perdendo clientes! Com um simples
              escaneamento, eles acessam seu cardápio, pagamento, redes sociais ou qualquer
              informação importante. Profissionalize sua marca e facilite a vida dos seus clientes
              agora mesmo! 🔥📲
            </p>
          )}
        </div>

        <div className="inline-flex items-center flex-col p-4 gap-3 rounded-md">
          <input
            type="text"
            className="rounded-md bg-white p-2 border border-[#d6d2b5] xl:w-[20vw]  "
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Digite ou cole o link aqui."
          />

          {/* {urlValid === false && (
            <p className="text-red-500">URL inválida! Por favor, verifique o link.</p>
          )} */}

          {showQRCode && isValidURL(text) && (
            <div ref={qrRef} className="mt-4">
              <QRCodeCanvas value={text} size={200} />
            </div>
          )}

          {/* {showGenerateButton && (
            <button
            onClick={handleGenerate}
            disabled={urlValid === false || !isValidURL(text)} 
            className={`flex items-center gap-1 py-2 px-5 rounded-md mt-2 duration-200
              ${urlValid === false || !isValidURL(text) ? 'bg-[#b3b3a1] text-gray-300 cursor-not-allowed' : 'bg-[#684557] text-white hover:bg-[#513443] cursor-pointer'}`}
          >
            Generate
          </button>
          )} */}

          {showGenerateButton && (
            <button
              onClick={handleGenerate}
              disabled={!isValidURL(text)}
              className={`flex items-center gap-1 py-2 px-5 rounded-md mt-2 duration-200
              ${isValidURL(text) ? 'bg-[#684557] text-white hover:bg-[#513443] cursor-pointer' : 'bg-[#b3b3a1] text-gray-300 cursor-not-allowed'}`}
            >
              Generate
            </button>
          )}


          {showQRCode && isValidURL(text) && (
            <button
              onClick={downloadQRCode}
              className="flex items-center gap-1 py-2 px-5 rounded-md mt-2 cursor-pointer bg-[#684557] text-white hover:bg-[#513443]"
            >
              Download QR Code
            </button>
          )}

          {showQRCode && (
            <button
              onClick={handleGenerateOther}
              className="flex items-center gap-1 py-2 px-5 rounded-md mt-2 cursor-pointer border border-[#684557] bg-[#FFFFF2] text-[#684557] hover:bg-[#e2e2d1]"
            >
              Generate Other
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
