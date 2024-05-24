import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import Grid from "@/components/Grid";
import { FaCode, FaDev, FaUser } from "react-icons/fa6";
import { HiEmojiHappy } from "react-icons/hi";
import Experiencia from "@/components/Experiencia";
import Proyectos from "@/components/Proyectos";
import Clientes from "@/components/Clientes";
import Proceso from "@/components/Proceso";
import { MdWorkHistory } from "react-icons/md";
import Footer from "@/components/Footer";
import { IoConstruct } from "react-icons/io5";
import { IoIosContact } from "react-icons/io";
import { PlaceholdersAndVanishInput } from "@/components/global/newsletter";
export default function Home() {
  const placeholders = [
    "Introduce tu correo electrónico",
    "Email para recibir novedades",
    "¿Dónde quieres recibir las noticias?",
    "Tu correo más habitual",
    "¿Dónde te envío las novedades?",
  ];

  return (
    <main className="relative bg-black-100 flex justify-center items-center overflow-clip flex-col mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <h1 className="text-white">
          <FloatingNav
            navItems={[
              {
                name: "Inicio",
                link: "/",
                icon: <FaHome />,
              },
              {
                name: "Sobre Mí",
                link: "#sobremi",
                icon: <FaUser />,
              },
              {
                name: "Proyectos",
                link: "#proyectos",
                icon: <FaCode />,
              },
              {
                name: "Testimonios",
                link: "#testimonios",
                icon: <HiEmojiHappy />,
              },
              {
                name: "Experiencia",
                link: "#experiencia",
                icon: <MdWorkHistory />,
              },
              {
                name: "Proceso",
                link: "#proceso",
                icon: <IoConstruct />,
              },
              {
                name: "Contacto",
                link: "#contacto",
                icon: <IoIosContact />,
              },
            ]}
          />
          <Hero />
          <Grid />
          <Proyectos />
          <Clientes />
          <Experiencia />
          <Proceso />
          <div className="h-[20rem] flex flex-col justify-center  items-center px-4">
            <h1 className=" heading mb-10 sm:mb-10 text-center dark:text-white text-black font-bold">
              ¡Únete a mi <span className="text-purple">comunidad</span> tech!
            </h1>
            <p className="text-white-200  mb-10 text-center">
              {" "}
              Recibe en tu bandeja de entrada las últimas noticias, tutoriales y
              recursos sobre <br />programación, desarrollo web, inteligencia
              artificial, ciberseguridad y mucho más.
            </p>
            <PlaceholdersAndVanishInput placeholders={placeholders} />
          </div>
          <Footer />
        </h1>
      </div>
    </main>
  );
}
