import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaGithub, FaLinkedin, FaLocationArrow } from "react-icons/fa6";
import MagicButtonIcons from "./ui/MagicButtonIcons";

const Hero = () => {
  return (
    <div className="pb-20 pt-14 md:pt-36 lg:pt-36 xl:pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.02]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Construyendo UI/UX mágicos con Next.js y TailwindCSS
          </p>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-2xl lg:text-6xl"
            words="Transformando Conceptos en Experiencias de Usuario Innovadoras"
          />
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hola, soy Adrián Racovita, un{" "}
            <span className="text-bold">desarrollador front-end</span> con
            experiencia desarrollando aplicaciones con React.js y Next.js. Te
            animo a <span className="italic">"trastear"</span> con las
            animaciones de mi portfolio y conocerme más.
          </p>
          <div className="flex gap-3">
            <a href="#sobremi">
              <MagicButton
                title="Acerca de mí"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            <a href="https://github.com/adrianRacovitaJSX" target="_blank">
              <MagicButtonIcons icon={<FaGithub />} position="right" otherClasses="z-50" />
            </a>
            <a
              href="https://www.linkedin.com/in/adri%C3%A1n-liviu-racovita/"
              target="_blank"
            >
              <MagicButtonIcons icon={<FaLinkedin />} position="right" otherClasses="z-50" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
