import ColomboVenezolano from "@/components/ColomboVenezolano/page";
import Diplomado from "@/components/Diplomado/page";
import Eventos2008 from "@/components/Eventos2008/page";
import HeaderSoved from "@/components/HeaderSoved/page";
import NavBar from "@/components/NavBar/page";
import NuestraHistoriaSoves from "@/components/NuestraHistoriaSoves/page";
import PrimerosCongresos from "@/components/PrimerosCongresos/page";
import { Navbar } from "flowbite-react";

export default function SovedPage() {
  return (
    <main className="w-full font-[Roboto]">
      <NavBar />
      <HeaderSoved />
      <NuestraHistoriaSoves />
      <Eventos2008 />
      <PrimerosCongresos />
      <Diplomado />
      <ColomboVenezolano />
    </main>
  );
}
