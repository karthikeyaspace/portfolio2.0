import React, { ReactNode } from "react";
import { motion } from "framer-motion";

const Reveal: React.FC<{ children: ReactNode }> = ({ children }) => {
  const revealVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={revealVariants}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
