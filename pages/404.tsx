import Link from "next/link";
import Image from "next/image";
import styles from "../styles/styles.module.scss";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1>Ops!</h1>
        <p>
          Não estamos conseguimos encontrar a página que você está procurando.
        </p>
        <Link href="/login">
          <a>Página de login</a>
        </Link>
      </div>
      <div className={styles.right}>
        <Image
          src="/404.svg"
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
