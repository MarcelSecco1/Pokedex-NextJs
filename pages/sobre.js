import Image from "next/image";
import styles from "../styles/Sobre.module.css";

export default function Sobre() {
  return (
    <div className={styles.sobre}>
      <h1>Sobre o projeto:</h1>
      <p>
        Esse projeto é o consumo de uma API de Pokémon!! Estou utilizando ela
        para o meu aprendizado de Next.js!!
      </p>
      <Image
        src="/images/charizard.png"
        alt="PokeNext"
        height="300"
        width="300"
      />
    </div>
  );
}
