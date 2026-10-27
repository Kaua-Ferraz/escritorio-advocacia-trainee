# Escritório de Advocacia - Trainee CodeTech Jr.

Site institucional fictício do escritório **Carvalho & Associados**, focado em
Direito Trabalhista e Direito do Consumidor. O projeto utiliza Next.js,
TypeScript e Tailwind CSS.

## Comandos

Instale as dependências e inicie o ambiente de desenvolvimento:

```bash
npm install
npm run dev
```

O site ficará disponível em `http://localhost:3000`.

Outros comandos:

```bash
npm run lint       # verifica a qualidade do código
npm run typecheck  # verifica os tipos do TypeScript
npm run build      # gera a versão de produção
npm run start      # executa a versão de produção
```

## Organização

```text
public/
  images/                 arquivos públicos
src/
  app/                    páginas, layout e estilos globais
    globals.css
    layout.tsx
    page.tsx
  assets/                 imagens, ícones e logotipos importados
  components/             componentes e seções do site
    Contact.tsx
    Footer.tsx
    Header.tsx
    Hero.tsx
    PracticeAreas.tsx
```

Os componentes ficam diretamente em `src/components`. Os recursos visuais ficam
em `src/assets`, enquanto `src/app` concentra as páginas e a configuração global
da aplicação.
