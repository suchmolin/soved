import { Bounce, Fade } from "react-awesome-reveal";
import { FaPlus } from "react-icons/fa";

export default function SliderItemHome({ bg }) {
  return (
    <div
      className={`w-full min-h-[700px] ${bg} bg-no-repeat bg-cover  bg-right`}
    >
      <div className="relative h-[500px] w-fit flex flex-col justify-center sm:justify-end text-[#1630BE] sm:ml-20 md:ml-32 gap-3">
        <Fade direction="up" triggerOnce>
          <h1 className="text-5xl sm:text-7xl font-extrabold text-center sm:text-start">
            Sociedad <br /> Venezolana
          </h1>
        </Fade>
        <Fade direction="up" triggerOnce>
          <p className="text-4xl sm:text-5xl font bold text-center">
            de Endoscopia Digestiva
          </p>
        </Fade>
        <div className="h-[60px] flex items-end justify-center sm:justify-start">
          <a
            href="#"
            className="py-3 px-7 rounded-full bg-[#1630BE] text-white text-xl w-fit hover:shadow-xl hover:mb-3 hover:bg-[#1630BE]/90 transition-all duration-300"
          >
            Más informacion
          </a>
        </div>
        <Bounce direction="left" triggerOnce className="absolute top-10 left-0">
          <FaPlus className="hidden sm:block text-8xl text-[#1630BE]/40" />
        </Bounce>
      </div>
    </div>
  );
}
