import Conozcamas from "@/components/Conozcamas/page";
import HagaseMienbro from "@/components/HagaseMienbro/page";
import HeaderHome from "@/components/HeaderHome/page";
import JuntaHome from "@/components/JuntaHome/page";
import NavBar from "@/components/NavBar/page";

export default function Home() {
  return (
    <main className="font-[Roboto]">
      <NavBar />
      <HeaderHome />
      <Conozcamas />
      <JuntaHome />
      <HagaseMienbro />
    </main>
  );
}
