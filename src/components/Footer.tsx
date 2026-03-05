import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100 py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <Image
                                src="/paynuglogo.jpeg"
                                alt="PayNuq Logo"
                                width={120}
                                height={34}
                                className="h-8.5 w-auto"
                            />
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
                    <div className="flex items-center gap-4">
                        <a
                            href="https://x.com/PayNuq"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-brand-blue transition-colors"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
