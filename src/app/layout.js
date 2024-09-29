import SocialMenu from "@/components/SocialMenu/page";
import "./globals.css";
import NavBar from "@/components/NavBar/page";
import FooterHome from "@/components/FooterHome/page";

export const metadata = {
  title: "SOVED",
  description: "Sociedad Venezolana de Endoscopia Digestiva",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="relative pb-[100px]">
        <NavBar />
        {children}
        <SocialMenu />
        <FooterHome />
      </body>
    </html>
  );
}
