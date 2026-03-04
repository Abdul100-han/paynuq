"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionProps {
    id?: string;
    title?: string;
    className?: string;
    children: React.ReactNode;
    dark?: boolean;
}

const Section = ({ id, title, className = "", children, dark = false }: SectionProps) => {
    return (
        <section
            id={id}
            className={`py-20 md:py-32 overflow-hidden ${dark ? "bg-brand-gray" : "bg-white"} ${className}`}
        >
            <div className="container mx-auto px-4 md:px-6">
                {title && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-16 text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-blue tracking-tight">
                            {title}
                        </h2>
                        <div className="w-16 h-1 bg-brand-blue/20 mx-auto mt-4 rounded-full" />
                    </motion.div>
                )}
                {children}
            </div>
        </section>
    );
};

export default Section;
