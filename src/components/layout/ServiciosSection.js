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
    { title: "Armado y reparación de PC, notebooks y televisores", description: "Servicio de ensamblado, mantenimiento y reparación de equipos de escritorio, laptops y televisores. Diagnóstico de fallas, cambio de componentes y optimización del rendimiento." },
    { title: "Diagnóstico y reparación de placas de video.", description: "Análisis de fallos en tarjetas gráficas, reparación de circuitos, reballing y cambio de componentes dañados para restaurar su funcionamiento." },
    { title: "Recuperación de datos y clonación de HDD.", description: "Rescate de archivos perdidos por fallos en discos duros o memorias extraíbles. Clonación de discos para migraciones seguras sin pérdida de información." },
    { title: "Seguridad informática y configuración de redes.", description: "Implementación de medidas de seguridad para proteger sistemas y datos. Configuración de redes cableadas e inalámbricas para hogares y empresas." },
    { title: "Desbloqueo y balanceo de baterías.", description: "Reactivación de baterías bloqueadas y calibración para mejorar su rendimiento y vida útil en notebooks y otros dispositivos electrónicos." },
    { title: "Instalación de cámaras IP.", description: "Configuración y puesta en marcha de sistemas de videovigilancia IP para monitoreo remoto con acceso desde cualquier dispositivo." },
    
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
