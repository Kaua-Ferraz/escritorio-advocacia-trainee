import Image from "next/image";

export default function About() {
  return (
    <section className="bg-[#f9f5eb] flex flex-col items-center justify-center px-4 py-12 text-center">
 
      <div className="inline-block border-2 border-[#5c4738] bg-[#4a3b30] text-white px-8 py-2 rounded-full text-lg font-medium shadow-md mb-6">
        Quem somos?
      </div>


      <h2 className="text-3xl md:text-5xl font-extrabold text-black tracking-wide uppercase mb-8">
        CARVALHO & ASSOCIADOS
      </h2>

  
      <div className="relative w-full max-w-2xl aspect-[4/3] rounded-lg overflow-hidden shadow-xl mb-8">
        <Image
          src="/images/escritorio.png"
          alt="Fachada Carvalho & Associados"
          fill
          className="object-cover"
          priority
        />
      </div>


      <p className="text-lg md:text-xl font-bold text-black max-w-xl">
        Escritório de advocacia focado em direito trabalhista e do consumidor
      </p>
    </section>
  );
}