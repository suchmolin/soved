import Image from "next/image";

export default function PrimerosCongresos() {
  return (
    <div className="w-full pt-10 flex justify-center">
      <div className="w-10/12 pb-20 border-b border-gray-300">
        <h2 className="text-5xl text-center text-[#0315ae] mb-10 font-bold">
          PRIMEROS CONGRESOS
        </h2>
        <div className="flex w-full gap-5 justify-center">
          <div className=" w-[500px] min-h-[400px] rounded-lg shadow-xl overflow-hidden ">
            <div className="relative w-full h-[400px]">
              <Image
                src="/img/congreso1.png"
                objectFit="cover"
                layout="fill"
                alt="primer evento 2008"
              />
            </div>
            <div className="w-full px-4 py-4">
              <p>
                I Congreso: 20 y 21Junio 2008 con Invitados Internacionales,
                nombrados Miembros Honorarios en Asamblea a los Drs. Claudio
                Navarrete, Raúl Cañada, Guido Villagomez, Claudio Teixeira.
              </p>
            </div>
          </div>
          <div className=" w-[500px] min-h-[400px] rounded-lg shadow-xl overflow-hidden ">
            <div className="relative w-full h-[400px]">
              <Image
                src="/img/congreso2.png"
                objectFit="cover"
                layout="fill"
                alt="primer evento 2008"
              />
            </div>
            <div className="w-full px-4 py-4">
              <p>
                II Congreso: Junio 2009 Actividad Científico Académica de
                excelente calidad, respaldada con la experticia y trayectoria de
                invitados internacionales: Dres. Galeano, Hebert Burgos, Luis
                Carlos Sabahg; Irwing Waxman, Claudio Teixeria, Albis Hani,
                Valdomino.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
