import Image from "next/image";

export default function SocialMenu() {
  return (
    <div className="fixed bottom-5 right-2 flex flex-col gap-2 items-center justify-center">
      <a
        href="https://www.youtube.com/channel/UCW24NwkA_8_8VJYxgYCLV1w"
        className="rounded-full shadow-2xl bg-white/50 p-2 hover:scale-105 transition-all duration-300"
        aria-label="youtube"
      >
        <div className="relative w-[35px] aspect-square">
          <Image
            src="/img/youtubeicon.png"
            objectFit="contain"
            layout="fill"
            alt="youtube icon"
          />
        </div>
      </a>
      <a
        href="https://www.instagram.com/soved_oficial?igsh=MTR6YnRyZWVrdGx6eQ=="
        className="rounded-full shadow-2xl bg-white/50 w-[50px] aspect-square hover:scale-105 transition-all duration-300 flex items-center justify-center"
        aria-label="instagram icon"
      >
        <div className="relative w-[55px] aspect-square">
          <Image
            src="/img/isntagramicon.webp"
            objectFit="contain"
            layout="fill"
            alt="instagram icon"
          />
        </div>
      </a>
      <a
        href="https://wa.me/584242600460"
        className="rounded-full shadow-2xl bg-white/50 p-2 hover:scale-105 transition-all duration-300"
        aria-label="youtube icon"
      >
        <div className="relative w-[35px] aspect-square">
          <Image
            src="/img/whatsappicon.webp"
            objectFit="contain"
            layout="fill"
            alt="whatsapp icon"
          />
        </div>
      </a>
    </div>
  );
}
