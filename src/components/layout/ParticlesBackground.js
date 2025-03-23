import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // Versión optimizada
import styles from "@/styles/ParticlesBackground.module.css";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine); // Carga la versión ligera de tsParticles
  }, []);

  return (
    <div className={styles.particlesWrapper}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: "#0C0C0C", // Color de fondo
          },
          particles: {
            number: {
              value: 50, // Cantidad de partículas
              density: { enable: true, value_area: 800 },
            },
            color: { value: "#ffffff" }, // Color de las partículas
            shape: { type: "circle" },
            opacity: {
              value: 0.5,
              random: false,
              anim: { enable: false },
            },
            size: {
              value: 2,
              random: true,
              anim: { enable: false },
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: "none",
              random: false,
              straight: false,
              outModes: { default: "out" },
            },
            line_linked: {
              enable: true, // Habilita las líneas conectadas
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
              push: { particles_nb: 4 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}
