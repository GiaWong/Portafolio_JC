import { useState } from "react";
import { motion } from "framer-motion";
import styles from "@/styles/ClientesDestacados.module.css";

const clientes = [
  { 
    nombre: "Colegio de Abogados de La Matanza y Sede Laferrere", 
    logo: "/clientes/empresaA.png", 
    descripcion: "Se realizó el cableado estructurado, instalación de cámaras de videovigilancia, configuración de la red y soporte a las máquinas de escritorio en la sede de Laferrere. En el Colegio de Abogados de La Matanza, se realizó el mantenimiento del servidor con Windows Server 2016, instalación y configuración de un equipo 24/7 para accesos remotos y mantenimiento preventivo de algunos equipos. Los detalles técnicos se encuentran en los informes enviados."
  },
  { 
    nombre: "Óptica Optiland - 5 Sucursales", 
    logo: "/clientes/startupB.png", 
    descripcion: "Se realizó la venta de insumos informáticos, instalación de equipos, mantenimiento y corrección de equipos en varias sedes de la óptica, con sus respectivas configuraciones."
  },
  { 
    nombre: "Imprenta Imperial Vinilos", 
    logo: "/clientes/corporacionC.png", 
    descripcion: "Se realizaron diagnósticos de los equipos de la imprenta, revisando el estado de la memoria RAM y los discos de almacenamiento, identificando fallas en cada equipo. Equipo 1: Mala configuración del sistema operativo. Equipo 2: Falla en el disco SSD y diagnóstico para su reemplazo."
  },
  { 
    nombre: "Jardín de Infantes", 
    logo: "/clientes/corporacionC.png", 
    descripcion: "Diagnóstico del equipo principal con falla de conexión debido a suciedad. Se dejó pendiente el cambio de SSD, la ampliación de memoria y la limpieza del equipo. Además, quedó pendiente la cotización para la instalación de un cableado con un access point."
  },
  { 
    nombre: "Estudio Jurídico Federico Nacucchio", 
    logo: "/clientes/corporacionC.png", 
    descripcion: "Configuración de la red desde cero, creación de usuarios para cada equipo y traslado de un equipo para que funcione como servidor. Se configuró un grupo de red denominado 'ESTUDIO', se asignaron IPs manuales, se crearon carpetas compartidas y se establecieron accesos con los permisos correspondientes."
  }
];

export default function ClientesDestacadosSection() {
  const [clienteSeleccionado, setClienteSeleccionado] = useState(null);

  return (
    <section id="clientesDestacados" className={styles.section}>
      {/* Sección de Clientes Destacados */}
      <motion.div 
        className={styles.clientesContainer} 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
      >
        <h2 className={styles.sectionTitle}>Clientes Destacados</h2>
        <div className={styles.clientesGrid}>
          {clientes.map((cliente, index) => (
            <motion.div 
              key={index} 
              className={styles.clienteCard}
              whileHover={{ scale: 1.05 }}
              onClick={() => setClienteSeleccionado(cliente)}
            >
              <img src={cliente.logo} alt={cliente.nombre} className={styles.clienteLogo} />
              <h3 className={styles.clienteNombre}>{cliente.nombre}</h3>
              <p className={styles.clienteDescripcion}>
                {cliente.descripcion.length > 100 
                  ? `${cliente.descripcion.substring(0, 100)}...` 
                  : cliente.descripcion}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Modal de Cliente */}
      {clienteSeleccionado && (
        <motion.div 
          className={styles.modalOverlay} 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          exit={{ opacity: 0 }}
          onClick={() => setClienteSeleccionado(null)}
        >
          <motion.div 
            className={styles.modalContent} 
            initial={{ y: -50, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{clienteSeleccionado.nombre}</h2>
            <p>{clienteSeleccionado.descripcion}</p>
            <button 
              className={styles.cerrarButton} 
              onClick={() => setClienteSeleccionado(null)}
            >
              Cerrar
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}