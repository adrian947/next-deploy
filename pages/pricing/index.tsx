import Link from "next/link";
import styles  from '../../styles/Home.module.css'
import { MainLayout } from "../../layouts/MainLayout";

export default function index() {
  return (
    <MainLayout>
      <h1>Pricing Page</h1>
      <h1 className={styles.title}>
        Ir a <Link href='/'>Home</Link>
      </h1>

      <p className={styles.description}>
        Get started by editing{" "}
        <code className={styles.code}>pages/pricing.js</code>
      </p>
    </MainLayout>
  );
};
