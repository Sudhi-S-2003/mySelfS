"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Show button when scrolled down 200px and update progress bar
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);

      // Calculate scroll progress (percentage)
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPosition = window.scrollY;
      setScrollProgress((scrollPosition / scrollHeight) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    <div>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-[#e02884] to-[#2786d6]"
        style={{ width: `${scrollProgress}%` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Scroll To Top Button */}
      <motion.button
        className={`fixed bottom-6 right-6 p-3 rounded-full bg-gradient-to-r from-[#e02884] to-[#2786d6] text-white shadow-lg border-4 border-green-700`}
        style={{ display: visible ? "block" : "none" }}
        onClick={scrollToTop}
        initial={{ opacity: 0 }}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        ↑
      </motion.button>
    </div>
  );
};

export default ScrollToTopButton;
