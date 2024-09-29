/* eslint-disable @next/next/no-img-element */
import { Carousel } from "flowbite-react";
import Image from "next/image";

export default function UltimosEventos() {
  const imgCarousel = [
    ["/img/ue1.jpg", "/img/ue2.jpg", "/img/ue3.jpg", "/img/ue4.jpg"],
    ["/img/ue5.jpg", "/img/ue6.jpg", "/img/ue7.jpg", "/img/ue8.jpg"],
    ["/img/ue9.jpg", "/img/ue10.jpg", "/img/ue11.jpg", "/img/ue12.jpg"],
    ["/img/ue13.jpg", "/img/ue14.jpg", "/img/ue15.jpg"],
  ];
  return (
    <div className="w-full pt-10 flex justify-center">
      <div className="w-10/12 pb-20 border-b border-gray-300 flex flex-col items-center">
        <h2 className="text-5xl text-center text-[#0315ae] mb-10 font-bold">
          Ultimos Eventos
        </h2>
        <div className=" relative w-full h-[300px] flex justify-center rounded-lg overflow-hidden">
          <Carousel pauseOnHover>
            {imgCarousel.map((cont, index) => (
              <div
                key={`imgCarousel${index}`}
                className="w-full h-full flex justify-center"
              >
                {cont.map((img, i) => (
                  <div
                    key={`img${i}`}
                    className="relative w-[300px] aspect-square"
                  >
                    <Image
                      src={img}
                      objectFit="cover"
                      layout="fill"
                      alt="imagen ultimos eventos"
                    />
                  </div>
                ))}
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
