import { motion } from "framer-motion";
import { 
  FaLinkedin, FaTiktok, FaWhatsapp, FaInstagram, 
  FaFacebook, FaLink
} from "react-icons/fa";
import styles from "@/styles/ContactSection.module.css";


const contacts = [
  { name: "LinkedIn", icon: <FaLinkedin />, link: "https://www.linkedin.com/in/juancarlos-sanchez-/" },
  { name: "TikTok", icon: <FaTiktok />, link: "https://www.tiktok.com/@coddeguardiiaan" },
  { name: "WhatsApp", icon: <FaWhatsapp />, link: "https://wa.me/1539056426" },
  { name: "Instagram", icon: <FaInstagram />, link: "https://www.instagram.com/coddeguardiiaan" },
  { name: "Facebook", icon: <FaFacebook />, link: "https://www.facebook.com/coddeguardiiaan/" },
  { name: "Linktree", icon: <FaLink />, link: "https://linktr.ee/coddeguardiiaan" },
  
];

export default function ContactSection() {
  return (
    <section id="contacto" className={styles.contactSection}>
      <motion.h2 
        className={styles.sectionTitle} // <--- Usa styles.sectionTitle
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
      >
        ¡Conéctate conmigo!
      </motion.h2>

      <motion.div 
        className={styles.contactGrid}
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
            className={styles.contactCard}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <span className={styles.contactIcon}>{contact.icon}</span>  {/* <--- Usa styles.contactIcon */}
            <span className={styles.contactName}>{contact.name}</span>  {/* <--- Usa styles.contactName */}
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
