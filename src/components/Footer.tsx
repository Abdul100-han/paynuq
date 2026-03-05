import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100 py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 bg-brand-blue rounded-md flex items-center justify-center">
                                <span className="text-white font-bold text-xl">P</span>
                            </div>
                            <span className="text-xl font-bold text-brand-blue tracking-tight">PayNuq</span>
                        </Link>
                        <p className="text-gray-500 max-w-sm mb-6">
                            Strengthening Community, Empowering Lives. A community-centric payment architecture for local economies.
                        </p>
                        <div className="text-sm font-medium text-gray-400">
                            © 2026 PayNuq. All rights reserved.
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold text-brand-blue uppercase tracking-wider mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            {["About", "How It Works", "Impact", "Governance", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-600 hover:text-brand-blue transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold text-brand-blue uppercase tracking-wider mb-6">Contact</h4>
                        <ul className="space-y-4">
                            <li>
                                <a href="mailto:Info@paynuq.xyz" className="text-gray-600 hover:text-brand-blue transition-colors">
                                    Info@paynuq.xyz
                                </a>
                            </li>
                            <li className="text-gray-600">
                                +234 707 056 3194
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
