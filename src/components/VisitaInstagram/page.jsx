import Image from "next/image";

export default function VisitaInstagram() {
  const posts = [
    {
      img: "/img/igpost.png",
      href: "https://www.instagram.com/p/DAV_WImubEi/",
    },
    {
      img: "/img/igpost2.png",
      href: "https://www.instagram.com/p/C_lpjw_P9mM/",
    },
    {
      img: "/img/igpost3.png",
      href: "https://www.instagram.com/p/C9XvMJLu9Z0/",
    },
    {
      img: "/img/igpost4.png",
      href: "https://www.instagram.com/p/C9XSQk5uBHi/",
    },
  ];
  return (
    <div className=" w-full min-h-[500px] bg-[#e9eff9] px-5 pb-10">
      <h2 className="text-[#0315ae] text-6xl text-center mb-20">Instagram</h2>
      <div className="w-full flex gap-4 justify-center flex-wrap">
        {posts.map((post, index) => (
          <a
            key={`isntagramPost${index}`}
            href={post.href}
            className="relative w-[300px] h-[380px] rounded-lg overflow-hidden hover:scale-105 duration-300 transition-all"
          >
            <Image
              src={post.img}
              objectFit="cover"
              layout="fill"
              alt="instagram post"
            />
          </a>
        ))}
      </div>
      <div className="h-[60px] flex items-end justify-center mt-20">
        <a
          href="https://www.instagram.com/soved_oficial?igsh=MTR6YnRyZWVrdGx6eQ=="
          className="text-lg py-3 px-7 rounded-full bg-[#0315ae] text-white sm:text-xl w-fit hover:shadow-xl hover:mb-3 hover:bg-[#0315ae]/90 transition-all duration-300"
        >
          VISITA PERFIL DE INSTAGRAM
        </a>
      </div>
    </div>
  );
}
