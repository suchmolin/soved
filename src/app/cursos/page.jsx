import Image from "next/image";

export default function CursosPage() {
  return (
    <div className="flex flex-col justify-center items-center py-20">
      <div className="relative w-[400px] aspect-square rounded-full overflow-hidden">
        <Image
          src="/img/cursosprev.png"
          objectFit="cover"
          layout="fill"
          alt="cursosprev"
        />
      </div>
      <h2 className="text-5xl font-bold text-[#0315ae] text-center mb-2">
        Bienvenidos a SOVED
      </h2>
      <p className="text-gray-600 text-2xl">
        Próximamente estaremos compartiendo información de nuestros cursos a
        realizar.
      </p>
    </div>
  );
}
