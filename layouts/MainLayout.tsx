import Head from "next/head";
import styles from "../styles/Home.module.css";
import { NavBar } from "../components/NavBar";
import { FC, PropsWithChildren } from "react";

export const MainLayout: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home Adrian</title>
        <meta name='description' content='Home page' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <NavBar />

      <main className={styles.main}>{children}</main>
    </div>
  );
};
