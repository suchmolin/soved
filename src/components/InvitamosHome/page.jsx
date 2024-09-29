import Image from "next/image";

export default function InvitamosHome() {
  return (
    <div className="relative w-full h-[500px] flex items-center">
      <div className="custom-shape-divider-top-1726799180 custom-shape-divider-top-1726799181 z-10">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
            className="shape-fill shape-fill1"
          ></path>
        </svg>
      </div>
      <Image
        src="/img/invitamos.jpg"
        objectFit="cover"
        objectPosition="left"
        layout="fill"
        alt="invitamos"
      />
      <div className="md:w-5/12 lg:w-6/12 flex flex-col md:justify-center ml-10 sm:ml-10">
        <h2 className="sombraTexto text-5xl sm:text-7xl text-white drop-shadow-xl font-bold">
          Le invitamos a publicar en la revista GEN
        </h2>
        <div className="h-[80px] flex items-end z-10">
          <a
            href="#"
            className="py-3 px-7 rounded-full bg-[#0315ae] text-white text-xl w-fit hover:shadow-xl hover:mb-3 hover:bg-[#0315ae]/90 transition-all duration-300"
          >
            Más informacion
          </a>
        </div>
      </div>
    </div>
  );
}
