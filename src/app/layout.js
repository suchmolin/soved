import "./globals.css";

export const metadata = {
  title: "SOVED",
  description: "Sociedad Venezolana de Endoscopia Digestiva",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
