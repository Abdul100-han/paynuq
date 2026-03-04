"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart, HandCoins, HeartPulse, Building2, Terminal, Landmark } from "lucide-react";
import Section from "../Section";

const useCases = [
    { icon: ShoppingCart, text: "Local merchant payments" },
    { icon: HandCoins, text: "Community savings & circulation" },
    { icon: HeartPulse, text: "Humanitarian digital payment pilots" },
    { icon: Building2, text: "Economic inclusion programs" },
    { icon: Terminal, text: "Identity-based programmable settlement" },
    { icon: Landmark, text: "Digital public infrastructure labs" },
];

const UseCases = () => {
    return (
        <Section title="Use Cases" dark>
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {useCases.map((useCase, index) => (
                        <motion.div
                            key={useCase.text}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.4 }}
                            className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-5 hover:border-brand-blue/20 hover:shadow-md transition-all group"
                        >
                            <div className="flex-shrink-0 w-12 h-12 bg-brand-gray rounded-xl flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-colors">
                                <useCase.icon className="w-6 h-6 text-gray-400 group-hover:text-white" />
                            </div>
                            <span className="text-lg font-bold text-gray-800 tracking-tight">{useCase.text}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default UseCases;
