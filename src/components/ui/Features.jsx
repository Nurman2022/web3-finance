"use client";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { AnalyticsChart } from "../svg/AnalyticsChart";
import { CardStackAnimation } from "../svg/CardStackAnimation";
import { EcosystemRadar } from "../svg/EcosystemRadar";
import { ShieldFlowAnimation } from "../svg/ShieldFlowAnimation";

export function Features({ className }) {
    const features = [
        {
            id: 1,
            title: "Real-Time Analytics",
            description: "Gain insights without compromising real-time analytics. Track market trends, monitor portfolio performance and make data-driven decisions with ease.",
            component: "analytics",
            size: "large"
        },
        {
            id: 2,
            title: "Advanced Security",
            description: "We use state-of-the-art encryption and multi-layered security to protect your assets and personal information from threats.",
            component: "security",
            size: "large"
        },
        {
            id: 3,
            title: "Ecosystem & Partnerships",
            description: "Foster a thriving ecosystem through strategic partnerships, community engagement and support for innovative projects.",
            component: "ecosystem",
            size: "large"
        },
        {
            id: 4,
            title: "Secure Payment Solutions",
            description: "Manage and trade with our premium crypto cards. Experience seamless transactions designed for the future of finance.",
            component: "cards",
            size: "large"
        },
    ];

    return (
        <div className={cn("py-20 bg-black relative", className)}>
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-black to-neutral-950"></div>

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
                        {/* Real-Time Analytics - 2 columns, 1 row */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="col-span-2 row-span-1"
                        >
                            <FeatureCard feature={features[0]} index={0} />
                        </motion.div>

                        {/* Advanced Security - 1 column, 1 row */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="col-span-1 row-span-1"
                        >
                            <FeatureCard feature={features[1]} index={1} />
                        </motion.div>

                        {/* Ecosystem & Partnerships - 1 column, 1 row */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="col-span-1 row-span-1"
                        >
                            <FeatureCard feature={features[2]} index={2} />
                        </motion.div>

                        {/* Secure Payment Solutions - 2 columns, 1 row */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                            className="col-span-2 row-span-1"
                        >
                            <FeatureCard feature={features[3]} index={3} />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function FeatureCard({ feature, index }) {
    return (
        <div className="relative group h-full w-full">
            <div className="relative h-full w-full min-h-[300px] rounded-3xl border border-neutral-800 bg-gradient-to-br from-neutral-900/50 to-neutral-950/80 overflow-hidden backdrop-blur-sm hover:border-neutral-700 transition-all duration-500 hover:scale-[1.02]">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_35%,rgba(255,255,255,.1)_50%,transparent_65%)] bg-[length:20px_20px]"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col p-6">
                    {/* Header */}
                    <div className="mb-4">
                        <h3 className="text-xl font-light text-white mb-2">{feature.title}</h3>
                        <p className="text-neutral-400 text-xs leading-relaxed">
                            {feature.description}
                        </p>
                    </div>

                    {/* Animation Component */}
                    <div className="flex-1 flex items-center justify-center min-h-0">
                        {feature.component === "analytics" && (
                            <div className="w-full h-full flex items-center justify-center">
                                <AnalyticsChart className="w-full max-w-sm scale-75" />
                            </div>
                        )}
                        {feature.component === "security" && (
                            <div className="w-full h-full flex items-center justify-center">
                                <ShieldFlowAnimation className="w-full max-w-xs scale-75" />
                            </div>
                        )}
                        {feature.component === "ecosystem" && (
                            <div className="w-full h-full flex items-center justify-center">
                                <EcosystemRadar className="w-full max-w-xs scale-75" />
                            </div>
                        )}
                        {feature.component === "cards" && (
                            <div className="w-full h-full flex items-center justify-center">
                                <CardStackAnimation className="w-full max-w-sm scale-75" />
                            </div>
                        )}
                    </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
        </div>
    );
}