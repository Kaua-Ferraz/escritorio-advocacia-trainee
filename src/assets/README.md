# Assets

Esta pasta reúne os recursos visuais importados diretamente pelos componentes.

Organize em subpastas conforme o site crescer:

```text
assets/
  icons/
  images/
  logos/
```

Exemplo de uso com uma imagem em `src/assets/images/equipe.jpg`:

```tsx
import Image from "next/image";
import equipeImage from "@/assets/images/equipe.jpg";

<Image src={equipeImage} alt="Equipe do escritório" />;
```

Use `public` somente para arquivos que precisam ser acessados por um endereço
direto, como `/images/arquivo.pdf` ou `/robots.txt`.
