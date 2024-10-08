"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

export default function JuntaHome() {
  return (
    <div className="relative w-full md:h-[650px] flex justify-center items-center bg-[#0315ae] pb-20">
      <div className="custom-shape-divider-top-1726798444">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="w-10/12 flex flex-col md:flex-row justify-center items-center">
        <div className="md:w-5/12 h-full flex items-center pt-20">
          <div className="relative w-[300px] md:w-[400px] aspect-square rounded-full border-8 border-white">
            <Image
              src="/img/sovedlogo.png"
              layout="fill"
              objectFit="cover"
              alt="junta directiva"
            />
          </div>
        </div>
        <div className="md:w-7/12 h-full flex flex-col justify-center items-center pt-10 md:pt-20">
          <Fade triggerOnce direction="up">
            <h2 className="text-3xl lg:text-4xl text-white font-bold tracking-widest mb-10 text-center md:text-start">
              Junta directiva 2024-2026
            </h2>
          </Fade>
          <Fade triggerOnce direction="up">
            <p className="text-lg text-white text-justify md:px-5 lg:px-20 mb-10">
              La Sociedad Venezolana de Endoscopia DIsgestiva está liderada por
              un equipo de profesionales comprometidos con el avance de la
              especialidad en nuestro país. Nuestra actual Junta Directiva,
              elegida para el periodo 2024-2026, trabaja incansablemente para
              promover la excelencia en la práctica clínica, la investigación y
              la educación en gastroenterología.
            </p>
          </Fade>
          <div className="h-[60px] flex items-end">
            <a
              href="#"
              className="py-3 px-7 rounded-full bg-white shadow-md shadow-red-400 text-[#0315ae] text-base w-fit hover:shadow-lg hover:mb-3 hover:bg-[#00b1ab]/90 transition-all duration-300 font-bold text-center"
            >
              MÁS INFORMACION SOBRE LA JUNTA DIRECTIVA 2024-2026
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
