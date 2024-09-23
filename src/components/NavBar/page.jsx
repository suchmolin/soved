"use client";
import Link from "next/link";
import { CiMail } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { Dropdown } from "flowbite-react";
import { IoMenu } from "react-icons/io5";

export default function NavBar() {
  const menuResp = <IoMenu className="text-3xl" />;
  return (
    <>
      <nav className="relative w-full h-[100px] sm:h-[80px] flex flex-col sm:flex-row sm:justify-between items-center shadow-md bg-[#1630BE] text-white">
        <p className="flex gap-2 sm:px-10 justify-center sm:justify-start items-center text-sm py-3 sm:py-0 text-center sm:text-start">
          <CiMail />
          info@jpyeventos.com ☎ 0212 - 7611939 – 0424 - 2600460{" "}
        </p>
        <ul className="h-full hidden lg:flex gap-7 justify-center items-center px-10 xl:text-lg pt-1">
          <li className="hover:bg-[#00b1ab] h-full flex items-center px-4">
            <Link href="/">Inicio</Link>
          </li>
          <li className="hover:bg-[#00b1ab] h-full flex items-center px-4">
            <Link href="/soved">SOVED</Link>
          </li>
          <li className="hover:bg-[#00b1ab] h-full flex items-center px-4">
            <Link href="#">Membresía</Link>
          </li>
          <li className="hover:bg-[#00b1ab] h-full flex items-center px-4">
            <Link href="#">Contacto</Link>
          </li>
        </ul>
        <div className="flex gap-5 px-10 text-2xl items-center">
          <div className="block lg:hidden">
            <Dropdown
              label={menuResp}
              inline
              className=" bg-[#1630BE] text-white"
            >
              <Dropdown.Item className="text-white">Inicio</Dropdown.Item>
              <Dropdown.Item className="text-white">SOVED</Dropdown.Item>
              <Dropdown.Item className="text-white">Membresía</Dropdown.Item>
              <Dropdown.Item className="text-white">Contacto</Dropdown.Item>
            </Dropdown>
          </div>
          {/*
          <a
            href="https://www.instagram.com/soved_oficial?igsh=MTR6YnRyZWVrdGx6eQ=="
            className="hover:scale-110 transition-all duration-300"
          >
            <IoLogoInstagram />
          </a>
          <a
            href="https://www.youtube.com/channel/UCW24NwkA_8_8VJYxgYCLV1w"
            className="hover:scale-110 transition-all duration-300"
          >
            <FaYoutube />
          </a>
          */}
        </div>
      </nav>
      <div className="relative h-[30px] w-full -mt-1">
        <div className="custom-shape-divider-top-1726626453">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
}
