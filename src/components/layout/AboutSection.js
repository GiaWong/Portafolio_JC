import Image from "next/image";
import styles from "@/styles/AboutSection.module.css";

export default function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <h2 className={styles.aboutTitle}>Sobre Mí</h2>
      <p className={styles.aboutText}>
        Soy una desarrolladora apasionada con experiencia en tecnologías modernas. Me encanta
        crear soluciones digitales innovadoras y optimizar procesos mediante el desarrollo
        de software eficiente. Mi enfoque se basa en la creatividad, el rendimiento y la
        accesibilidad en cada proyecto que emprendo.
      </p>
      <Image
        src="/images/perfil.png"
        alt="Foto de perfil"
        width={150}
        height={150}
        className={styles.aboutImage}
      />
    </section>
  );
}
