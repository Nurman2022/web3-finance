"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { footerLinks, socialLinks, footerConfig } from "@/data/footer";

export function Footer({ className }) {
    const [email, setEmail] = useState("");

    const handleSubscribe = (e) => {
        e.preventDefault();
        console.log("Subscribing email:", email);
        setEmail("");
    };

    return (
        <footer className="bg-gradient-to-t from-neutral-950 to-neutral-900/95 relative flex items-center w-full justify-center overflow-hidden border-t-2 border-neutral-700/80">
            <div
                className="absolute inset-0 [background-size:150px_150px] [background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]" />
            <div className="mx-auto max-w-7xl px-4 py-14 z-20">
                <div className="grid grid-cols-1 lg:grid-cols-8 gap-8 lg:gap-12">
                    <div className="lg:col-span-3 bg-dark-section/75 rounded-2xl p-6 shadow-[0px_-2px_15px_5px_rgba(0,_0,_0,_0.1)]">
                        <div className="flex items-center gap-2 mb-4">
                            <img
                                src="/image/w3f-logo.png"
                                alt="logo"
                                width={45}
                                height={45} />
                            <span className="text-white text-xl font-medium">Web3Finance.</span>
                        </div>

                        <h3 className="text-white text-xl font-medium mb-3">
                            {footerConfig.newsletter.title}
                        </h3>
                        <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
                            {footerConfig.newsletter.description}
                        </p>

                        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 sm:gap-0">
                            <div className="flex-1">
                                <input
                                    type="email"
                                    placeholder={footerConfig.newsletter.placeholder}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-8 py-6 bg-dark-input rounded-xl text-white placeholder-neutral-400 transition-colors"
                                    required
                                />
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="px-8 py-6 ml-0 sm:-ml-8 bg-white text-black rounded-xl font-medium hover:bg-neutral-200 transition-colors whitespace-nowrap"
                            >
                                {footerConfig.newsletter.buttonText}
                            </motion.button>
                        </form>
                    </div>

                    <div className="lg:col-span-5 bg-dark-section/75 rounded-2xl p-6 shadow-[0px_-2px_15px_5px_rgba(0,_0,_0,_0.1)]">

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {Object.entries(footerLinks).map(([category, links]) => (
                                <div key={category}>
                                    <h4 className="text-white font-medium mb-4">{category}</h4>
                                    <ul className="space-y-3">
                                        {links.map((link) => (
                                            <li key={link.name}>
                                                <motion.a
                                                    href={link.href}
                                                    whileHover={{ x: 4 }}
                                                    className="text-neutral-400 text-sm hover:text-white transition-colors inline-block"
                                                >
                                                    {link.name}
                                                </motion.a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="bg-dark-section mt-12 rounded-2xl p-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="text-neutral-400 text-sm">
                            {footerConfig.copyright}
                        </div>

                        <div className="flex items-center gap-4">
                            {socialLinks.map((social) => {
                                const IconComponent = social.icon;
                                return (
                                    <motion.a
                                        key={social.name}
                                        href={social.href}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="w-10 h-10 rounded-full flex items-center justify-center hover:text-black hover:bg-white text-white transition-colors"
                                        aria-label={social.name}
                                    >
                                        <IconComponent size={20} />
                                    </motion.a>
                                );
                            })}
                        </div>
                        <div className="flex items-center gap-6">
                            {footerConfig.legalLinks.map((link, idx) => (
                                <motion.a
                                    key={idx}
                                    href={link.href}
                                    whileHover={{ y: -2 }}
                                    className="text-neutral-400 text-sm hover:text-white transition-colors"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}