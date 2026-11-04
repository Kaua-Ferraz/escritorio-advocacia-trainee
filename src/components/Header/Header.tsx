"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "../../../public/images/carvalho-associados.svg";
import styles from "./Header.module.css";

const navigation = [
  { label: "Início", href: "#inicio" },
  { label: "Quem somos", href: "#quem-somos" },
  { label: "Nossa equipe", href: "#nossa-equipe" },
  { label: "Serviços", href: "#areas-de-atuacao" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const closeMenu = () => setIsMenuOpen(false);

    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link
          className={styles.identity}
          href="#inicio"
          aria-label="Carvalho & Associados — início"
          onClick={() => setIsMenuOpen(false)}
        >
          <Image
            className={styles.logo}
            src={logo}
            alt=""
            width={246}
            height={126}
            priority
          />
        </Link>

        <button
          className={styles.menuButton}
          type="button"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
          aria-controls="site-navigation"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="site-navigation"
          className={`${styles.navigation} ${isMenuOpen ? styles.navigationOpen : ""}`}
          aria-label="Navegação principal"
        >
          <ul>
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
