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

export default function Home() {
  
  return (
    <main className="relative bg-black-100 flex justify-center items-center overflow-clip flex-col mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <h1 className="text-white">
          <FloatingNav 
            navItems={[
              {
                name: 'Inicio',
                link: '/',
                icon: <FaHome />
              },
              {
                name: 'Sobre Mí',
                link: '#sobremi',
                icon: <FaUser />
              },
              {
                name: 'Proyectos',
                link: '#proyectos',
                icon: <FaCode />
              },
              {
                name: 'Testimonios',
                link: '#testimonios',
                icon: <HiEmojiHappy />
              },
              {
                name: 'Experiencia',
                link: '#experiencia',
                icon: <MdWorkHistory />
              },
              {
                name: 'Proceso',
                link: '#proceso',
                icon: <IoConstruct />
              },
            ]}
          />
          <Hero />
          <Grid />
          <Proyectos />
          <Clientes />
          <Experiencia />
          <Proceso />
          <Footer />
        </h1>
      </div>
    </main>
   );
}
