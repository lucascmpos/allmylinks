// @ts-nocheck
import { useEffect, useState } from "react";
import avatar from "./assets/avatar.png";
import {
  Book,
  Github,
  Instagram,
  Linkedin,
  MoonStar,
  StickyNote,
  SunMedium,
} from "lucide-react";
import "./index.css";

function App() {
  const [isLightMode, setIsLightMode] = useState(true);

  const toggleTheme = () => {
    setIsLightMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsLightMode(!prefersDarkMode);
  }, []);

  return (
    <div
      className={`flex flex-col w-screen items-center gap-10 justify-center h-screen ${
        isLightMode ? "light-bg" : "dark-bg"
      } sm:${isLightMode ? "bg-mobile-light" : "bg-mobile-dark"}`}
    >
      <div className="flex items-center justify-center flex-col gap-2">
        <img
          src={avatar}
          className={`rounded-full   size-32 object-cover border-2 ${
            isLightMode ? "border-black/70" : "border-white/70"
          } `}
        />
        <span
          className={` font-semibold ${
            isLightMode ? "text-black" : "text-white"
          }`}
        >
          @lucascmpos
        </span>
        <span
          className={` text-xl font-bold ${
            isLightMode ? "text-black" : "text-white"
          }`}
        >
          Web Developer 💻
        </span>
      </div>
      <div className="relative  m-1">
        <button
          onClick={toggleTheme}
          className={`w-16 h-6 rounded-full group  border-2 transition-all duration-300  backdrop-filter-none backdrop-blur-3xl flex items-center ${
            isLightMode
              ? "border-gray-500 bg-black/15 hover:border-white "
              : "border-white bg-white/15 hover:border-black"
          }`}
        >
          <button
            className={`w-8 h-8 absolute transition-all duration-300  transform top-3 -translate-y-1/2 z-10  border-0 rounded-full flex justify-center items-center ${
              isLightMode
                ? "right-enter bg-black text-white group-hover:bg-white group-hover:text-black"
                : "left-enter bg-white text-black group-hover:bg-black group-hover:text-white"
            }`}
          >
            {isLightMode ? <MoonStar size={20} /> : <SunMedium size={20} />}
          </button>
        </button>
      </div>

      <div className="flex flex-col gap-3">
        <a
          href="https://lucascmpos-portfolio.vercel.app/"
          target="_blank"
          className={`py-3 px-10 flex flex-row gap-2 justify-center rounded-lg border-2 ${
            isLightMode
              ? "bg-black/10 text-black border-black/40 hover:border-black"
              : "bg-white/10 text-white border-white/40 hover:border-white"
          }`}
        >
          <StickyNote />
          Portfolio
        </a>

        <a
          href="https://github.com/lucascmpos"
          target="_blank"
          className={`py-3 px-10 flex flex-row gap-2 justify-center rounded-lg border-2 ${
            isLightMode
              ? "bg-black/10 text-black border-black/40 hover:border-black"
              : "bg-white/10 text-white border-white/40 hover:border-white"
          }`}
        >
          <Github />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/lucas-campos81/"
          target="_blank"
          className={`py-3 px-10 flex flex-row gap-2 justify-center rounded-lg border-2 ${
            isLightMode
              ? "bg-black/10 text-black border-black/40 hover:border-black"
              : "bg-white/10 text-white border-white/40 hover:border-white"
          }`}
        >
          <Linkedin />
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com/lucas.cmpos/"
          target="_blank"
          className={`py-3 px-10 flex flex-row gap-2 justify-center rounded-lg border-2 ${
            isLightMode
              ? "bg-black/10 text-black border-black/40 hover:border-black"
              : "bg-white/10 text-white border-white/40 hover:border-white"
          }`}
        >
          <Instagram />
          Instagram
        </a>
        <button
          className={`py-3 px-10 flex flex-row gap-2 justify-center rounded-lg border-2 ${
            isLightMode
              ? "bg-black/10 text-black border-black/40 hover:border-black"
              : "bg-white/10 text-white border-white/40 hover:border-white"
          }`}
        >
          <Book />
          E-book (soon...)
        </button>
      </div>
      <h3
        className={`font-semibold ${isLightMode ? "text-black" : "text-white"}`}
      >
        Feito por Lucas Campos
      </h3>
      <span
        className={`font-semibold text-sm ${
          isLightMode ? "text-black/50 " : "text-white/50"
        }`}
      >
        Acesse{" "}
        <a
          href="https://github.com/lucascmpos/allmylinks"
          target="_blank"
          className={`underline  cursor-pointer ${
            isLightMode ? "hover:text-black" : "hover:text-white"
          }`}
        >
          aqui
        </a>{" "}
        o repositório dessa página.
      </span>
    </div>
  );
}

export default App;
