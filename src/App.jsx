/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import {
  Book,
  Github,
  Instagram,
  Linkedin,
  Moon,
  SunMedium,
  User,
} from "lucide-react";
import "./index.css";

function App() {
  const [isLightMode, setIsLightMode] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const toggleTheme = () => {
    setIsLightMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsLightMode(!prefersDarkMode);

    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 640px)").matches);
    };

    handleResize(); // Check initially
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`flex flex-col items-center min-h-[100vh] py-3 gap-6 justify-center  ${
        isLightMode
          ? isMobile
            ? "bg-mobile-light"
            : "light-bg"
          : isMobile
          ? "bg-mobile-dark"
          : "dark-bg"
      }`}
    >
      <div className="flex items-center justify-center flex-col w-full gap-2">
        <LazyLoadImage
          src="https://allmylinks.s3.amazonaws.com/avatar.webp"
          effect="blur"
          className={`rounded-full size-36 object-cover border-2 ${
            isLightMode ? "border-black/70" : "border-white/70"
          } `}
        />
        <p
          className={` font-semibold text-xl mt-2 -mb-2 ${
            isLightMode ? "text-black" : "text-white"
          }`}
        >
          Lucas Campos
        </p>
        <span
          className={` text-sm font-semibold ${
            isLightMode ? "text-black/50" : "text-white/50"
          }`}
        >
          @lucascmpos
        </span>
        <span
          className={` text-md font-semibold  ${
            isLightMode ? "text-black/70" : "text-white/70"
          }`}
        >
          💻 2 years of experience as Web Developer
          <br /> 🎓 Graduated in Information Security <br /> 🔧 Technician in
          Internet Computing <br /> 💼 Looking for new opportunities <br /> 💪
          Gym lover
        </span>
      </div>
      <div className="relative  m-1">
        <button
          onClick={toggleTheme}
          className={`w-16 h-6 rounded-full group  border-2 transition-all duration-300  backdrop-filter-none backdrop-blur-3xl flex items-center ${
            isLightMode
              ? "border-gray-500 bg-black/15 hover:border-blue-900 "
              : "border-white bg-white/15 hover:border-blue-400"
          }`}
        >
          <button
            className={`w-8 h-8 absolute transition-all duration-300  transform top-3 -translate-y-1/2 z-10  border-0 rounded-full flex justify-center items-center ${
              isLightMode
                ? "right-enter bg-black text-white group-hover:bg-blue-900 group-hover:text-yellow-400"
                : "left-enter bg-white text-black group-hover:bg-blue-400 group-hover:text-yellow-300"
            }`}
          >
            {isLightMode ? <Moon size={20} /> : <SunMedium size={20} />}
          </button>
        </button>
      </div>

      <div className="flex flex-col gap-3">
        <a
          href="https://lucascmpos-portfolio.vercel.app/"
          target="_blank"
          className={`py-3 group px-10 flex flex-row gap-2 justify-center rounded-lg border-2 ${
            isLightMode
              ? "bg-black/10 text-black border-black/40 hover:border-black"
              : "bg-white/10 text-white border-white/40 hover:border-white"
          }`}
        >
          <User className="group-hover:scale-110 group-hover:text-purple-700 transition-all  duration-300" />
          Portfolio
        </a>

        <a
          href="https://github.com/lucascmpos"
          target="_blank"
          className={`py-3 group px-10 flex flex-row gap-2 justify-center rounded-lg border-2 ${
            isLightMode
              ? "bg-black/10 text-black border-black/40 hover:border-black"
              : "bg-white/10 text-white border-white/40 hover:border-white"
          }`}
        >
          <Github className="group-hover:scale-110 group-hover:text-[#24292e] transition-all duration-300" />
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/lucas-campos81/"
          target="_blank"
          className={`py-3 group px-10 flex flex-row gap-2 justify-center rounded-lg border-2 ${
            isLightMode
              ? "bg-black/10 text-black border-black/40 hover:border-black"
              : "bg-white/10 text-white border-white/40 hover:border-white"
          }`}
        >
          <Linkedin className="group-hover:scale-110 group-hover:text-[#0e76a8] transition-all duration-300" />
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com/lucas.cmpos/"
          target="_blank"
          className={`py-3 group px-10 flex flex-row gap-2 justify-center rounded-lg border-2 ${
            isLightMode
              ? "bg-black/10 text-black border-black/40 hover:border-black"
              : "bg-white/10 text-white border-white/40 hover:border-white"
          }`}
        >
          <Instagram className="group-hover:scale-110 group-hover:text-[#C13584] transition-all duration-300" />
          Instagram
        </a>
        <button
          className={`py-3 group px-10 flex flex-row gap-2 justify-center rounded-lg border-2 ${
            isLightMode
              ? "bg-black/10 text-black border-black/40 hover:border-black"
              : "bg-white/10 text-white border-white/40 hover:border-white"
          }`}
        >
          <Book className="group-hover:scale-110 transition-all duration-300" />
          E-book (soon...)
        </button>
      </div>
      <h3
        className={`font-semibold ${isLightMode ? "text-black" : "text-white"}`}
      >
        Made by Lucas Campos
      </h3>
      <span
        className={`font-semibold text-sm ${
          isLightMode ? "text-black/50 " : "text-white/50"
        }`}
      >
        Acess{" "}
        <a
          href="https://github.com/lucascmpos/allmylinks"
          target="_blank"
          className={`underline  cursor-pointer ${
            isLightMode ? "hover:text-black" : "hover:text-white"
          }`}
        >
          here
        </a>{" "}
        this page repository.
      </span>
    </div>
  );
}

export default App;
