import { FaCheck } from "react-icons/fa";
export default function HagaseMienbro() {
  return (
    <div className="relative w-full h-[700px] flex justify-center items-center">
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
      <div className="w-10/12 flex justify-center items-center">
        <div className="w-6/12 flex flex-col justify-center">
          <h2 className="text-[#12116e] text-5xl font-bold pl-10 pr-36 mb-20">
            Hágase miembro de la SVG y disfrute de sus beneficios
          </h2>
          <p className="text-xl pr-20 pl-10 text-gray-600 text-justify mb-10">
            Para los miembros de nuestra sociedad existen un conjunto de
            ventajas y oportunidades que representan un gran valor para toda la
            comunidad:
          </p>
          <ul className="text-xl text-gray-600 pl-10 mb-10">
            <li className="flex gap-2 items-center">
              {" "}
              <FaCheck className="text-[#12116e]" /> Artículos de interés
            </li>
            <li className="flex gap-2 items-center">
              {" "}
              <FaCheck className="text-[#12116e]" />
              Descuentos especiales para eventos
            </li>
            <li className="flex gap-2 items-center">
              {" "}
              <FaCheck className="text-[#12116e]" />
              Descuentos especiales para eventos
            </li>
          </ul>
          <div className="h-[60px] flex items-end pl-10">
            <a
              href="#"
              className="py-3 px-7 rounded-full bg-[#12116e] text-white text-base w-fit hover:shadow-xl hover:mb-3 hover:bg-[#12116e]/90 transition-all duration-300"
            >
              MÁS INFORMACIÓN SOBRE MEMBRESÍAS
            </a>
          </div>
        </div>
        <div className="w-6/12 flex justify-center items-center">
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
