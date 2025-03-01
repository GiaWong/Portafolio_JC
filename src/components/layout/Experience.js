import { motion } from "framer-motion";
import styles from "@/styles/Experience.module.css";

const experiences = [
  {
    period: "2020 - 2022",
    title: "Desarrolladora Front-End",
    company: "Tech Company",
    description:
      "Desarrollé interfaces web responsivas y dinámicas utilizando React y Tailwind CSS.",
  },
  {
    period: "2018 - 2020",
    title: "Diseñadora UI/UX",
    company: "Creative Studio",
    description:
      "Creé diseños intuitivos y atractivos para aplicaciones móviles y web.",
  },
  {
    period: "2016 - 2018",
    title: "Ingeniera de Software",
    company: "Innovatech",
    description:
      "Colaboré en el desarrollo de soluciones backend escalables y seguras.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className={styles.experienceSection}>
      <h2 className={styles.sectionTitle}>Experiencia</h2>
      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className={styles.timelineItem}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className={styles.timelineContent}>
              <span className={styles.period}>{exp.period}</span>
              <h3 className={styles.title}>{exp.title}</h3>
              <h4 className={styles.company}>{exp.company}</h4>
              <p className={styles.description}>{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
