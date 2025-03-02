import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import styles from "@/styles/ServiciosSection.module.css";

export default function ServiciosSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const servicios = [
    { title: "Servicio 1", description: "Descripción breve del servicio 1." },
    { title: "Servicio 2", description: "Descripción breve del servicio 2." },
    { title: "Servicio 3", description: "Descripción breve del servicio 3." },
  ];

  return (
    <section ref={sectionRef} id="serviciosSection" className={styles.serviciosSection}>
      <div className={styles.transitionFade}></div>

      <motion.h2
        className={styles.serviciosTitle}
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        Servicios
      </motion.h2>

      <div className={styles.serviciosGrid}>
        {servicios.map((servicio, index) => (
          <motion.div
            key={index}
            className={styles.serviciosCard}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.07 }}
          >
            <h3 className={styles.serviciosCardTitle}>{servicio.title}</h3>
            <p className={styles.serviciosDescription}>{servicio.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
