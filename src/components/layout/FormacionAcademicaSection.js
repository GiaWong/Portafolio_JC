import { useState } from "react";
import { motion } from "framer-motion";
import styles from "@/styles/FormacionAcademica.module.css";

const formaciones = [
  {
    titulo: "Certified Ethical Hacker (CEH)",
    institucion: "EC-Council",
    año: 2023,
    descripcion: "Certificación profesional que valida habilidades en hacking ético, pruebas de penetración y seguridad de sistemas. Obtuve esta certificación tras completar un curso intensivo y aprobar el examen oficial de EC-Council.",
    imagen: "/formaciones/ceh.png", // Asegúrate de tener una imagen o usa un placeholder
  },
  {
    titulo: "Google Cybersecurity Certificate",
    institucion: "Google",
    año: 2022,
    descripcion: "Programa de certificación ofrecido por Google que cubre fundamentos de ciberseguridad, incluyendo gestión de riesgos, seguridad de redes y respuesta a incidentes. Completé este curso en línea a través de la plataforma Coursera.",
    imagen: "/formaciones/google-cybersecurity.png",
  },
  {
    titulo: "Especialización en Seguridad Informática",
    institucion: "FIUBA",
    año: 2021,
    descripcion: "Especialización académica en seguridad informática, enfocada en criptografía, análisis de vulnerabilidades y protección de datos. Este programa incluyó proyectos prácticos y un trabajo final sobre seguridad en aplicaciones web.",
    imagen: "/formaciones/fiuba.png",
  },
];

export default function FormacionAcademicaSection() {
  const [formacionSeleccionada, setFormacionSeleccionada] = useState(null);

  return (
    <section id="formacionAcademica" className={styles.section}>
      {/* Sección de Formación y Certificaciones */}
      <motion.div
        className={styles.formacionContainer}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className={styles.sectionTitle}>Formación Académica y Certificaciones</h2>
        <div className={styles.formacionGrid}>
          {formaciones.map((item, index) => (
            <motion.div
              key={index}
              className={styles.formacionCard}
              whileHover={{ scale: 1.05 }}
              onClick={() => setFormacionSeleccionada(item)}
            >
              <img src={item.imagen} alt={item.titulo} className={styles.formacionImagen} />
              <h3 className={styles.formacionTitulo}>{item.titulo}</h3>
              <p className={styles.formacionInstitucion}>{item.institucion} ({item.año})</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Panel lateral para detalles */}
      {formacionSeleccionada && (
        <motion.div
          className={styles.panelOverlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setFormacionSeleccionada(null)}
        >
          <motion.div
            className={styles.panelContent}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.cerrarButton}
              onClick={() => setFormacionSeleccionada(null)}
            >
              ✕
            </button>
            <img
              src={formacionSeleccionada.imagen}
              alt={formacionSeleccionada.titulo}
              className={styles.panelImagen}
            />
            <h2 className={styles.panelTitulo}>{formacionSeleccionada.titulo}</h2>
            <p className={styles.panelInstitucion}>
              {formacionSeleccionada.institucion} ({formacionSeleccionada.año})
            </p>
            <p className={styles.panelDescripcion}>{formacionSeleccionada.descripcion}</p>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}