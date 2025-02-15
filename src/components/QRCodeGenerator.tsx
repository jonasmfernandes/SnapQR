import { QRCodeCanvas } from 'qrcode.react';
import { useRef } from 'react';

interface QRCodeGeneratorProps {
  text: string;
  showQRCode: boolean;
}

const isValidURL = (text: string) => {
  try {
    const url = new URL(text);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch (_) {
    return false;
  }
};

const QRCodeGenerator = ({ text, showQRCode }: QRCodeGeneratorProps) => {
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
    <>
      {showQRCode && isValidURL(text) && (
        <div ref={qrRef} className="mt-4">
          <QRCodeCanvas value={text} size={200} />
        </div>
      )}
      {showQRCode && isValidURL(text) && (
        <button
          onClick={downloadQRCode}
          className="flex items-center gap-1 py-2 px-5 rounded-md mt-2 cursor-pointer bg-[#684557] text-white hover:bg-[#513443]"
        >
          Download QR Code
        </button>
      )}
    </>
  );
};

export default QRCodeGenerator;
