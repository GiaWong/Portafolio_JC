import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "@/styles/ProjectsSection.module.css";

export default function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("projectsSection");
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
    <section
      id="projectsSection"
      className={`${styles.projectsSection}`}
    >
      {/* Transición con degradado entre About y Projects */}
      <div className={styles.transitionFade}></div>

      <motion.h2
        className={`${styles.projectsTitle} ${isVisible ? styles.reveal : ""}`}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Proyectos
      </motion.h2>

      <div className={styles.projectsGrid}>
        {[
          { title: "Proyecto 1", description: "Descripción breve del proyecto 1." },
          { title: "Proyecto 2", description: "Descripción breve del proyecto 2." },
          { title: "Proyecto 3", description: "Descripción breve del proyecto 3." },
        ].map((project, index) => (
          <motion.div
            key={index}
            className={`${styles.projectCard} ${isVisible ? styles.reveal : ""}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <h3 className={styles.projectTitle}>{project.title}</h3>
            <p className={styles.projectDescription}>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
