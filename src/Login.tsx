import "./App.css";
import { QrCode } from "lucide-react";

const Login = () => {
  return (
    <>
      <div className=" bg-white flex">
        <section className="h-screen w-[50%] flex justify-center items-center">
          <main className="flex flex-col gap-2 ">
            <div className="flex items-center justify-center mr-5">
            <QrCode 
            className="text-[#684557] "
            size={64} />
            </div>
            <h1 className="font-semibold text-3xl pt-4">Get Started</h1>
            <h4 className="text-black/50">
              Welcome to SnapQR - Let's create your account
            </h4>
            <div className="bg-[#68455775] h-0.5 rounded-md w-96 my-5"></div>

            <h2>Email</h2>
            <input
              type="email"
              className="rounded-md bg-transparent p-2 border border-[#d6d2b5] focus:outline-none focus:border-[#684557] hover:border-[#684557] shadow-sm focus:shadow transition duration-100"
              placeholder="Digite aqui seu e-mail"
            />

            <h2>Senha</h2>
            <input
              type="password"
              className="rounded-md bg-transparent p-2 border mb-4 border-[#d6d2b5] focus:outline-none focus:border-[#684557] hover:border-[#684557] shadow-sm focus:shadow transition duration-100"
              placeholder="Digite aqui sua senha"
            />

            <button 
            className="flex items-center justify-center gap-1 py-2 px-5 rounded-md mt-2 duration-200 text-sm bg-gradient-to-r from-[#2e1b25] to-[#684557]  text-white cursor-pointer hover:brightness-110"
            >Sign Up</button>
            <p className="text-black/50 text-center">Já tem uma conta? <a href="#" className="text-[#181818] transition duration-100 hover:text-black hover:underline hover:transition hover:duration-300">Entre aqui</a></p>
          </main>

        </section>
        <section className="bg-[#684557] h-screen w-[50%] rounded-l-4xl"></section>
      </div>
    </>
  );
};

export default Login;
