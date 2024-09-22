import { FaCheck } from "react-icons/fa";
export default function HagaseMienbro() {
  return (
    <div className="relative w-full lg:h-[700px] flex justify-center items-center py-10">
      <div class="custom-shape-divider-top-1726799180">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="w-10/12 flex flex-col md:flex-row justify-center items-center">
        <div className="md:w-6/12 flex flex-col justify-center">
          <h2 className="text-[#1630BE] text-4xl lg:text-5xl font-bold sm:pl-10 xl:pr-36 mb-20">
            Hágase miembro de la SVG y disfrute de sus beneficios
          </h2>
          <p className="text-xl sm:pr-20 sm:pl-10 text-gray-600 text-justify mb-10">
            Para los miembros de nuestra sociedad existen un conjunto de
            ventajas y oportunidades que representan un gran valor para toda la
            comunidad:
          </p>
          <ul className="text-xl text-gray-600 sm:pl-10 mb-10">
            <li className="flex gap-2 items-center">
              {" "}
              <FaCheck className="text-[#1630BE]" /> Artículos de interés
            </li>
            <li className="flex gap-2 items-center">
              {" "}
              <FaCheck className="text-[#1630BE]" />
              Descuentos especiales para eventos
            </li>
            <li className="flex gap-2 items-center">
              {" "}
              <FaCheck className="text-[#1630BE]" />
              Descuentos especiales para eventos
            </li>
          </ul>
          <div className="h-[60px] flex items-end justify-center sm:justify-start sm:pl-10">
            <a
              href="#"
              className="py-3 px-7 rounded-full bg-[#1630BE] text-white text-xs sm:text-base w-fit hover:shadow-xl hover:mb-3 hover:bg-[#1630BE]/90 transition-all duration-300"
            >
              MÁS INFORMACIÓN SOBRE MEMBRESÍAS
            </a>
          </div>
        </div>
        <div className="md:w-6/12 flex justify-center items-center pt-10 md:pt-0">
          <video
            className="w-[550px] aspect-square"
            src="/img/Web-ata-cuadrado.mp4"
            autoPlay
            muted
            loop
          ></video>
        </div>
      </div>
    </div>
  );
}
