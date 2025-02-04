"use client";
import useGetLang from "@/app/_helper/useGetLang";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Eng_Footer_DATA,Mal_Footer_DATA } from "@/app/_constants/footer.data";

function Footer() {
     const [lang, setLang] = useState(null);
        const GetLang = useGetLang(); 
          useEffect(() => {
            if (GetLang) {
              setLang(GetLang);
            }
          }, [GetLang]);
        const FooterData=lang==="malayalam"?Mal_Footer_DATA:Eng_Footer_DATA
  return (
    <motion.footer
      className="bg-gray-900 text-white p-6 flex flex-col items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Animated Date */}
      <motion.div
        className="text-lg font-bold"
        whileHover={{ scale: 1.1, color: "#FFD700" }}
      >
        {new Date().getFullYear()}
      </motion.div>

      {/* Rights Reserved Text */}
      <motion.p
        className="mt-2 text-sm text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        {FooterData}
      </motion.p>

      {/* Additional Animated Icons or Text */}
      <motion.div
        className="mt-4 flex space-x-3"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 1,
          duration: 0.8,
          type: "spring",
          stiffness: 120,
        }}
      >
        {/* Replace with icons or useful links */}
        <span role="img" aria-label="Star" className="text-2xl">
          ⭐
        </span>
        <span role="img" aria-label="Rocket" className="text-2xl">
          🚀
        </span>
        <span role="img" aria-label="Code" className="text-2xl">
          💻
        </span>
      </motion.div>
    </motion.footer>
  );
}

export default Footer
