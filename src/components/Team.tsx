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
    <section className="bg-[#241e17] py-16 px-4 flex flex-col items-center">
      {/* Pílula / Botão "Nossa Equipe" */}
      <div className="inline-block border-2 border-[#5c4738] bg-[#4a3b30] text-white px-8 py-2 rounded-full text-lg font-medium shadow-md mb-12">
        Nossa Equipe
      </div>

      {/* Grid de Cartões (1 coluna no mobile, 3 colunas no desktop) */}
      <div className="grid w-full max-w-[320px] grid-cols-1 gap-6 md:max-w-6xl md:grid-cols-3 md:gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center rounded-2xl border-2 border-[#d9be8c] bg-[#c2a675] p-4 text-center shadow-lg md:rounded-3xl md:p-6"
          >
            {/* Foto do membro */}
            <div className="relative mb-4 aspect-[4/5] w-full overflow-hidden rounded-xl border-2 border-[#241e17]/20 md:mb-6 md:aspect-[3/4] md:rounded-2xl">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Informações */}
            <h3 className="mb-1 text-xl font-bold text-[#1a140e] md:text-2xl">
              {member.name}
            </h3>
            <p className="text-sm font-semibold text-[#2e2419] mb-1">
              {member.role}
            </p>
            <a
              href={`mailto:${member.email}`}
              className="text-xs text-[#3d3022] hover:underline break-all"
            >
              {member.email}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
