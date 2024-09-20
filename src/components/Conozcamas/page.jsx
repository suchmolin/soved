import Image from "next/image";

export default function Conozcamas() {
  return (
    <div className="w-full h-[600px] bg-[#e9eff9] flex justify-center">
      <div className="w-10/12 h-full flex">
        <div className="w-5/12 h-full flex justify-center items-center">
          <div className="relative rounded-[40px] w-[500px] h-[400px] overflow-hidden">
            <Image
              src="/img/carousel1.jpg"
              objectFit="cover"
              layout="fill"
              alt="doctora"
            />
          </div>
        </div>
        <div className="w-7/12 flex flex-col justify-center pl-20 pr-32">
          <h2 className="text-4xl text-[#12116e] font-bold mb-10">
            Conozca más sobre nosotros
          </h2>
          <p className="text-lg text-justify mb-10">
            La Sociedad Venezolana de Gastroenterología es una Asociación Médica
            Científica sin fines de lucro, dedicada a la promoción y difusión de
            la Gastroenterología dentro de un marco de compromiso social y de
            responsabilidad en el desarrollo de la especialidad, con impacto en
            la salud de la comunidad, que propicia el intercambio con
            instituciones Nacionales e Internacionales.
          </p>
          <div className="h-[60px] flex items-end">
            <a
              href="#"
              className="py-3 px-7 rounded-full bg-[#12116e] text-white text-xl w-fit hover:shadow-xl hover:mb-3 hover:bg-[#12116e]/90 transition-all duration-300"
            >
              SABER MÁS
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
