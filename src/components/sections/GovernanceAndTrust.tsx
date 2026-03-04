"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, FileText, BarChart3, Users2 } from "lucide-react";
import Section from "../Section";

const GovernanceAndTrust = () => {
    return (
        <Section id="governance" title="Governance & Trust">
            <div className="max-w-5xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >
                        {[
                            { icon: Users2, text: "Defined community leadership" },
                            { icon: BarChart3, text: "Transparent treasury reporting" },
                            { icon: Shield, text: "Non-speculative currency model" },
                            { icon: FileText, text: "Accountability through documented processes" },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-6">
                                <div className="flex-shrink-0 w-12 h-12 bg-brand-blue/5 rounded-lg flex items-center justify-center">
                                    <item.icon className="w-6 h-6 text-brand-blue" />
                                </div>
                                <span className="text-xl font-medium text-gray-700">{item.text}</span>
                            </div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-brand-gray border border-gray-100 p-8 md:p-12 rounded-3xl relative overflow-hidden flex flex-col items-center justify-center text-center"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-full -mr-16 -mt-16 blur-2xl" />
                        <div className="inline-block p-4 bg-brand-blue/10 rounded-2xl mb-6">
                            <Shield className="w-10 h-10 text-brand-blue" />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-8">
                            “This is not a token — it’s a <span className="text-brand-blue">payment infrastructure</span>.”
                        </h3>
                        <p className="text-gray-500 font-medium">
                            PayNuq is engineered for stability and utility, not speculation.
                        </p>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
};

export default GovernanceAndTrust;
