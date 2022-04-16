import React from "react";
import styles from "../styles/NavBar.module.css";
import { ActiveLink } from "./ActiveLink";

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

export const NavBar = () => {
  return (
    <nav className={styles["menu-container"]}>
      {menuItems.map((link) => (
        <ActiveLink text={link.text} href={link.href} key={link.text} />
      ))}
    </nav>
  );
};
