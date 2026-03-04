"use client";

import React from "react";
import { motion } from "framer-motion";
import Section from "../Section";

const steps = [
    {
        number: "01",
        title: "Identity Validation",
        description: "Participants verify identity in-person using Encointer's proof-of-personhood."
    },
    {
        number: "02",
        title: "Currency Issuance",
        description: "PayNuq units are issued regularly to verified members."
    },
    {
        number: "03",
        title: "Local Transactions",
        description: "Members and businesses transact with PayNuq and local fiat."
    },
    {
        number: "04",
        title: "Treasury & Settlement",
        description: "USDC-backed liquidity ensures predictable settlement and conversion."
    }
];

const HowItWorks = () => {
    return (
        <Section id="how-it-works" title="How It Works" dark>
            <div className="relative max-w-6xl mx-auto px-4">
                {/* Connection Lines (Desktop) */}
                <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-px bg-brand-blue/10 -z-0" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group"
                        >
                            <div className="flex flex-col items-center md:items-start">
                                <div className="w-16 h-16 rounded-full bg-white border-2 border-brand-blue/10 flex items-center justify-center mb-8 shadow-sm group-hover:border-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                                    <span className="text-xl font-bold text-brand-blue group-hover:text-white">{step.number}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center md:text-left">{step.title}</h3>
                                <p className="text-gray-500 leading-relaxed text-center md:text-left">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default HowItWorks;
