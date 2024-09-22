import Image from "next/image";

export default function VisitaInstagram() {
  return (
    <div className=" w-full min-h-[500px] bg-[#e9eff9] px-5 pb-10">
      <h2 className="text-[#1630BE] text-6xl text-center mb-20">Instagram</h2>
      <div className="w-full flex gap-4 justify-center flex-wrap">
        <div className="relative flex gap-4 ">
          <a
            href="#"
            className="relative w-[140px] sm:w-[180px] h-[140px] sm:h-[180px] hover:scale-[102%] transition-all duration-300 rounded-xl overflow-hidden"
          >
            <Image
              src="/img/instagram1.jpg"
              objectFit="cover"
              layout="fill"
              objectPosition="center"
              alt="instagram1"
            />
          </a>
          <a
            href="#"
            className="relative w-[140px] sm:w-[180px] h-[140px] sm:h-[180px] hover:scale-[102%] transition-all duration-300 rounded-xl overflow-hidden mt-10"
          >
            <Image
              src="/img/instagram2.jpg"
              objectFit="cover"
              layout="fill"
              objectPosition="center"
              alt="instagram2"
            />
          </a>
        </div>
        <div className="relative flex gap-4">
          <a
            href="#"
            className="relative w-[140px] sm:w-[180px] h-[140px] sm:h-[180px] hover:scale-[102%] transition-all duration-300 rounded-xl overflow-hidden"
          >
            <Image
              src="/img/instagram3.jpg"
              objectFit="cover"
              layout="fill"
              objectPosition="center"
              alt="instagram3"
            />
          </a>
          <a
            href="#"
            className="relative w-[140px] sm:w-[180px] h-[140px] sm:h-[180px] hover:scale-[102%] transition-all duration-300 rounded-xl overflow-hidden mt-10"
          >
            <Image
              src="/img/instagram4.jpg"
              objectFit="cover"
              layout="fill"
              objectPosition="center"
              alt="instagram4"
            />
          </a>
        </div>
        <div className="relative flex gap-4">
          <a
            href="#"
            className="relative w-[140px] sm:w-[180px] h-[140px] sm:h-[180px] hover:scale-[102%] transition-all duration-300 rounded-xl overflow-hidden"
          >
            <Image
              src="/img/instagram3.jpg"
              objectFit="cover"
              layout="fill"
              objectPosition="center"
              alt="instagram3"
            />
          </a>
          <a
            href="#"
            className="relative w-[140px] sm:w-[180px] h-[140px] sm:h-[180px] hover:scale-[102%] transition-all duration-300 rounded-xl overflow-hidden mt-10"
          >
            <Image
              src="/img/instagram4.jpg"
              objectFit="cover"
              layout="fill"
              objectPosition="center"
              alt="instagram4"
            />
          </a>
        </div>
      </div>
      <div className="h-[60px] flex items-end justify-center mt-20">
        <a
          href="https://www.instagram.com/soved_oficial?igsh=MTR6YnRyZWVrdGx6eQ=="
          className="text-lg py-3 px-7 rounded-full bg-[#1630BE] text-white sm:text-xl w-fit hover:shadow-xl hover:mb-3 hover:bg-[#1630BE]/90 transition-all duration-300"
        >
          VISITA PERFIL DE INSTAGRAM
        </a>
      </div>
    </div>
  );
}
