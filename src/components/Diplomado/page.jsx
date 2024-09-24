import Image from "next/image";

export default function Diplomado() {
  return (
    <div className="w-full pt-10 flex justify-center">
      <div className="w-10/12 pb-20 border-b border-gray-300">
        <h2 className="text-5xl text-center text-[#1630BE] mb-10 font-bold">
          DIPLOMADOS EN ENDOSCOPIA DIGESTIVA
        </h2>
        <div className="flex w-full gap-5 justify-center">
          <div className=" w-[700px] min-h-[400px] rounded-lg shadow-xl overflow-hidden ">
            <div className="relative w-full h-[450px]">
              <Image
                src="/img/diplomado.png"
                objectFit="cover"
                layout="fill"
                alt="primer evento 2008"
              />
            </div>
            <div className="w-full px-4 py-4">
              <p>
                VI Diplomados de Endoscopia Digestiva desarrollados hasta la
                fecha, avalados por la División de Extensión de la UCV,
                organizados y dirigidos por académicos Drs. Ramón Piñero y Juan
                Carlos González, Jefes de las Cátedras de Gastroenterología de
                la Escuela Vargas y Luis Razetti. En forma regular y consecutiva
                se ha desarrollado el Diplomado de Endoscopia los 4 primeros
                meses del año en el Hospital Universitario de Caracas, actividad
                con alta demanda por el gremio de gastroenterólogos de
                Venezuela, a la fecha se han reentrenado 108 especialistas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
