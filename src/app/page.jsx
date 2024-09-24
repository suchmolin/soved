import ActualidadHome from "@/components/ActualidadHome/page";
import Conozcamas from "@/components/Conozcamas/page";
import FooterHome from "@/components/FooterHome/page";
import HagaseMienbro from "@/components/HagaseMienbro/page";
import HeaderHome from "@/components/HeaderHome/page";
import InvitamosHome from "@/components/InvitamosHome/page";
import JuntaHome from "@/components/JuntaHome/page";
import NavBar from "@/components/NavBar/page";

import VisitaInstagram from "@/components/VisitaInstagram/page";

export default function Home() {
  return (
    <main className="font-[Roboto]">
      <NavBar />
      <HeaderHome />
      <Conozcamas />
      <JuntaHome />
      <HagaseMienbro />
      <InvitamosHome />
      <ActualidadHome />
      <VisitaInstagram />

      <FooterHome />
      {/*
       */}
    </main>
  );
}
