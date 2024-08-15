"use client";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ ease: "easeInOut", duration: 1, delay: 0.5 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        zIndex: 1000,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        pointerEvents: "none", 
      }}
    >
      <div className="loader"></div>
    </motion.div>
  );
}
