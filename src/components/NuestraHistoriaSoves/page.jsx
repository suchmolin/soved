"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

export default function NuestraHistoriaSoves() {
  return (
    <div className="w-full flex items-center justify-center bg-[#e9eff9] pt-10 pb-20">
      <div className="w-10/12 flex gap-10  justify-center">
        <Fade direction="left" triggerOnce className="w-4/12">
          <div className="flex flex-col">
            <h2 className="text-3xl text-center text-[#1630BE] mb-3 font-bold">
              Misión
            </h2>
            <p className="text-justify">
              “Organización Civil Nacional de carácter científico y social que
              se constituye con la misión de agrupar a los especialistas, con
              interés en el estudio de la Endoscopia Digestiva, para promover la
              investigación y capacitación, con excelentes niveles de calidad,
              en la utilización de tecnología de punta. Así como promover
              intercambios profesionales entre sus miembros y con colegas de
              otros países”
            </p>
          </div>
        </Fade>
        <div className="relative w-[300px] aspect-square rounded-2xl overflow-hidden">
          <Image
            src="/img/imgNuestra.png"
            objectFit="cover"
            layout="fill"
            alt="nuestra historia image"
          />
        </div>
        <Fade direction="right" triggerOnce className="w-4/12">
          <div className=" flex flex-col">
            <h2 className="text-3xl text-center text-[#1630BE] mb-3 font-bold">
              Visión
            </h2>
            <p className="text-justify">
              “Ser la Sociedad líder de referencia nacional e internacional, por
              su calidad científica, académica e institucional en el área de la
              Endoscopia Digestiva venezolana”
            </p>
          </div>
        </Fade>
      </div>
    </div>
  );
}
