import { useEffect, useState } from "react";
import styles from "@/styles/AboutSection.module.css";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("aboutSection");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="aboutSection" className={styles.aboutSection}>
      {/* Contenedor de Imagen */}
      <div className={styles.aboutImageContainer}>
        <img
          src="/images/perfil.png"
          alt="Mi foto"
          className={`${styles.aboutImage} ${isVisible ? styles.reveal : ""}`}
        />
      </div>

      {/* Contenedor de Texto */}
      <div className={`${styles.aboutTextContainer} ${isVisible ? styles.reveal : ""}`}>
        <h2 className={styles.aboutTitle}>Sobre Mí</h2>
        <p className={styles.aboutText}>
          Soy un profesional con amplia experiencia en tecnología, 
          ciberseguridad y redes informáticas.
        </p>
        <p className={styles.aboutText}>
          Cuento con más de tres años 
          de trayectoria en el ámbito de la informática, especializándome en 
          la reparación de hardware, redes y seguridad informática.
        </p>
        <p className={styles.aboutText}>
          Si buscas tranquilidad y protección,{" "}
          <a href="#contacto" className={styles.contactLink}>hablemos</a>.
        </p>
      </div>

      {/* Degradado de transición */}
      <div className={styles.transitionFade}></div>
    </section>
  );
}
