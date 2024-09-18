import Link from "next/link";
import { CiMail } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";

export default function NavBar() {
  return (
    <>
      <nav className="relative w-full h-[80px] flex justify-between items-center shadow-md bg-[#12116e] text-white">
        <p className="flex gap-2 px-10">
          <CiMail />
          infosovegastro@gmail.com ☎ (0212) 9916757 – (0212) 9912660{" "}
        </p>
        <ul className="h-full flex gap-7 justify-center items-center px-10 text-lg pt-1">
          <li className="hover:bg-[#00b1ab] h-full flex items-center px-4">
            <Link href="#">Inicio</Link>
          </li>
          <li className="hover:bg-[#00b1ab] h-full flex items-center px-4">
            <Link href="#">SOVED</Link>
          </li>
          <li className="hover:bg-[#00b1ab] h-full flex items-center px-4">
            <Link href="#">Membresía</Link>
          </li>
          <li className="hover:bg-[#00b1ab] h-full flex items-center px-4">
            <Link href="#">Contacto</Link>
          </li>
        </ul>
        <div className="flex gap-5 px-10 text-2xl">
          <a href="#" className="hover:scale-110 transition-all duration-300">
            <IoLogoInstagram />
          </a>
          <a href="#" className="hover:scale-110 transition-all duration-300">
            <FaYoutube />
          </a>
        </div>
      </nav>
      <div className="relative h-[30px] w-full -mt-1">
        <div class="custom-shape-divider-top-1726626453">
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
      </div>
    </>
  );
}
