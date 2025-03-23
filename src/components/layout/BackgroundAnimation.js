import { motion } from "framer-motion";
import styles from "@/styles/BackgroundAnimation.module.css";

export default function BackgroundAnimation() {
  return (
    <div className={styles.backgroundWrapper}>
      <motion.svg
        className={styles.waves}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        initial={{ y: 50 }}
        animate={{ y: [50, 30, 50] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        <path
          fill="#002410"
          fillOpacity="1"
          d="M0,192L80,165.3C160,139,320,85,480,69.3C640,53,800,75,960,90.7C1120,107,1280,117,1360,122.7L1440,128V320H0Z"
        ></path>
      </motion.svg>
    </div>
  );
}
