"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import Section from "../Section";
import Button from "../ui/Button";

const Contact = () => {
    return (
        <Section id="contact" title="Let’s Collaborate" dark>
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-xl text-gray-600 mb-12 leading-relaxed font-medium">
                            For pilots, research, and collaboration, reach out to our team.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center border border-gray-100 shadow-sm group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                                    <Mail className="w-6 h-6 text-brand-blue group-hover:text-white" />
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-1">Email Us</div>
                                    <a href="mailto:Info@paynuq.com" className="text-xl font-bold text-gray-900 hover:text-brand-blue transition-colors">Info@paynuq.com</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center border border-gray-100 shadow-sm group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                                    <Phone className="w-6 h-6 text-brand-blue group-hover:text-white" />
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-1">Call Us</div>
                                    <a href="tel:+2347070563194" className="text-xl font-bold text-gray-900 hover:text-brand-blue transition-colors">+234 707 056 3194</a>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16 p-8 rounded-3xl bg-brand-blue/5 border border-brand-blue/10">
                            <h4 className="text-lg font-bold text-brand-blue mb-4">Location</h4>
                            <p className="text-gray-600 flex items-start gap-2 font-medium">
                                <MapPin className="w-5 h-5 text-brand-blue mt-1 flex-shrink-0" />
                                Serving local communities through digital public infrastructure.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-xl"
                    >
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-bold text-gray-700">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 outline-none transition-all"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="org" className="text-sm font-bold text-gray-700">Organization</label>
                                    <input
                                        type="text"
                                        id="org"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 outline-none transition-all"
                                        placeholder="Your organization"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-bold text-gray-700">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 outline-none transition-all"
                                    placeholder="name@organization.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-bold text-gray-700">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/10 outline-none transition-all resize-none"
                                    placeholder="Tell us about your project or interest..."
                                />
                            </div>
                            <Button type="submit" className="w-full" size="lg">Send Message</Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
