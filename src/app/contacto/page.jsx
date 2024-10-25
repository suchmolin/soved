"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { TiHomeOutline } from "react-icons/ti";
import { MdPhonelinkRing } from "react-icons/md";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { TbSocial } from "react-icons/tb";
import { RiYoutubeLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function ContactoPage() {
  return (
    <div className="relative w-full min-h-[calc(100vh-180px)] flex justify-center items-center py-10">
      <div className="w-10/12 flex flex-col-reverse md:flex-row justify-center items-center">
        <div className="md:w-7/12 h-full flex flex-col justify-center text-center md:text-start">
          <h1 className="text-6xl font-bold text-[#0315ae]"> Contactanos</h1>
          <p className="text-2xl mb-7">
            Puedes comunicarte con nosotros a traves de estos medios
          </p>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col md:flex-row gap-5 items-center">
              <TiHomeOutline className="text-8xl text-[#00b1ab]" />
              <div className="w-8/12 flex flex-col ">
                <h2 className="text-3xl text-[#0315ae] font-bold">
                  Nuestras oficinas
                </h2>
                <p className="text-2xl text-gray-600">
                  direccion de la oficina por proporcionarla 42 a, Caracas,
                  Venezuela
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5 items-center">
              <MdPhonelinkRing className="text-8xl text-[#00b1ab]" />
              <div className="w-8/12 flex flex-col ">
                <h2 className="text-3xl text-[#0315ae] font-bold">
                  Números telefónicos
                </h2>
                <p className="text-2xl text-gray-600">0212 - 7611939</p>
                <p className="text-2xl text-gray-600">0424 - 2600460</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5 items-center">
              <MdOutlineAlternateEmail className="text-8xl text-[#00b1ab]" />
              <div className="w-8/12 flex flex-col ">
                <h2 className="text-3xl text-[#0315ae] font-bold">
                  Correos Electrónicos
                </h2>
                <p className="text-2xl text-gray-600">soved.ofc@gmail.com</p>
                <p className="text-2xl text-gray-600">info@ajpyeventos.com</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-5 items-center">
              <TbSocial className="text-8xl text-[#00b1ab]" />
              <div className="w-8/12 flex flex-col ">
                <h2 className="text-3xl text-[#0315ae] font-bold">
                  Redes Sociales
                </h2>
                <div className="flex gap-3 items-center">
                  <a
                    href="https://www.youtube.com/channel/UCW24NwkA_8_8VJYxgYCLV1w"
                    className="linkredes"
                  >
                    <RiYoutubeLine className="text-5xl text-[#00b1ab] hover:text-[#0315ae] transition-all duration-300" />
                  </a>
                  <a
                    href="https://www.instagram.com/soved_oficial?igsh=MTR6YnRyZWVrdGx6eQ=="
                    className="linkredes"
                  >
                    <FaInstagram className="text-4xl text-[#00b1ab] hover:text-[#0315ae] transition-all duration-300" />
                  </a>
                  <a href="https://wa.me/584242600460" className="linkredes">
                    <FaWhatsapp className="text-4xl text-[#00b1ab] hover:text-[#0315ae] transition-all duration-300" />
                  </a>
                  <a href="https://x.com/soved_oficial" className="linkredes">
                    <FaXTwitter className="text-4xl text-[#00b1ab] hover:text-[#0315ae] transition-all duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-5/12 h-full flex items-center md:pt-20">
          <div className="relative w-[300px] md:w-[500px] aspect-square rounded-full bg-[#0315ae]">
            <Image
              src="/img/sovedlogo1.png"
              layout="fill"
              objectFit="cover"
              alt="junta directiva"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
