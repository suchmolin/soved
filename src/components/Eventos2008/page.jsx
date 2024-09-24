import Image from "next/image";

export default function Eventos2008() {
  return (
    <div className="w-full pt-10 flex justify-center">
      <div className="w-10/12 pb-20 border-b border-gray-300">
        <h2 className="text-5xl text-center text-[#1630BE] mb-10 font-bold">
          PRIMEROS EVENTOS 2008
        </h2>
        <div className="flex w-full gap-5">
          <div className=" w-[350px] min-h-[400px] rounded-lg shadow-xl overflow-hidden ">
            <div className="relative w-full h-[400px]">
              <Image
                src="/img/evento2008.png"
                objectFit="cover"
                layout="fill"
                alt="primer evento 2008"
              />
            </div>
            <div className="w-full px-4 py-4">
              <p>
                I Curso de Emergencias en Gastroenterología realizado en la
                Ciudad de Maracaibo Abril 2008.
              </p>
            </div>
          </div>
          <div className=" w-[350px] min-h-[400px] rounded-lg shadow-xl overflow-hidden ">
            <div className="relative w-full h-[400px]">
              <Image
                src="/img/evento2008-2.png"
                objectFit="cover"
                layout="fill"
                alt="primer evento 2008"
              />
            </div>
            <div className="w-full px-4 py-4">
              <p>
                I Encuentro de Endoscopistas Venezolana en Noviembre 2008 y en
                el marco de la misma se crea el Primer Capítulo; Capítulo SOVED
                Zulia, presidido por el Dr. Vinicio León, Vicepresidente Dra.
                Miroslava Grillo; Secretario Dra. Lisbeth Prieto; Tesorera Dra.
                Irene García; Vocales Dra. Viviana Velazco, Dr. José Acosta.
                Seguidamente Diplomado de Colonoscopia Terapéutica.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5 justify-center">
            <div className="w-[400px] h-[250px] relative rounded-2xl overflow-hidden">
              <Image
                src="/img/evento2008-3.png"
                objectFit="cover"
                layout="fill"
                alt="primer evento"
              />
            </div>
            <div className="w-[400px] h-[250px] relative ">
              <Image
                src="/img/imagen1.jpg"
                objectFit="contain"
                layout="fill"
                alt="primer evento"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
