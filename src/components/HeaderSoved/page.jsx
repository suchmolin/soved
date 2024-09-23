"use client";
import Image from "next/image";
import { Bounce, Fade } from "react-awesome-reveal";
import { FaPlus } from "react-icons/fa";

export default function HeaderSoved() {
  return (
    <div className="w-full flex  -mt-5">
      <div className="relative w-5/12 min-h-[700px] flex flex-col justify-center pl-20">
        <h2 className="text-[#1630BE] text-8xl font-bold">NUESTA HISTORIA</h2>
        <div className="h-[60px] flex items-end justify-center sm:justify-start">
          <a
            href="#"
            className="py-3 px-7 rounded-full bg-[#1630BE] text-white text-xl w-fit hover:shadow-xl hover:mb-3 hover:bg-[#1630BE]/90 transition-all duration-300"
          >
            Saber más
          </a>
        </div>
        <Bounce direction="left" triggerOnce className="absolute top-10 left-0">
          <FaPlus className="hidden sm:block text-8xl text-[#1630BE]/40" />
        </Bounce>
        <Fade direction="up" triggerOnce className="absolute top-40 right-0 ">
          <FaPlus className="hidden sm:block text-5xl text-[#1630BE]" />
        </Fade>
      </div>
      <div className="w-7/12 flex items-center justify-center">
        <div className="flex justify-center items-center p-2 border-l-4 border-r-4 border-[#1630BE] rounded-full">
          <div className="relative w-[500px] aspect-square rounded-full overflow-hidden">
            <Image
              src="/img/nuestraHistoria.png"
              objectFit="cover"
              layout="fill"
              alt="Nuestra historia"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
