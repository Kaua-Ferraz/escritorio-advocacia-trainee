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
    Contact/
      Contact.tsx
      Contact.module.css
    Footer/
      Footer.tsx
      Footer.module.css
    Header/
      Header.tsx
      Header.module.css
    Hero/
      Hero.tsx
      Hero.module.css
    PracticeAreas/
      PracticeAreas.tsx
      PracticeAreas.module.css
```

Cada seção com estilos próprios fica em uma pasta dentro de `src/components`,
junto do respectivo CSS Module. Os recursos visuais ficam em `src/assets` ou
`public/images`, enquanto `src/app` concentra as páginas e a configuração global
da aplicação.
