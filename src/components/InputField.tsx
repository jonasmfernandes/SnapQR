interface InputFieldProps {
    text: string;
    setText: (text: string) => void;
}

const InputField = ({ text, setText }: InputFieldProps) => {
    return (
        <input 
        type="text"
        className="rounded-md bg-white p-2 border border-[#d6d2b5] xl:w-[20vw]"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Digite ou cole o link aqui."
        />
    )
} 

export default InputField;