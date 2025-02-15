import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import InputField from './components/InputField';
import QRCodeGenerator from './components/QRCodeGenerator';
import Buttons from './components/Buttons';

function App() {
  const [text, setText] = useState('');
  const [showQRCode, setShowQRCode] = useState(false);
  const [showText, setShowText] = useState(true);
  const [showGenerateButton, setShowGenerateButton] = useState(true);

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
  };

  return (
    <div
      className="sm:gap-2 px-5 xl:px-0 h-screen flex justify-center items-center flex-col xl:gap-20"
      style={{
        background: "url('/wave.svg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Header showText={showText}/>

      <div className="inline-flex items-center flex-col p-4 gap-3 rounded-md">
        <InputField text={text} setText={setText} />
        <QRCodeGenerator text={text} showQRCode={showQRCode} />
        <Buttons
          text={text}
          showQRCode={showQRCode}
          showGenerateButton={showGenerateButton}
          handleGenerate={handleGenerate}
          handleGenerateOther={handleGenerateOther}
        />
      </div>
    </div>
  );
}

export default App;
