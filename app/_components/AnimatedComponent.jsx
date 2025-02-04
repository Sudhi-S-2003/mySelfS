
"use client"
import { motion } from "framer-motion";
import { useRef } from "react";
import useElementVisible from "@/app/_hooks/useElementVisible";

function AnimatedComponent() {
  const ref = useRef(null);
  const isVisible = useElementVisible(ref);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      // transition={{ duration: 0.5, repeat: isVisible ? Infinity : 0 }}
      transition={{ duration: 0.5 }}
       className="h-screen m-auto top-11"
    >
      I appear when visible!
    </motion.div>
  );
}

export default AnimatedComponent;
