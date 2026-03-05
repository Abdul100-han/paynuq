import Link from "next/link";
import Image from "next/image";
import { Twitter } from "lucide-react";

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
                                width={280}
                                height={80}
                                className="h-20 w-auto"
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
                                <a href="mailto:paynuq@gmail.com" className="text-gray-600 hover:text-brand-blue transition-colors">
                                    paynuq@gmail.com
                                </a>
                            </li>
                            <li className="text-gray-600">
                                +234 707 056 3194
                            </li>
                            <li className="pt-2">
                                <a
                                    href="https://x.com/PayNuq"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Follow PayNuq on X"
                                    className="flex items-center gap-2 text-gray-600 hover:text-brand-blue transition-colors"
                                >
                                    <Twitter className="w-5 h-5" />
                                    <span className="text-sm">@PayNuq</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
