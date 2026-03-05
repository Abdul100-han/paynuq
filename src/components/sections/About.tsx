"use client";

import React from "react";
import { motion } from "framer-motion";
import { Wallet, Fingerprint, ShieldCheck, ShoppingBag } from "lucide-react";
import Section from "../Section";

const features = [
    {
        icon: Wallet,
        title: "Digital payment system",
        description: "Secure, low-cost digital transfers designed for everyday use and community-scale transactions."
    },
    {
        icon: Fingerprint,
        title: "Identity-anchored issuance",
        description: "Currency issuance tied to verified unique individuals, ensuring fair distribution and sybil-resistance."
    },
    {
        icon: ShieldCheck,
        title: "Transparent treasury logic",
        description: "Automated, on-chain rules for reserves and issuance that provide institutional-grade auditability."
    },
    {
        icon: ShoppingBag,
        title: "Designed for real-world use",
        description: "Built to integrate seamlessly with local merchants and existing economic behaviors."
    }
];

const About = () => {
    return (
        <Section id="about" title="PAYNUQ — Digital Community Payment Infrastructure" dark>
            <div className="max-w-3xl mx-auto text-center mb-16 px-4">
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                    PayNuq enables localized digital payments that strengthen community economies.                 </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                {features.map((feature, index) => (
                    <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        whileHover={{ y: -5 }}
                        className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all group"
                    >
                        <div className="w-12 h-12 bg-brand-blue/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                            <feature.icon className="w-6 h-6 text-brand-blue group-hover:text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default About;
