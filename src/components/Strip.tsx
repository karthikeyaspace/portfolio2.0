import React from "react";
import { motion } from "framer-motion";

const Strip: React.FC = () => {
  const slideVariants = {
    animate: {
      x: [0, -2800],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 35,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="absolute left-0 right-0 top-[50px] md:top-auto md:bottom-[10px] overflow-hidden">
      <motion.div
        className="flex w-[5600px]"
        variants={slideVariants}
        animate="animate"
      >
        <img src="strip.png" className="w-[1400px] object-contain opacity-20" />
        <img src="strip.png" className="w-[1400px] object-contain opacity-20" />
        <img src="strip.png" className="w-[1400px] object-contain opacity-20" />
        <img src="strip.png" className="w-[1400px] object-contain opacity-20" />
      </motion.div>
    </div>
  );
};

export default Strip;
