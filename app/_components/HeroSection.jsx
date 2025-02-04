"use client";
import Image from "next/image";
import Link from "next/link";
import {
  SelfENGPosition,
  SelfENGDescription,
  SelfMalPosition,
  SelfMalDescription,
  viewDataWork
} from "@/app/_constants/hero.data";
import useGetLang from "@/app/_helper/useGetLang";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import useElementVisible from "@/app/_hooks/useElementVisible";

function HeroSection() {
  const [lang, setLang] = useState(null);
  const GetLang = useGetLang(); // Get the lang from the custom hook
  const ref = useRef(null); // Create a ref for the element you want to observe
  const isVisible = useElementVisible(ref); // Use the custom hook for visibility

  // Conditionally set position and description based on the language
  const SelfPostion = lang === "malayalam" ? SelfMalPosition : SelfENGPosition;
  const SelfDescription =
    lang === "malayalam" ? SelfMalDescription : SelfENGDescription;

  useEffect(() => {
    if (GetLang) {
      setLang(GetLang);
    }
  }, [GetLang]);

  // Debugging visibility change
  useEffect(() => {
    console.log("Visibility changed:", isVisible);
  }, [isVisible]);

  return (
    <div className="flex flex-col md:flex-row justify-evenly items-center p-6">
      {/* Text Section */}
      <motion.div
        ref={ref} // Attach the ref to the element you want to animate
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }} // Fade in when visible
        transition={{ duration: 0.5 }}
        className="text-center md:text-left uppercase max-w-lg"
      >
        <h1 className="base-text-600 leading-[20rem]">
          {SelfPostion &&
            SelfPostion.split("<br />").map((item, index) => (
              <span key={index} className="block">
                {item}
              </span>
            ))}
        </h1>
        <div className="mt-4 text-lg leading-relaxed">
          <div
            className="mt-4 text-lg leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: SelfDescription.replace(/className/g, "class"),
            }}
          />
          <div className="py-2 px-5 m-3">
            <Link
              className="bg-secondary-gradient opacity-70 py-2 px-5 border-[white] border-2 rounded-full"
              href={{
                pathname: "/portfolio",
                query: { lang: lang }, // Pass the lang as a query parameter
              }}
            >
           {viewDataWork[lang||"english"]}
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }} // Fade in when visible
        transition={{ duration: 0.5 }}
        className="mt-6 md:mt-0"
      >
        <Image src="/code-man.png" alt="Hero Image" width={500} height={500} />
      </motion.div>
    </div>
  );
}

export default HeroSection;
