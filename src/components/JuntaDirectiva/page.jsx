import Image from "next/image";

export default function JuntaDirectiva() {
  const data = [
    { img: "/img/perfil.jpg", name: "doctor", cargo: "Presidente" },
    { img: "/img/perfil.jpg", name: "doctora", cargo: "Tesorera" },
    { img: "/img/perfil.jpg", name: "doctor", cargo: "Secretario" },
    { img: "/img/perfil.jpg", name: "doctora", cargo: "Directiva" },
    { img: "/img/perfil.jpg", name: "doctor", cargo: "Directiva" },
    { img: "/img/perfil.jpg", name: "doctora", cargo: "Directiva" },
  ];
  return (
    <div className="w-full pt-10 flex justify-center">
      <div className="w-10/12 pb-20 border-b border-gray-300 flex flex-col items-center">
        <h2 className="text-5xl text-center text-[#0315ae] mb-10 font-bold">
          Junta Directiva
        </h2>
        <div className="flex gap-7 justify-center items-center py-5 flex-wrap">
          {data.map((item, i) => (
            <div key={`pastpres${i}`} className="max-w-[250px]">
              <div className="flex flex-col items-center justify-center text-center  cursor-pointer hover:scale-105 transition-all duration-300">
                <div className="relative w-[200px] aspect-square rounded-full overflow-hidden">
                  <Image
                    src={item.img}
                    objectFit="cover"
                    layout="fill"
                    alt="president"
                  />
                </div>
                <p className="text-gray-600">
                  {item.cargo} de la Sociedad Venezolana de Endoscopia Digestiva{" "}
                  <br /> 2024 - 2026
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
