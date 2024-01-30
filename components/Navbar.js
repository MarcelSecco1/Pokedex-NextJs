import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <ul className={styles.navbar}>
      <li>
        <Link href="/produtos" className={styles.link}>
          Produtos
        </Link>
      </li>
      <li>
        <Link href="/" className={styles.link}>
          Home
        </Link>
      </li>
    </ul>
  );
}
