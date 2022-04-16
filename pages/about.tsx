import Link from "next/link";
import styles from "../styles/Home.module.css";
import { MainLayout } from "../layouts/MainLayout";
import { DarkLayout } from "../layouts/DarkLayout";

export default function About() {
  return (
    <>
      <h1>About Page</h1>
      <h1 className={styles.title}>
        Ir a <Link href='/'>Home</Link>
      </h1>

      <p className={styles.description}>
        Get started by editing{" "}
        <code className={styles.code}>pages/about.js</code>
      </p>
    </>
  );
}

About.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
