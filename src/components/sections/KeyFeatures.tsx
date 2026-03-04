"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Section from "../Section";

const features = [
    "Built on Encointer Protocol",
    "Sybil-resistant identity layer",
    "Community-managed ecosystem",
    "Transparent issuance & transaction history",
    "Hybrid on-chain + real-world flow",
    "USDC reserve-backed settlements"
];

const KeyFeatures = () => {
    return (
        <Section title="Key Features">
            <div className="max-w-4xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.4 }}
                            className="flex items-start gap-4"
                        >
                            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-blue/10 flex items-center justify-center mt-0.5">
                                <Check className="w-4 h-4 text-brand-blue" />
                            </div>
                            <span className="text-lg text-gray-700 font-medium">{feature}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default KeyFeatures;
