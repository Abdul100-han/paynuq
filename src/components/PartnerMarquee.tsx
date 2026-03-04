"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const partnerLogos = [
    { src: "/partners/encointer logo.png", name: "Encointer" },
    { src: "/partners/epipy logo.jpeg", name: "Epipy" },
    { src: "/partners/paynug logo.jpeg", name: "PayNuq" },
    { src: "/partners/usdc logo.png", name: "USDC" },
];

const PartnerMarquee = () => {
    // Duplicate logos for seamless infinite scroll
    const marqueeLogos = [...partnerLogos, ...partnerLogos, ...partnerLogos, ...partnerLogos];

    return (
        <div className="relative w-full overflow-hidden py-12 bg-white flex items-center">
            {/* Fade Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />

            <motion.div
                className="flex gap-12 sm:gap-24 items-center whitespace-nowrap"
                animate={{
                    x: ["0%", "-50%"],
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 25,
                        ease: "linear",
                    },
                }}
                whileHover={{ animationPlayState: "paused" }}
            >
                {marqueeLogos.map((logo, index) => (
                    <div
                        key={`${logo.name}-${index}`}
                        className="flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
                    >
                        <div className="relative h-12 w-32 sm:h-16 sm:w-48 grayscale hover:grayscale-0 transition-all duration-300">
                            <Image
                                src={logo.src}
                                alt={logo.name}
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 128px, 192px"
                            />
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default PartnerMarquee;
