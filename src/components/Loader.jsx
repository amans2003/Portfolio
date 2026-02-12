import { motion } from "framer-motion";

function Loader() {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: "fixed",
        inset: 0,
        background: "#0a0a0f",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 100,
      }}
    >
      {/* Logo */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          fontSize: "48px",
          fontWeight: "bold",
          marginBottom: "40px",
        }}
      >
        <span className="gradient-text">AMAN SINGH</span>
      </motion.div>

      {/* Loading Bar */}
      <div
        style={{
          width: "200px",
          height: "4px",
          background: "rgba(255, 255, 255, 0.1)",
          borderRadius: "2px",
          overflow: "hidden",
        }}
      >
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          style={{
            height: "100%",
            background: "linear-gradient(90deg, #00fff5, #8b5cf6)",
            borderRadius: "2px",
          }}
        />
      </div>

      {/* Loading Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        style={{
          marginTop: "20px",
          color: "rgba(255, 255, 255, 0.4)",
          fontSize: "13px",
          letterSpacing: "3px",
        }}
      >
        LOADING
      </motion.p>
    </motion.div>
  );
}

export default Loader;
