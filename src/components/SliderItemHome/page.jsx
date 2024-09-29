import { Bounce, Fade } from "react-awesome-reveal";
import { FaPlus } from "react-icons/fa";

export default function SliderItemHome({
  bg,
  titulo,
  titulo2,
  titulo3,
  boton,
  href,
}) {
  return (
    <div
      className={`w-full min-h-[700px] ${bg} bg-no-repeat bg-cover  bg-center`}
    >
      <div className="relative h-[500px] w-5/12 flex flex-col justify-center sm:justify-end text-[#0315ae] sm:ml-20 md:ml-24 gap-3">
        <Fade direction="up" triggerOnce>
          <h1 className="text-5xl sm:text-7xl font-extrabold text-center sm:text-start drop-shadow-xl">
            {titulo} <br /> {titulo2}
          </h1>
        </Fade>
        <Fade direction="up" triggerOnce>
          <p className="text-2xl sm:text-2xl text-white drop-shadow-lg">
            {titulo3}
          </p>
        </Fade>
        <div className="h-[60px] flex items-end justify-center sm:justify-start">
          <a
            href={href}
            className="py-3 px-7 rounded-full bg-[#0315ae] text-white text-xl w-fit hover:shadow-xl hover:mb-3 hover:bg-[#0315ae]/90 transition-all duration-300"
          >
            {boton}
          </a>
        </div>
        <Bounce direction="left" triggerOnce className="absolute top-10 left-0">
          <FaPlus className="hidden sm:block text-8xl text-[#0315ae]/40" />
        </Bounce>
        <Fade direction="up" triggerOnce className="absolute top-40 right-0 ">
          <FaPlus className="hidden sm:block text-5xl text-[#0315ae]" />
        </Fade>
      </div>
    </div>
  );
}
