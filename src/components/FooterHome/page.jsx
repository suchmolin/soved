export default function FooterHome() {
  return (
    <div className="w-full h-[100px] bg-[#1630BE] text-white flex flex-col items-center justify-center">
      <h2 className="text-xs sm:text-xl">
        Copyright © 2024 Sociedad Venezolana de Ensocopia Digestiva
      </h2>
      <h3 className="text-xs sm:text-xl flex gap-2">
        Desarrollado por:{" "}
        <a href="#" className="hover:underline">
          YouSeven
        </a>
      </h3>
    </div>
  );
}
