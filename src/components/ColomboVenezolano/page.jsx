import { Carousel } from "flowbite-react";

/* eslint-disable @next/next/no-img-element */
export default function ColomboVenezolano() {
  return (
    <div className="w-full pt-10 flex justify-center">
      <div className="w-10/12 pb-20 border-b border-gray-300">
        <h2 className="text-5xl text-center text-[#1630BE] mb-10 font-bold">
          I ENCUENTRO COLOMBO - VENEZOLANO
        </h2>
        <div className="relative flex w-full gap-5 justify-center">
          <div className="w-full ">
            <Carousel>
              <img
                src="/img/colombovenezolano.png"
                alt="encuentro colombo venezolano"
              />
              <img
                src="/img/colombovenezolano2.png"
                alt="encuentro colombo venezolano"
              />
              <img
                src="/img/colombovenezolano3.png"
                alt="encuentro colombo venezolano"
              />
              <img
                src="/img/colombovenezolano4.png"
                alt="encuentro colombo venezolano"
              />
              <img
                src="/img/colombovenezolano5.png"
                alt="encuentro colombo venezolano"
              />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}
