import AvadSied from "@/components/AvadSied/page";
import ColomboVenezolano from "@/components/ColomboVenezolano/page";
import Diplomado from "@/components/Diplomado/page";
import Eventos2008 from "@/components/Eventos2008/page";
import HeaderSoved from "@/components/HeaderSoved/page";
import JuntaDirectiva from "@/components/JuntaDirectiva/page";

import NuestraHistoriaSoves from "@/components/NuestraHistoriaSoves/page";
import PastPresidents from "@/components/PastPresidents/page";
import PrimerosCongresos from "@/components/PrimerosCongresos/page";
import UltimosEventos from "@/components/UltimosEventos/page";

export default function SovedPage() {
  return (
    <main className="w-full font-[Roboto]">
      <HeaderSoved />
      <NuestraHistoriaSoves />
      <Eventos2008 />
      <PrimerosCongresos />
      <Diplomado />
      <ColomboVenezolano />
      <AvadSied />
      <UltimosEventos />
      <div className="w-full pt-10 flex justify-center">
        <div className="w-10/12 pb-20 border-b border-gray-300 flex flex-col items-center">
          <h2 className="text-5xl text-center text-[#0315ae] font-bold">
            “La vida sólo rinde cuando somos capaces de mirar el pasado como
            enseñanza, vivir vigorosamente el presente y asomarnos al futuro con
            esperanza”
          </h2>
        </div>
      </div>
      <PastPresidents />
      <JuntaDirectiva />
    </main>
  );
}
