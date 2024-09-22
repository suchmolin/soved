import Image from "next/image";

export default function TarjetaActualidad() {
  return (
    <a
      href="#"
      className="relative w-[300px] min-h-[550px] rounded-xl overflow-hidden flex flex-col bg-white shadow-2xl hover:scale-[102%] transition-all duration-300"
    >
      <div className="relative w-full aspect-square">
        <Image
          className="rounded-xl"
          src="/img/actualidad.png"
          objectFit="cover"
          layout="fill"
          alt="ruta"
        />
      </div>
      <div className="flex flex-col justify-center px-5 py-5 ">
        <h3 className="text-start text-3xl text-[#1630BE] font-bold mb-5">
          Ruta al Congreso SOVED 2024
        </h3>
        <p className="">
          Le invitamos a conocer la información más importante sobre este...
        </p>
        <p className="absolute bottom-3 text-[#1630BE] font-bold">
          Leer mas {">>"}
        </p>
      </div>
    </a>
  );
}
