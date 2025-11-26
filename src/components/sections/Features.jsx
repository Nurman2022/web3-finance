"use client";
import { motion } from "motion/react";
import { AnalyticsChart } from "../illustrations/AnalyticsChart";
import { CardStackLoop } from "../illustrations/CardStackLoop";
import { ShieldFlowAnimation } from "../illustrations/ShieldFlowAnimation";
import { RadarPulse } from "../illustrations/RadarPulse";

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
        <div className="py-20 relative">
            <div className="relative z-10 max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="mb-4">
                        <span className="inline-flex items-center rounded-full border border-neutral-700 bg-neutral-900/50 px-4 py-2 text-sm text-neutral-300">
                            Our Features
                        </span>
                    </div>
                    <h2 className="md:text-5xl mb-4 bg-gradient-to-r from-neutral-500 via-white to-neutral-500 bg-clip-text py-8 text-4xl font-light text-transparent lg:text-6xl">
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
                                    <div className="relative h-full w-full min-h-[300px] rounded-3xl border border-neutral-800 overflow-hidden transition-all duration-700 ease-in-out bg-gradient-to-br from-[#292929] to-[#050505] from-20% group-hover:bg-gradient-to-t group-hover:from-40%">
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