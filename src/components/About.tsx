import Image from "next/image";
import AboutGallery from "./AboutGallery/AboutGallery";

export default function About() {
  return (
    <section
      id="quem-somos"
      className="relative z-20 -mt-0.5 isolate overflow-hidden bg-[#f9f5eb] px-4 pb-20 pt-12 text-center md:pb-24"
    >
      <Image
        src="/images/carvalho-associados-simbolo.svg"
        alt=""
        width={396}
        height={504}
        aria-hidden="true"
        className="pointer-events-none absolute -right-[16%] top-[5%] z-0 h-[92%] w-auto max-w-none object-contain opacity-20 sm:-right-[7%] md:-right-[2%]"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center justify-center">
        <div className="mb-6 inline-block rounded-full border-2 border-[#5c4738] bg-[#4a3b30] px-8 py-2 text-lg font-medium text-white shadow-md">
          Quem somos?
        </div>

        <h2 className="mb-10 text-3xl font-extrabold uppercase tracking-wide text-black md:mb-12 md:text-5xl">
          CARVALHO & ASSOCIADOS
        </h2>

        <div className="grid w-full items-center gap-10 text-left md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-14 lg:gap-20">
          <div className="order-1 space-y-5 text-base leading-relaxed text-[#302b29] sm:text-lg md:text-xl">
            <p>
              Na Carvalho &amp; Associados, acreditamos que cada pessoa merece
              compreender seus direitos e contar com orientação jurídica clara,
              próxima e responsável.
            </p>

            <p>
              Atuamos nas áreas do Direito Trabalhista e do Consumidor,
              oferecendo atendimento atento às particularidades de cada caso e
              buscando caminhos seguros para a defesa dos interesses de nossos
              clientes.
            </p>

            <p className="font-bold text-[#4a3b30]">
              Nosso compromisso é tornar o processo jurídico mais acessível,
              transparente e humano, do primeiro contato até a conclusão do
              atendimento.
            </p>
          </div>

          <div className="order-2 w-full">
            <AboutGallery />
          </div>
        </div>
      </div>
    </section>
  );
}
