import { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/NavBar.module.css";

interface Props {
  text: string;
  href: string;
}

export const ActiveLink: FC<Props> = ({ text, href }) => {
  const { pathname } = useRouter();

  return (
    <Link href={href}>
      <a className={pathname === href ? styles["menu-active"] : ""}>{text}</a>
    </Link>
  );
};
