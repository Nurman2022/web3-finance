"use client";
import { motion } from "motion/react";
import { AnalyticsChart } from "../svg/AnalyticsChart";
import { CardStackLoop } from "../svg/CardStackLoop";
import { ShieldFlowAnimation } from "../svg/ShieldFlowAnimation";
import { RadarPulse } from "../svg/RadarPulse";

export function Features() {
    const features = [
        {
            title: "Real-Time Analytics",
            description: "Gain insights without compromising real-time analytics. Track market trends, monitor portfolio performance and make data-driven decisions with ease.",
            component: <AnalyticsChart className="w-full max-w-sm" />,
            gridClass: "col-span-2 row-span-1"
        },
        {
            title: "Advanced Security",
            description: "Webtnx uses advanced encryption and multi-layered security to protect your assets ard personal information from threats.",
            component: <ShieldFlowAnimation className="w-full max-w-xs" />,
            gridClass: "col-span-1 row-span-1"
        },
        {
            title: "Ecosystem & Partnerships",
            description: "Foster a thriving ecosystem through strategic partnerships, community engagement and support for innovative projects.",
            component: <RadarPulse className="w-full max-w-xs" />,
            gridClass: "col-span-1 row-span-1"
        },
        {
            title: "Secure Payment Solutions",
            description: "Manage and trade with our premium crypto cards. Experience seamless transactions designed for the future of finance.",
            component: <CardStackLoop className="left-0 top-72" />,
            gridClass: "col-span-2 row-span-1"
        },
    ];

    return (
        <div className="py-20 bg-black relative">
            <div className="relative z-10 max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="mb-4">
                        <span className="inline-flex items-center rounded-full border border-neutral-700 bg-neutral-900/50 px-4 py-2 text-sm text-neutral-300">
                            Our Features
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-light text-white mb-4">
                        Innovative Features of Webtrix
                    </h2>
                    <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                        Our platform combines advanced security, real-time analytics, and user-friendly design to provide an
                        unparalleled trading experience.
                    </p>
                </div>

                {/* Features Bento Grid */}
                <div className="flex h-full w-full items-center justify-center">
                    <div className="grid h-full w-full gap-4 p-2 grid-cols-3 grid-rows-2 rounded-lg max-w-6xl mx-auto">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.1 + index * 0.1 }}
                                viewport={{ once: true }}
                                className={feature.gridClass}
                            >
                                <div className="relative group h-full w-full">
                                    <div className="relative h-full w-full min-h-[300px] rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-900/50 to-neutral-950/80 overflow-hidden backdrop-blur-sm hover:border-neutral-700 transition-all duration-500 hover:scale-[1.02]">
                                        {/* Background Pattern */}
                                        <div className="absolute inset-0 opacity-5">
                                            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_35%,rgba(255,255,255,.1)_50%,transparent_65%)] bg-[length:20px_20px]"></div>
                                        </div>

                                        <div className="relative z-10 h-full flex flex-col p-6">
                                            <div className="mb-4">
                                                <h3 className="text-xl font-light text-white mb-2">{feature.title}</h3>
                                                <p className="text-neutral-400 text-xs leading-relaxed">
                                                    {feature.description}
                                                </p>
                                            </div>

                                            <div className="flex-1 flex items-center justify-center min-h-0">
                                                <div className="w-full h-full flex items-center justify-center">
                                                    {feature.component}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Hover Glow Effect */}
                                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}