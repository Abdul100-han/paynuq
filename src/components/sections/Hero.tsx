"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-gray to-white -z-10" />

            {/* Decorative Blob */}
            <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-3xl -z-10" />

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
                            Institutional Infrastructure
                        </motion.div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-6 tracking-tight">
                            Empowering Local Economies with <span className="text-brand-blue font-heading tracking-normal">Digital Money</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mb-10 leading-relaxed font-sans">
                            A community-centric payment architecture powered by blockchain and real-world participation. Built for institutions, developers, and economic partners.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                            <Button size="lg">Institutional Brief</Button>
                            <Button variant="outline" size="lg">Contact Us</Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
                        className="flex-1 w-full max-w-[600px]"
                    >
                        <div className="relative aspect-square md:aspect-[4/3] rounded-2xl bg-brand-blue/5 border border-brand-blue/10 overflow-hidden shadow-2xl shadow-brand-blue/5">
                            {/* Placeholder for abstract illustration or community commerce image */}
                            <div className="absolute inset-0 flex items-center justify-center p-12">
                                <div className="w-full h-full border-2 border-dashed border-brand-blue/20 rounded-xl flex items-center justify-center">
                                    <span className="text-brand-blue/40 font-medium">Community Commerce Illustration</span>
                                </div>
                            </div>
                            <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/60 backdrop-blur-md rounded-xl border border-white/40 shadow-lg">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center text-white font-bold">P</div>
                                    <div>
                                        <div className="text-sm font-bold text-gray-900 leading-tight">Verified Transaction</div>
                                        <div className="text-xs text-gray-500">Local Merchant Node</div>
                                    </div>
                                    <div className="ml-auto text-brand-blue font-bold">+$42.50</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
