"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Twitter, Send, Facebook, Instagram } from "lucide-react";

export function Footer({ className }) {
    const [email, setEmail] = useState("");

    const footerLinks = {
        Product: [
            { name: "Invest Your Future", href: "#" },
            { name: "Find Our Stocks", href: "#" },
            { name: "Find Our Crypto", href: "#" },
            { name: "Earn Extra Money", href: "#" },
            { name: "Bank Smarter", href: "#" },
        ],
        "Who We Are": [
            { name: "About Us", href: "#" },
            { name: "Careers", href: "#" },
            { name: "News And Media", href: "#" },
            { name: "Financial Statement", href: "#" },
        ],
        Support: [
            { name: "FAQs", href: "#" },
            { name: "Contacts", href: "#" },
            { name: "Mobile", href: "#" },
            { name: "Windows & Mac", href: "#" },
            { name: "Desktop Version", href: "#" },
        ],
        Documentation: [
            { name: "Public URLs", href: "#" },
            { name: "Social Rooms", href: "#" },
            { name: "User Guide", href: "#" },
            { name: "Privacy Policy", href: "#" },
        ],
    };

    const socialLinks = [
        { name: "Twitter", icon: Twitter, href: "#" },
        { name: "Telegram", icon: Send, href: "#" },
        { name: "Facebook", icon: Facebook, href: "#" },
        { name: "Instagram", icon: Instagram, href: "#" },
    ];

    const handleSubscribe = (e) => {
        e.preventDefault();
        console.log("Subscribing email:", email);
        setEmail("");
    };

    return (
        <footer className={cn("bg-gradient-to-t from-[#171717] to-[#1d1d1d] relative flex items-center w-full justify-center overflow-hidden")}>
            <div
                className={cn(
                    "absolute inset-0",
                    "[background-size:150px_150px]",
                    "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                    "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
                )} />
            <div className="mx-auto max-w-7xl px-4 py-14 z-20">
                <div className="grid grid-cols-1 lg:grid-cols-8 gap-8 lg:gap-12">
                    <div className="lg:col-span-3 bg-[#202020] rounded-2xl p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <img
                                src="/image/w3f-logo.png"
                                alt="logo"
                                width={45}
                                height={45} />
                            <span className="text-white text-xl font-medium">Web3Finance.</span>
                        </div>

                        <h3 className="text-white text-xl font-medium mb-3">
                            Stay Ahead with Webtrix Insights
                        </h3>
                        <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
                            Be the first to know about new features, upcoming events, and everything happening in the
                            world of Webtrix.
                        </p>

                        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 sm:gap-0">
                            <div className="flex-1">
                                <input
                                    type="email"
                                    placeholder="Enter Your Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-8 py-6 bg-[#2b2b2b] rounded-xl text-white placeholder-neutral-400 transition-colors"
                                    required
                                />
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="px-8 py-6 ml-0 sm:-ml-8 bg-white text-black rounded-xl font-medium hover:bg-neutral-200 transition-colors whitespace-nowrap"
                            >
                                Subscribe
                            </motion.button>
                        </form>
                    </div>

                    {/* Links Sections */}
                    <div className="lg:col-span-5 bg-[#202020] rounded-2xl p-6">
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
                <div className="bg-[#202020] mt-12 rounded-2xl p-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        {/* Copyright */}
                        <div className="text-neutral-400 text-sm">
                            Copyright 2024. All Right Reserved
                        </div>

                        {/* Social Links */}
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

                        {/* Legal Links */}
                        <div className="flex items-center gap-6">
                            <motion.a
                                href="#"
                                whileHover={{ y: -2 }}
                                className="text-neutral-400 text-sm hover:text-white transition-colors"
                            >
                                Privacy Policy
                            </motion.a>
                            <motion.a
                                href="#"
                                whileHover={{ y: -2 }}
                                className="text-neutral-400 text-sm hover:text-white transition-colors"
                            >
                                Terms of Service
                            </motion.a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}