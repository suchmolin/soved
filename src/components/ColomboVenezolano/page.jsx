import Image from "next/image";

/* eslint-disable @next/next/no-img-element */
export default function ColomboVenezolano() {
  return (
    <div className="w-full pt-10 flex justify-center">
      <div className="w-10/12 pb-20 border-b border-gray-300">
        <div className="w-full flex justify-center ">
          <div className="w-6/12">
            <h2 className="text-5xl text-center text-[#0315ae] mb-10 font-bold">
              I ENCUENTRO COLOMBO - VENEZOLANO
            </h2>
            <p className="text-xl text-gray-600">
              “I Encuentro Colombo – Venezolano de Endoscopia Digestiva” con la
              particularidad de ser el primer curso de perfeccionamiento de
              endoscopia terapéutica en modelos animales en Venezuela,
              liderizado por SOVEDZULIA. El Dr. Vinicio León, se dio a la tarea
              de cristalizar este proyecto, creando un modelo con estilo propio
              adaptando al interior del mismo estómago de porcino dando la
              oportunidad a gastroenterólogos del país realizar practica
              endoscópica{" "}
            </p>
          </div>
          <div className="relative w-6/12 aspect-square">
            <Image
              src="/img/colombovenezolano.png"
              objectFit="contain"
              layout="fill"
              alt="1er encuentro colombo venezolano"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
