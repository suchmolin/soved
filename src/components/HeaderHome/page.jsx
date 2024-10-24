"use client";
import { Carousel } from "flowbite-react";

import SliderItemHome from "../SliderItemHome/page";

export default function HeaderHome() {
  return (
    <div className="w-full h-[700px]">
      <Carousel className="-mt-2" pauseOnHover>
        <SliderItemHome
          bg="bg-[url('/img/curso-endoscopia-via-digestiva-1.jpg')]"
          titulo="SOVED"
          titulo2="SOMOS TODOS"
          titulo3="Le damos la bienvenida al sitio oficial de la Sociedad venezolana de Endoscopia Digestiva SOVED"
          boton="Conoce más"
          href="/soved"
        />
      </Carousel>
    </div>
  );
}
