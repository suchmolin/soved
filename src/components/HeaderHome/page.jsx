"use client";
import { Carousel } from "flowbite-react";

import SliderItemHome from "../SliderItemHome/page";

export default function HeaderHome() {
  return (
    <div className="w-full h-[700px] pt-2">
      <Carousel>
        <SliderItemHome bg="bg-[url('/img/headerHome.jpg')]" />
        <SliderItemHome bg="bg-[url('/img/headerHome2.jpg')]" />
      </Carousel>
    </div>
  );
}
