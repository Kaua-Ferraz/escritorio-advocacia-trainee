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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-[#c2a675] border-2 border-[#d9be8c] rounded-3xl p-6 flex flex-col items-center text-center shadow-lg"
          >
            {/* Foto do membro */}
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden mb-6 border-2 border-[#241e17]/20">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Informações */}
            <h3 className="text-2xl font-bold text-[#1a140e] mb-1">
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