import Link from "next/link";
import styles from "../styles/Home.module.css";
import { MainLayout } from "../layouts/MainLayout";

export default function Contact() {
  return (
    <MainLayout>
      <h1>Contact Page</h1>
      <h1 className={styles.title}>
        Ir a <Link href='/'>Home</Link>
      </h1>

      <p className={styles.description}>
        Get started by editing{" "}
        <code className={styles.code}>pages/contact.js</code>
      </p>
    </MainLayout>
  );
}
