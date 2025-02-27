import "./App.css";
import { QrCode } from "lucide-react";
import { Link } from "react-router-dom";

const Register = () => {

  return (
    <>
      <div className=" bg-white md:flex">
        <section className="h-screen  md:w-[50%] flex justify-center items-center px-8">
          <main className="flex flex-col gap-2 ">
            <div className="flex items-center justify-center">
              <QrCode className="text-[#684557] " size={64} />
            </div>
            <h1 className="text-center md:text-left font-semibold text-2xl md:text-3xl pt-4">
              Vamos começar
            </h1>
            <h4 className="text-black/50 text-center md:text-left">
              Bem-vindo ao SnapQR - Vamos criar sua conta!
            </h4>
            <div className="bg-[#68455775] h-0.5 rounded-md  my-5"></div>

            <label htmlFor="e-mail" className="text-md">
              E-mail
            </label>
            <input
              id="e-mail"
              type="email"
              className="rounded-md bg-transparent p-2 border border-[#d6d2b5] focus:outline-none focus:border-[#684557] hover:border-[#684557] shadow-sm focus:shadow transition duration-100"
              placeholder="seuemail@gmail.com"
            />

            <label htmlFor="password" className="text-md">
              Senha
            </label>
            <input
              id="password"
              type="password"
              className="rounded-md bg-transparent p-2 border border-[#d6d2b5] focus:outline-none focus:border-[#684557] hover:border-[#684557] shadow-sm focus:shadow transition duration-100"
            />

            <label htmlFor="confirm-password" className="text-md">
              Confirme sua senha
            </label>
            <input
              id="confirm-password"
              type="password"
              className="rounded-md bg-transparent p-2 border mb-4 border-[#d6d2b5] focus:outline-none focus:border-[#684557] hover:border-[#684557] shadow-sm focus:shadow transition duration-100"
            />

            <button className="flex items-center justify-center gap-1 py-2 px-5 rounded-md mt-2 duration-200 text-sm bg-gradient-to-r from-[#2e1b25] to-[#684557]  text-white cursor-pointer hover:brightness-110">
              Criar conta
            </button>
            <p className="text-black/50 text-center">
              Já tem uma conta?{" "}
              <Link to="/login" className="text-[#181818] transition duration-100 hover:text-black hover:underline hover:transition hover:duration-300">Entre aqui</Link>
            </p>
          </main>
        </section>
        <section className="hidden md:flex bg-[#684557] h-screen w-[50%] rounded-l-4xl"></section>
      </div>
    </>
  );
};

export default Register;
