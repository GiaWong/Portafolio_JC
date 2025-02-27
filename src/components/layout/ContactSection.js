import { motion } from "framer-motion";
import { 
  FaLinkedin, FaTiktok, FaWhatsapp, FaInstagram, 
  FaFacebook, FaEnvelope, FaPhone 
} from "react-icons/fa";
import styles from "@/styles/ContactSection.module.css";


const contacts = [
  { name: "LinkedIn", icon: <FaLinkedin />, link: "https://linkedin.com/in/tu-perfil" },
  { name: "TikTok", icon: <FaTiktok />, link: "https://tiktok.com/@tu-usuario" },
  { name: "WhatsApp", icon: <FaWhatsapp />, link: "https://wa.me/tu-numero" },
  { name: "Instagram", icon: <FaInstagram />, link: "https://instagram.com/tu-usuario" },
  { name: "Facebook", icon: <FaFacebook />, link: "https://facebook.com/tu-perfil" },
  { name: "Correo", icon: <FaEnvelope />, link: "mailto:tuemail@example.com" },
  { name: "Teléfono", icon: <FaPhone />, link: "tel:+1234567890" },
];

export default function ContactSection() {
  return (
    <section id="contacto" className={styles.contactSection}>
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
      >
        ¡Conéctate conmigo!
      </motion.h2>

      <motion.div 
        className="contact-grid"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1 }}
      >
        {contacts.map((contact, index) => (
          <motion.a 
            key={index} 
            href={contact.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-card"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className="contact-icon">{contact.icon}</span>
            <span className="contact-name">{contact.name}</span>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}