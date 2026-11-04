import Image from "next/image";


const teamMembers = [
  {
    name: "João Popolo Neto",
    role: "Advogado OAB/SP 205.294",
    email: "popolo@carvalho.adv.br",
    image: "/images/joao.png", 
  },
  {
    name: "Good Saulman",
    role: "Advogado OAB/SP 252.341",
    email: "bomsalhomem1@carvalho.adv.br",
    image: "/images/saul.png",
  },
  {
    name: "Marta Oliveira",
    role: "Advogada OAB/SP 242.676",
    email: "martaolinda@carvalho.adv.br",
    image: "/images/marta.png",
  },
];

export default function Team() {
  return (
    <section
      id="nossa-equipe"
      className="relative isolate overflow-hidden bg-[#241e17] px-4 py-20 md:py-24"
    >
      <Image
        src="/images/carvalho-associados-simbolo.svg"
        alt=""
        width={396}
        height={504}
        aria-hidden="true"
        className="pointer-events-none absolute -left-[16%] top-0 z-0 h-full w-auto max-w-none object-contain opacity-20 sm:-left-[7%] md:left-[2%]"
      />

      <div className="relative z-10 flex w-full flex-col items-center">
        <div className="mb-12 inline-block rounded-full border-2 border-[#5c4738] bg-[#4a3b30] px-8 py-2 text-lg font-medium text-white shadow-md">
          Nossa Equipe
        </div>

        <div className="grid w-full max-w-[320px] grid-cols-1 gap-6 md:max-w-6xl md:grid-cols-3 md:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-2xl border-2 border-[#d9be8c] bg-[#c2a675] p-4 text-center shadow-lg md:rounded-3xl md:p-6"
            >
              <div className="relative mb-4 aspect-[4/5] w-full overflow-hidden rounded-xl border-2 border-[#241e17]/20 md:mb-6 md:aspect-[3/4] md:rounded-2xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="mb-1 text-xl font-bold text-[#1a140e] md:text-2xl">
                {member.name}
              </h3>
              <p className="mb-1 text-sm font-semibold text-[#2e2419]">
                {member.role}
              </p>
              <a
                href={`mailto:${member.email}`}
                className="break-all text-xs text-[#3d3022] hover:underline"
              >
                {member.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
