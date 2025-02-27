import { motion } from 'framer-motion';
import styles from '@/styles/Header.module.css';

const Header = () => {
  return (
    <header id="inicioSection" className={styles.header}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className={styles.title}>Juan Carlos Rubén Sánchez</h1>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <p className={styles.subtitle}>Soporte IT L2 | SOC L1 | Hacking Ético Ofensivo | Tecnicatura en Ciberseguridad UGR | Derecho, UNLaM </p>
      </motion.div>
    </header>
  );
};

export default Header;