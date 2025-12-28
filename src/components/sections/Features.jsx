"use client";
import { motion } from "motion/react";
import { CardStack } from "../illustrations/card-stack";
import { ShieldFlowAnimation } from "../illustrations/shield-flow";
import { Activity, Shield, UsersRound, CreditCard } from "lucide-react";
import { OrbitUsers } from "../illustrations/orbit-users";
import { LineChart } from "../illustrations/line-chart";

export function Features() {
    const features = [
        {
            title: "Real-Time Analytics",
            description: "Gain insights without compromising real-time analytics. Track market trends, monitor portfolio performance and make data-driven decisions with ease.",
            component: <LineChart />,
            icon: Activity,
            gridClass: "col-span-1 md:col-span-3 row-span-1"
        },
        {
            title: "Advanced Security",
            description: "Webtnx uses advanced encryption and multi-layered security to protect your assets ard personal information from threats.",
            component: <ShieldFlowAnimation />,
            icon: Shield,
            gridClass: "col-span-1 md:col-span-2 row-span-1"
        },
        {
            title: "Ecosystem & Partnerships",
            description: "Foster a thriving ecosystem through strategic partnerships, community engagement and support for innovative projects.",
            component: <OrbitUsers />,
            icon: UsersRound,
            gridClass: "col-span-1 md:col-span-2 row-span-1"
        },
        {
            title: "Secure Payment Solutions",
            description: "Manage and trade with our premium crypto cards. Experience seamless transactions designed for the future of finance.",
            component: <CardStack />,
            icon: CreditCard,
            gridClass: "col-span-1 md:col-span-3 row-span-1"
        },
    ];

    return (
        <div className="relative z-20 max-w-7xl mx-auto px-4 py-40">
            <div className="text-center mb-16">
                <span className="inline-flex mb-4 items-center rounded-full border border-dark-grid bg-neutral-900/50 px-4 py-2 text-sm text-neutral-300">
                    Our Features
                </span>
                <h2 className="md:text-5xl mb-4 bg-gradient-to-r from-neutral-500 via-white to-neutral-500 bg-clip-text py-8 text-4xl font-normal text-transparent lg:text-6xl">
                    Innovative Features of Webtrix
                </h2>
                <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                    Our platform combines advanced security, real-time analytics, and user-friendly design to provide an
                    unparalleled trading experience.
                </p>
            </div>
            <div className="flex h-full w-full items-center justify-center">
                <div className="grid h-full w-full gap-4 p-2 grid-cols-1 md:grid-cols-5 md:grid-rows-2 rounded-lg max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 + index * 0.1 }}
                            viewport={{ once: true }}
                            className={feature.gridClass}
                        >
                            <div className="relative group h-full w-full md:min-h-80 min-h-[30rem] rounded-3xl border border-neutral-800 overflow-hidden bg-dark-bg-secondary">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-neutral-200/15 group-hover:bg-neutral-200/20 rounded-full blur-[100px] transition-all duration-700 ease-in-out" />
                                <div className="relative h-full flex flex-col p-6">
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="size-12 border border-white/15 rounded-lg inline-flex items-center justify-center flex-shrink-0 bg-neutral-200/10">
                                            <feature.icon className="text-white size-5" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-normal text-white mb-2">{feature.title}</h3>
                                            <p className="text-neutral-400 text-xs font-normal leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex-1 flex items-center justify-center min-h-0">
                                        <div className="w-full h-full flex items-center justify-center">
                                            {feature.component}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}