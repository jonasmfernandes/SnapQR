import { QrCode } from 'lucide-react';

const Header = () => {
  return (
    <div className="flex flex-col gap-3 align-center items-center mb-5">
      <div className="flex items-center align-center text-[#684557]">
        <div className="mt-[7px]">
          <QrCode size={48} />
        </div>
        <h1 className="text-5xl font-bold text-[#684557]">SnapQR</h1>
      </div>

      <p className="w-[100%] sm:w-[80%] text-[#000000a5] xl:w-[50%] text-center">
        🚀 Seu negócio ainda não tem um QR Code? Você está perdendo clientes! 
        Profissionalize sua marca e facilite a vida dos seus clientes agora mesmo! 🔥📲
      </p>
    </div>
  );
};

export default Header;
