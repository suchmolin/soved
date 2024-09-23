import HeaderSoved from "@/components/HeaderSoved/page";
import NavBar from "@/components/NavBar/page";
import { Navbar } from "flowbite-react";

export default function SovedPage() {
  return (
    <main className="w-full font-[Roboto]">
      <NavBar />
      <HeaderSoved />
    </main>
  );
}
