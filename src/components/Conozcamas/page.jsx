"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

export default function Conozcamas() {
  return (
    <div className="w-full md:h-[600px] bg-[#e9eff9] flex justify-center py-10 md:py-0">
      <div className="w-11/12 sm:w-10/12 h-full flex flex-col md:flex-row">
        <div className="md:w-5/12 h-full flex justify-center items-center">
          <div className="relative rounded-[40px] w-[500px] h-[400px] overflow-hidden">
            <Image
              src="/img/carousel1.jpg"
              objectFit="cover"
              layout="fill"
              alt="doctora"
            />
          </div>
        </div>
        <div className="md:w-7/12 flex flex-col justify-center md:pl-20 mt-10 md:mt-0">
          <Fade triggerOnce direction="up">
            <h2 className="text-4xl text-[#1630BE] font-bold mb-10 text-center md:text-start">
              Conozca más sobre nosotros
            </h2>
          </Fade>

          <Fade triggerOnce direction="up">
            <p className="sm:text-lg text-justify mb-10">
              La Sociedad Venezolana de Gastroenterología es una Asociación
              Médica Científica sin fines de lucro, dedicada a la promoción y
              difusión de la Gastroenterología dentro de un marco de compromiso
              social y de responsabilidad en el desarrollo de la especialidad,
              con impacto en la salud de la comunidad, que propicia el
              intercambio con instituciones Nacionales e Internacionales.
            </p>
          </Fade>
          <div className="h-[60px] flex items-end justify-center md:justify-start">
            <a
              href="#"
              className="py-3 px-7 rounded-full bg-[#1630BE] text-white text-xl w-fit hover:shadow-xl hover:mb-3 hover:bg-[#1630BE]/90 transition-all duration-300"
            >
              SABER MÁS
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
