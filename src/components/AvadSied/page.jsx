import Image from "next/image";

/* eslint-disable @next/next/no-img-element */
export default function AvadSied() {
  return (
    <div className="w-full pt-10 flex justify-center">
      <div className="w-10/12 pb-20 border-b border-gray-300 flex flex-col items-center">
        <div className="w-full flex flex-col justify-center ">
          <h2 className="text-5xl text-center text-[#0315ae] mb-10 font-bold">
            Aval SIED un hecho consolidado.
          </h2>
          <p className="text-xl text-gray-600">
            En el Congreso Panamericano de Chile 2008 se introduce carta de
            solicitud de Membresía a la SIED, cumpliendo con los requisitos
            requeridos para ello; sin embargo, en asamblea ordinaria con todos
            los Miembros Venezuela representado por la Sociedad Venezolana de
            Gastroenterología, se opone rotundamente a ello y se dispone
            nuevamente introducir recaudos que avalen nuestra Sociedad, se
            cumple con ese requisito en el marco de una reunión ordinaria SIED
            en Chicago en el marco DDW 2009 quedando como punto de agenda para
            la siguiente Asamblea Ordinaria en el Congreso Panamericano en
            Guayaquil; en el Marco del mencionado Congreso en Asamblea Ordinaria
            se Adjudica a SOVED la Membresía SIED, con este logro nuestra
            Sociedad se fortalece y consolida otro pilar; considerando que
            sentar bases sólidas en el marco jurídico / Gerencial Administrativo
            / Científico Académico, como un todo dirigido a sus miembros. Es un
            trabajo arduo pero con un equipo cohesionado, perseverando día a
            día, con fallas y correctivos manteniendo siempre la directriz en
            los miembros que la constituyen, buscando identidad propia. Un
            estilo diferente de estímulo para mantener la atención de sus
            miembros en armonía con la expectativa y el deseo del aprendizaje y
            reaprendizaje que es obligante en una técnica diversificada
            creciente, innovadora y dinámica como lo es la Endoscopia Digestiva.
          </p>
        </div>
        <div className="relative w-[700px] h-[200px]">
          <Image
            src="/img/avalsied.png"
            objectFit="contain"
            layout="fill"
            alt="1er encuentro colombo venezolano"
          />
        </div>
      </div>
    </div>
  );
}
