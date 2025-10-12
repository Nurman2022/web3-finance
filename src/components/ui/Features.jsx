"use client";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function Features({ className }) {
    const features = [
        {
            id: 1,
            title: "Real-Time Analytics",
            description: "Gain insights without compromising real-time analytics. Track market trends, monitor portfolio performance and make data-driven decisions with ease.",
            icon: "📊",
            chart: "USDT",
            chartData: [40, 60, 45, 70, 55, 80, 65, 90, 75],
        },
        {
            id: 2,
            title: "Advanced Security",
            description: "We use state-of-the-art encryption and multi-layered security to protect your assets and personal information from threats.",
            icon: "🔒",
            securityLevel: 95,
        },
        {
            id: 3,
            title: "Ecosystem and Partnerships",
            description: "Foster a thriving ecosystem through strategic partnerships, community engagement and support for innovative projects.",
            icon: "🤝",
            networkNodes: 6,
        },
        {
            id: 4,
            title: "Multi-Currency Support",
            description: "Manage and trade a wide range of cryptocurrencies from a single platform. Webtrix supports all major digital currencies, providing seamless trading experience.",
            icon: "💰",
            currencies: ["BTC", "ETH", "XRP", "ADA"],
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

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                        <FeatureCard key={feature.id} feature={feature} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function FeatureCard({ feature, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative group"
        >
            <div className="relative h-80 rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900/50 to-neutral-950/50 p-6 overflow-hidden backdrop-blur-sm hover:border-neutral-700 transition-all duration-300">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_35%,rgba(255,255,255,.1)_50%,transparent_65%)] bg-[length:20px_20px]"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-4">
                        <div className="text-2xl">{feature.icon}</div>
                        <h3 className="text-xl font-medium text-white">{feature.title}</h3>
                    </div>

                    {/* Description */}
                    <p className="text-neutral-400 text-sm leading-relaxed mb-6 flex-1">
                        {feature.description}
                    </p>

                    {/* Visual Element */}
                    <div className="mt-auto">
                        {feature.id === 1 && <AnalyticsChart data={feature.chartData} />}
                        {feature.id === 2 && <SecurityIndicator level={feature.securityLevel} />}
                        {feature.id === 3 && <NetworkVisualization nodes={feature.networkNodes} />}
                        {feature.id === 4 && <CurrencyGrid currencies={feature.currencies} />}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

// Analytics Chart Component
function AnalyticsChart({ data }) {
    const maxValue = Math.max(...data);

    return (
        <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-neutral-400">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span>USDT</span>
            </div>
            <div className="flex items-end gap-1 h-16">
                {data.map((value, i) => (
                    <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${(value / maxValue) * 100}%` }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="flex-1 bg-gradient-to-t from-blue-600 to-blue-400 rounded-sm min-h-[4px]"
                    />
                ))}
            </div>
        </div>
    );
}

// Security Indicator Component
function SecurityIndicator({ level }) {
    return (
        <div className="space-y-3">
            <div className="flex items-center justify-center">
                <div className="relative w-16 h-16">
                    <div className="absolute inset-0 rounded-full border-4 border-neutral-700"></div>
                    <motion.div
                        initial={{ strokeDasharray: "0 100" }}
                        animate={{ strokeDasharray: `${level} 100` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="absolute inset-0"
                    >
                        <svg className="w-full h-full transform -rotate-90">
                            <circle
                                cx="50%"
                                cy="50%"
                                r="28"
                                fill="none"
                                stroke="rgb(34 197 94)"
                                strokeWidth="4"
                                strokeDasharray={`${level} 100`}
                                strokeLinecap="round"
                            />
                        </svg>
                    </motion.div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white text-lg font-medium">🔒</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Network Visualization Component
function NetworkVisualization({ nodes }) {
    return (
        <div className="relative h-20">
            <div className="absolute inset-0 flex items-center justify-center">
                {/* Center node */}
                <div className="w-6 h-6 bg-blue-500 rounded-full relative z-10"></div>

                {/* Surrounding nodes */}
                {Array.from({ length: nodes }).map((_, i) => {
                    const angle = (i * 360) / nodes;
                    const radius = 35;
                    const x = Math.cos((angle * Math.PI) / 180) * radius;
                    const y = Math.sin((angle * Math.PI) / 180) * radius;

                    return (
                        <motion.div
                            key={i}
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                            className="absolute w-3 h-3 bg-neutral-400 rounded-full"
                            style={{
                                transform: `translate(${x}px, ${y}px)`,
                            }}
                        />
                    );
                })}

                {/* Connection lines */}
                {Array.from({ length: nodes }).map((_, i) => {
                    const angle = (i * 360) / nodes;
                    const rotation = angle - 90;

                    return (
                        <motion.div
                            key={`line-${i}`}
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.5, delay: i * 0.05 }}
                            className="absolute w-8 h-px bg-neutral-600 origin-left"
                            style={{
                                transform: `rotate(${rotation}deg)`,
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
}

// Currency Grid Component
function CurrencyGrid({ currencies }) {
    return (
        <div className="space-y-3">
            <div className="grid grid-cols-2 gap-2">
                {currencies.map((currency, i) => (
                    <motion.div
                        key={currency}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        className="flex items-center justify-center h-8 bg-neutral-800/50 rounded border border-neutral-700 text-neutral-300 text-xs font-medium"
                    >
                        {currency}
                    </motion.div>
                ))}
            </div>
            <div className="flex items-center gap-1">
                {Array.from({ length: 3 }).map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 1, delay: i * 0.2, repeat: Infinity, repeatDelay: 1 }}
                        className="w-1 h-1 bg-blue-400 rounded-full"
                    />
                ))}
            </div>
        </div>
    );
}