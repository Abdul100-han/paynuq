"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../ui/Button";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/images/hero-image.jpeg"
                    alt="Community Meeting Background"
                    fill
                    className="object-cover opacity-30"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-white via-white/80 to-blue-50/40" />
            </div>

            {/* Decorative Blobs */}
            <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-blue-100/20 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex-1 text-center md:text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-block px-3 py-1 rounded-full bg-brand-blue/10 text-brand-blue text-xs font-bold uppercase tracking-widest mb-6"
                        >
                            {/* Institutional Infrastructure */}
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.7 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-6 tracking-tight"
                        >
                            Empowering Local Economies with <span className="text-brand-blue font-heading tracking-normal">Digital Money</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.7 }}
                            className="text-lg md:text-xl text-gray-500 max-w-2xl mb-10 leading-relaxed font-sans"
                        >
                            A community-centric payment architecture powered by blockchain and real-world participation.
                            {/* Built for institutions, developers, and economic partners. */}
                        </motion.p>
                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.6 }}
                            >
                                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 transition-colors">Institutional Brief</Button>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7, duration: 0.6 }}
                            >
                                <Button variant="outline" size="lg" className="border-gray-300 hover:bg-gray-100 transition-colors">Contact Us</Button>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                        className="flex-1 w-full max-w-[500px] relative"
                    >
                        {/* Supporting Product Visual */}
                        <motion.div
                            animate={{ y: [0, -12, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/10 border border-white/50"
                        >
                            <Image
                                src="/images/hero-image.jpeg"
                                alt="PayNuq Digital Payment Mockup"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 500px"
                            />
                            {/* Sophisticated Overlay for the image */}
                            <div className="absolute inset-0 bg-blue-600/5 mix-blend-overlay" />
                        </motion.div>

                        {/* Subtle decorative elements */}
                        <motion.div
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100/30 rounded-full blur-2xl -z-10"
                        />
                        <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-8 -left-8 w-32 h-32 bg-brand-blue/5 rounded-full blur-3xl -z-10"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
