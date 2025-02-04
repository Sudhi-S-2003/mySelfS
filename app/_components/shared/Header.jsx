"use client";

import { HEADER_ENG_LINKS, HEADER_MAL_LINKS } from "@/app/_constants/base.data";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react"; // Import useState and useEffect

function Header() {
    const [isEnglish, setIsEnglish] = useState(true); // State to manage language
    const pathname = usePathname(); // Get current route

    // Toggle language and update the URL query parameter
    const handleLanguageToggle = () => {
        setIsEnglish((prev) => !prev); // Toggle between English and Malayalam
        
        // Update the URL with the language query parameter
        const currentUrl = new URL(window.location);
        currentUrl.searchParams.set("lang", isEnglish ? "malayalam" : "english");
        window.history.pushState({}, "", currentUrl); // Update the URL without reloading the page
    };

    useEffect(() => {
        // Check the language query parameter in the URL when the component mounts
        const params = new URLSearchParams(window.location.search);
        const lang = params.get("lang");
        if (lang === "malayalam") {
            setIsEnglish(false); // Set Malayalam if the query is "malayalam"
        } else {
            setIsEnglish(true); // Default to English
        }
    }, []);

    // Select appropriate links based on the language state
    const links = isEnglish ? HEADER_ENG_LINKS : HEADER_MAL_LINKS;

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-[80vw] min-h-[60px] border border-emerald-50 rounded-md m-auto my-10 sticky top-0 z-10"
        >
            <div className="sm:flex justify-between p-4 items-center flex-wrap">
                {/* Name Section */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-lg font-semibold"
                >
                    <h1 className="base-text-200 inline">S</h1>udhi S.
                </motion.div>

                {/* Navigation Links */}
                <motion.div className="flex flex-col md:flex-row gap-4 sm:gap-8 mt-4 sm:mt-0">
                    {links.map((linkobj, index) => {
                        const isActive = pathname === linkobj.url;

                        return (
                            <motion.div
                                key={linkobj.label}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                            >
                                <Link
                                    href={{
                                        pathname: linkobj.url,
                                        query: { lang: isEnglish ? "english" : "malayalam" },
                                    }}
                                    className={`${
                                        isActive ? "base-text font-bold underline" : ""
                                    } hover:text-emerald-300 transition duration-300 text-base sm:text-lg`}
                                >
                                    {linkobj.label}
                                </Link>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Language Toggle Button */}
                <motion.div
                    className="relative inline-flex items-center cursor-pointer mt-4 sm:mt-0"
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    onClick={handleLanguageToggle}
                    aria-label="Toggle Language"
                >
                    {/* Slider */}
                    <motion.div
                        className={`w-16 h-8 rounded-full p-1 transition-all duration-300 ${
                            isEnglish ? "bg-emerald-500" : "bg-gray-500"
                        }`}
                    >
                        {/* Toggle Ball */}
                        <motion.div
                            className="w-6 h-6 bg-white rounded-full"
                            animate={{
                                x: isEnglish ? "0%" : "100%",
                            }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>
                    {/* Single Text Span */}
                    <motion.div
                        className="absolute inset-0 flex justify-center items-center text-sm sm:text-base text-white"
                    >
                        <span className="transition-opacity duration-300 opacity-100">
                            {isEnglish ? "ENG" : "മലയാളം"}
                        </span>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default Header;
