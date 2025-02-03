import './App.css';
import { useState, useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';

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

  return (
    <div className="bg-[#f8f8f8] h-screen flex justify-center items-center">
      <div className="bg-[#1f1f1f] inline-flex items-center flex-col p-4 gap-3 rounded-md">
        <input
          type="text"
          className="rounded-md bg-white p-2"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Digite uma URL"
        />
        {isValidURL(text) && (
          <div ref={qrRef} className="mt-4">
            <QRCodeCanvas value={text} size={200} />
          </div>
        )}
        <button
          onClick={downloadQRCode}
          disabled={!isValidURL(text)}
          className={`flex items-center gap-1 py-2 px-5 rounded-md mt-2 
          ${isValidURL(text) ? 'bg-[#404040] text-white hover:bg-[#505050] cursor-pointer' : 'bg-gray-500 text-gray-300 cursor-not-allowed'}`}
        >
          Generate
        </button>
      </div>
    </div>
  );
}

export default App;
