/* eslint-disable @next/next/no-img-element */
import { Carousel } from "flowbite-react";

export default function AliadosComerciales() {
  return (
    <div className="w-full min-h-[700px] flex flex-col items-center bg-[#] pt-10">
      <h2 className="text-[#0315ae] text-4xl text-center mb-10 font-bold">
        Aliados Comerciales
      </h2>
      <div className="w-10/12 rounded-lg overflow-hidden shadow-lg h-[500px]">
        <Carousel>
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
            alt="..."
          />
          <img
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
            alt="..."
          />
        </Carousel>
      </div>
    </div>
  );
}
