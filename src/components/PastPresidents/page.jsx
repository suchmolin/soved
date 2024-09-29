import Image from "next/image";

export default function PastPresidents() {
  const data = [
    {
      img: "/img/perfil.jpg",
      period: "2007 - 2009",
      name: "Dr. Raul Monserat",
    },
    { img: "/img/perfil.jpg", period: "2009 - 2011", name: "Dra. Rosa Rangel" },
    {
      img: "/img/perfil.jpg",
      period: "2011 - 2013",
      name: "Dr. Juan Carlos Gonzalez",
    },
    { img: "/img/perfil.jpg", period: "2013 - 2015", name: "Dr. Denny Castro" },
    { img: "/img/perfil.jpg", period: "2015 - 2017", name: "Dr. Ramón Piñero" },
    {
      img: "/img/perfil.jpg",
      period: "2017 - 2019",
      name: "Dr. Dervis Bandres",
    },
    {
      img: "/img/perfil.jpg",
      period: "2019 - 2021",
      name: "Dra. Ana Yuraima Montilla",
    },
  ];
  return (
    <div className="w-full pt-10 flex justify-center">
      <div className="w-10/12 pb-20 border-b border-gray-300 flex flex-col items-center">
        <h2 className="text-5xl text-center text-[#0315ae] mb-10 font-bold">
          Presidentes Pasados
        </h2>
        <div className="flex gap-7 justify-center items-center py-5 flex-wrap">
          {data.map((item, i) => (
            <div key={`pastpres${i}`}>
              <div className="flex flex-col items-center justify-center text-center  cursor-pointer hover:scale-105 transition-all duration-300">
                <p className="text-[#0315ae] font-bold mb-1">{item.name}</p>
                <div className="relative w-[200px] aspect-square rounded-full overflow-hidden">
                  <Image
                    src={item.img}
                    objectFit="cover"
                    layout="fill"
                    alt="president"
                  />
                </div>
                <p className="text-gray-600">
                  Presidente de SOVED <br /> {item.period}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
