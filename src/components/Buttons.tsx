interface ButtonsProps {
    text: string;
    showQRCode: boolean;
    showGenerateButton: boolean;
    handleGenerate: () => void;
    handleGenerateOther: () => void;
  }
  
  const isValidURL = (text: string) => {
    try {
      const url = new URL(text);
      return url.protocol === 'http:' || url.protocol === 'https:';
    } catch (_) {
      return false;
    }
  };
  
  const Buttons = ({ text, showQRCode, showGenerateButton, handleGenerate, handleGenerateOther }: ButtonsProps) => {
    return (
      <>
        {showGenerateButton && (
          <button
            onClick={handleGenerate}
            disabled={!isValidURL(text)}
            className={`flex items-center gap-1 py-2  px-[70px] md:px-33 rounded-md mt-2 duration-200
            ${isValidURL(text) ? 'bg-[#684557] text-white hover:bg-[#513443] cursor-pointer' : 'bg-[#b3b3a1] text-gray-300 cursor-not-allowed'}`}
          >
            Generate
          </button>
        )}
  
        {showQRCode && (
          <button
            onClick={handleGenerateOther}
            className="flex items-center gap-1 py-2 px-[34px] rounded-md mt-2 cursor-pointer border border-[#684557] bg-[#FFFFF2] text-[#684557] hover:bg-[#e2e2d1]"
          >
            Generate Other
          </button>
        )}
      </>
    );
  };
  
  export default Buttons;
  