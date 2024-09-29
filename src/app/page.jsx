import ActualidadHome from "@/components/ActualidadHome/page";
import AliadosComerciales from "@/components/AliadosComerciales/page";
import Conozcamas from "@/components/Conozcamas/page";

import HagaseMienbro from "@/components/HagaseMienbro/page";
import HeaderHome from "@/components/HeaderHome/page";
import InvitamosHome from "@/components/InvitamosHome/page";
import JuntaHome from "@/components/JuntaHome/page";

import VisitaInstagram from "@/components/VisitaInstagram/page";

export default function Home() {
  return (
    <main className="font-[Roboto]">
      <HeaderHome />
      <Conozcamas />
      <JuntaHome />
      <HagaseMienbro />
      <InvitamosHome />
      <AliadosComerciales />
      {/*<ActualidadHome />*/}

      <VisitaInstagram />

      {/*
       */}
    </main>
  );
}
