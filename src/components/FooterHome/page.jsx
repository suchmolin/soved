export default function FooterHome() {
  return (
    <div className="absolute bottom-0 w-full h-[100px] bg-[#0315ae] text-white flex flex-col items-center justify-center">
      <h2 className="text-xs sm:text-xl">
        Copyright © 2024 Sociedad Venezolana de Ensocopia Digestiva
      </h2>
      <h3 className="text-xs sm:text-xl flex gap-2">
        Desarrollado por:{" "}
        <a href="#" className="hover:underline text-[#00b1ab] font-bold">
          YouSeven
        </a>
      </h3>
    </div>
  );
}
