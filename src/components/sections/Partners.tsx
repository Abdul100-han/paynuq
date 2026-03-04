"use client";

import React from "react";
import { motion } from "framer-motion";
import Section from "../Section";
import PartnerMarquee from "../PartnerMarquee";

const partners = {
    protocol: [
        { name: "Encointer", desc: "Proof-of-personhood + issuance" }
    ],
    treasury: [
        { name: "USDC", desc: "USDC-backed reserves" }
    ],
    supportedBy: [
        { name: "Community Managers" },
        { name: "Technical Partners" },
        { name: "Local Business Ecosystem" }
    ]
};

const Partners = () => {
    return (
        <Section title="Partners & Tech Stack">
            <div className="max-w-6xl mx-auto px-4">
                {/* Infinite Scrolling Marquee */}
                <div className="mb-20">
                    <PartnerMarquee />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Protocol */}
                    <div className="text-center md:text-left">
                        <h4 className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-8">Protocol</h4>
                        <div className="space-y-6">
                            {partners.protocol.map((p) => (
                                <motion.div
                                    key={p.name}
                                    whileHover={{ y: -2 }}
                                    className="p-6 rounded-2xl bg-brand-gray/50 border border-gray-100 flex flex-col items-center md:items-start group"
                                >
                                    <div className="w-16 h-16 bg-white rounded-xl mb-4 shadow-sm flex items-center justify-center grayscale group-hover:grayscale-0 transition-all">
                                        <span className="text-xl font-black text-gray-400 group-hover:text-brand-blue">{p.name[0]}</span>
                                    </div>
                                    <div className="font-bold text-gray-900 mb-1">{p.name}</div>
                                    <div className="text-xs text-gray-500 font-medium">{p.desc}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Treasury */}
                    <div className="text-center md:text-left">
                        <h4 className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-8">Treasury Backbone</h4>
                        <div className="space-y-6">
                            {partners.treasury.map((p) => (
                                <motion.div
                                    key={p.name}
                                    whileHover={{ y: -2 }}
                                    className="p-6 rounded-2xl bg-brand-gray/50 border border-gray-100 flex flex-col items-center md:items-start group"
                                >
                                    <div className="w-16 h-16 bg-white rounded-xl mb-4 shadow-sm flex items-center justify-center grayscale group-hover:grayscale-0 transition-all">
                                        <span className="text-xl font-black text-gray-400 group-hover:text-brand-blue">{p.name[0]}</span>
                                    </div>
                                    <div className="font-bold text-gray-900 mb-1">{p.name}</div>
                                    <div className="text-xs text-gray-500 font-medium">{p.desc}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Supported By */}
                    <div className="text-center md:text-left">
                        <h4 className="text-sm font-bold text-brand-blue uppercase tracking-widest mb-8">Supported By</h4>
                        <div className="space-y-4">
                            {partners.supportedBy.map((p) => (
                                <motion.div
                                    key={p.name}
                                    whileHover={{ x: 4 }}
                                    className="p-4 rounded-xl border border-gray-100 flex items-center gap-4 group"
                                >
                                    <div className="w-10 h-10 bg-brand-gray rounded-lg flex items-center justify-center grayscale group-hover:grayscale-0 transition-all">
                                        <span className="text-sm font-bold text-gray-400 group-hover:text-brand-blue">{p.name[0]}</span>
                                    </div>
                                    <span className="font-bold text-gray-700 text-sm group-hover:text-brand-blue transition-colors">{p.name}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Partners;
