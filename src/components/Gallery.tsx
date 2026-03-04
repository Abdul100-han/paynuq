"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Section from "./Section";
import Button from "./ui/Button";

const images = [
    "/images/p1.jpeg",
    "/images/p2.jpeg",
    "/images/p3.jpeg",
    "/images/p4.jpeg",
    "/images/p5.jpeg",
    "/images/p6.jpeg",
    "/images/p7.jpeg",
];

const Gallery = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const displayedImages = isExpanded ? images : images.slice(0, 6);

    return (
        <Section title="Community Engagement" dark>
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-12">
                    <p className="text-lg text-gray-600 font-medium">
                        Moments from PayNuq gatherings, merchant onboarding, and community validation events.
                    </p>
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence initial={false}>
                        {displayedImages.map((src, index) => (
                            <motion.div
                                key={src}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm group"
                            >
                                <Image
                                    src={src}
                                    alt={`Community event ${index + 1}`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-brand-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                <div className="mt-12 text-center">
                    <Button
                        variant="outline"
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="min-w-[160px]"
                    >
                        {isExpanded ? "Show Less" : "View More"}
                    </Button>
                </div>
            </div>
        </Section>
    );
};

export default Gallery;
