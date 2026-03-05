"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "../ui/Button";

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
            {/* Background Enhancement */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 -z-10" />

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
                        {/* Floating Card Mockup */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="bg-white/80 backdrop-blur-xl border border-white p-6 rounded-3xl shadow-2xl shadow-blue-500/10 relative z-10"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <div className="p-3 bg-blue-600 rounded-2xl text-white">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></svg>
                                </div>
                                <span className="text-xs font-bold text-gray-400">MERCHANT PAYMENT</span>
                            </div>

                            {/* <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-gray-500">Service</span>
                                    <span className="text-sm font-bold text-gray-900">PayNuq Transaction</span>
                                </div>
                                <div className="py-4 border-y border-gray-50">
                                    <div className="text-3xl font-bold text-gray-900">₦4,200</div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                                    <span className="text-xs font-medium text-gray-500 italic">Verified Community Node</span>
                                </div>
                            </div> */}
                        </motion.div>

                        {/* Decorative floating elements */}
                        {/* <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="absolute -top-6 -right-6 w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 shadow-lg"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                        </motion.div> */}
                        {/* <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute -bottom-4 -left-4 px-4 py-2 bg-white rounded-xl shadow-xl flex items-center gap-2 border border-gray-50"
                        >
                            <div className="w-2 h-2 bg-blue-600 rounded-full" />
                            <span className="text-[10px] font-bold text-gray-900 uppercase">Local Node Verified</span>
                        </motion.div> */}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
