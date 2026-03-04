"use client";

import React from "react";
import { motion } from "framer-motion";
import { AlertCircle, TrendingDown, Users, Search } from "lucide-react";
import Section from "../Section";

const challenges = [
    {
        icon: TrendingDown,
        text: "Value leaves too fast"
    },
    {
        icon: AlertCircle,
        text: "Businesses struggle with liquidity"
    },
    {
        icon: Users,
        text: "Financial services don't reach informal markets"
    },
    {
        icon: Search,
        text: "Trust and visibility are missing in local economies"
    }
];

const WhyItMatters = () => {
    return (
        <Section title="Why It Matters">
            <div className="max-w-5xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {challenges.map((challenge, index) => (
                        <motion.div
                            key={challenge.text}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="flex items-center gap-6 p-4 rounded-lg bg-brand-gray/50 border border-gray-50"
                        >
                            <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                                <challenge.icon className="w-6 h-6 text-brand-blue" />
                            </div>
                            <span className="text-lg font-medium text-gray-700">{challenge.text}</span>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-center p-8 rounded-2xl bg-brand-blue text-white shadow-xl shadow-brand-blue/20"
                >
                    <p className="text-xl md:text-2xl font-medium">
                        PayNuq addresses these with a simple, measurable, participatory model.
                    </p>
                </motion.div>
            </div>
        </Section>
    );
};

export default WhyItMatters;
