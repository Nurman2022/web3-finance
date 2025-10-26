"use client";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function AnalyticsChart({ className }) {
    return (
        <div className={cn("relative w-full h-auto", className)}>
            <svg width="1455" height="677" viewBox="0 0 1455 677" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                {/* Left Chart Container */}
                <motion.rect
                    x="56" y="43" width="814" height="578" rx="31"
                    fill="url(#paint0_linear_42_8)"
                    stroke="#5D5D5D"
                    strokeWidth="2"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                />

                {/* Left Chart Path with Growth Animation */}
                <motion.path
                    d="M874 378.5L789 275L695 403.5L573.5 393M574 393.5L513.5 524L390.5 308L246.5 458.5L143 369.5L58 425.5"
                    stroke="#FFFFFF"
                    strokeWidth="3"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                        duration: 3,
                        ease: "easeInOut",
                        delay: 0.5
                    }}
                    style={{
                        filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.4))"
                    }}
                />

                {/* Animated dots on path points */}
                {[
                    { cx: 874, cy: 378.5 },
                    { cx: 789, cy: 275 },
                    { cx: 695, cy: 403.5 },
                    { cx: 573.5, cy: 393 },
                    { cx: 513.5, cy: 524 },
                    { cx: 390.5, cy: 308 },
                    { cx: 246.5, cy: 458.5 },
                    { cx: 143, cy: 369.5 },
                    { cx: 58, cy: 425.5 }
                ].map((point, index) => (
                    <motion.circle
                        key={index}
                        cx={point.cx}
                        cy={point.cy}
                        r="6"
                        fill="#FFFFFF"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                            duration: 0.4,
                            delay: 0.5 + (index * 0.3),
                            ease: "easeOut"
                        }}
                    >
                        <motion.animate
                            attributeName="r"
                            values="6;8;6"
                            dur="2s"
                            repeatCount="indefinite"
                        />
                    </motion.circle>
                ))}

                {/* USDT Badge with Enhanced Animation */}
                <motion.g
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                >
                    <motion.rect
                        x="635.5" y="309.5" width="66" height="29" rx="1.5"
                        fill="#2C2C2C"
                        stroke="#3C3C3C"
                        animate={{
                            boxShadow: [
                                "0 0 0 rgba(0, 212, 170, 0)",
                                "0 0 20px rgba(0, 212, 170, 0.3)",
                                "0 0 0 rgba(0, 212, 170, 0)"
                            ]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />

                    {/* USDT Text with Typewriter Effect */}
                    <motion.text
                        x="668.5"
                        y="328"
                        textAnchor="middle"
                        fill="#8C8C8C"
                        fontSize="12"
                        fontFamily="monospace"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 2 }}
                    >
                        USDT
                    </motion.text>

                    {/* Price indicator */}
                    <motion.text
                        x="668.5"
                        y="320"
                        textAnchor="middle"
                        fill="#FFFFFF"
                        fontSize="10"
                        fontFamily="monospace"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 2.5 }}
                    >
                        +12.5%
                    </motion.text>
                </motion.g>

                {/* Right Chart Container */}
                <motion.rect
                    x="916" y="43" width="774" height="578" rx="31"
                    fill="url(#paint1_linear_42_8)"
                    stroke="#5D5D5D"
                    strokeWidth="2"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                />

                {/* Right Chart Path with Upward Trend */}
                <motion.path
                    d="M914.5 398.5L980.5 314L1095 328.5L1203 459.5L1305.5 364L1431.5 395H1453"
                    stroke="#9CA3AF"
                    strokeWidth="3"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                        duration: 3.5,
                        ease: "easeInOut",
                        delay: 1
                    }}
                    style={{
                        filter: "drop-shadow(0 0 8px rgba(156, 163, 175, 0.4))"
                    }}
                />

                {/* Animated dots for right chart */}
                {[
                    { cx: 914.5, cy: 398.5 },
                    { cx: 980.5, cy: 314 },
                    { cx: 1095, cy: 328.5 },
                    { cx: 1203, cy: 459.5 },
                    { cx: 1305.5, cy: 364 },
                    { cx: 1431.5, cy: 395 }
                ].map((point, index) => (
                    <motion.circle
                        key={index}
                        cx={point.cx}
                        cy={point.cy}
                        r="6"
                        fill="#9CA3AF"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                            duration: 0.4,
                            delay: 1 + (index * 0.4),
                            ease: "easeOut"
                        }}
                    >
                        <motion.animate
                            attributeName="r"
                            values="6;9;6"
                            dur="2.5s"
                            repeatCount="indefinite"
                        />
                    </motion.circle>
                ))}

                {/* Growth Indicators */}
                <motion.g
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 3 }}
                >
                    {/* Left chart growth indicator */}
                    <motion.g
                        animate={{
                            y: [0, -5, 0]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <motion.polygon
                            points="460,200 470,180 480,200"
                            fill="#FFFFFF"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: 3.5 }}
                        />
                        <motion.text
                            x="470"
                            y="175"
                            textAnchor="middle"
                            fill="#FFFFFF"
                            fontSize="14"
                            fontWeight="bold"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 4 }}
                        >
                            +24.8%
                        </motion.text>
                    </motion.g>

                    {/* Right chart growth indicator */}
                    <motion.g
                        animate={{
                            y: [0, -5, 0]
                        }}
                        transition={{
                            duration: 2.2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5
                        }}
                    >
                        <motion.polygon
                            points="1200,200 1210,180 1220,200"
                            fill="#9CA3AF"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: 4 }}
                        />
                        <motion.text
                            x="1210"
                            y="175"
                            textAnchor="middle"
                            fill="#9CA3AF"
                            fontSize="14"
                            fontWeight="bold"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 4.5 }}
                        >
                            +18.2%
                        </motion.text>
                    </motion.g>
                </motion.g>

                {/* Floating particles for enhanced effect */}
                {Array.from({ length: 8 }).map((_, index) => (
                    <motion.circle
                        key={index}
                        cx={200 + index * 150}
                        cy={400 + Math.sin(index) * 100}
                        r="2"
                        fill="rgba(255, 255, 255, 0.3)"
                        animate={{
                            y: [0, -20, 0],
                            opacity: [0.3, 0.8, 0.3]
                        }}
                        transition={{
                            duration: 3 + index * 0.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.3
                        }}
                    />
                ))}

                {/* Grid lines animation */}
                <motion.g
                    stroke="rgba(93, 93, 93, 0.3)"
                    strokeWidth="1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    {/* Horizontal grid lines */}
                    {Array.from({ length: 6 }).map((_, index) => (
                        <motion.line
                            key={index}
                            x1="56"
                            y1={100 + index * 80}
                            x2="870"
                            y2={100 + index * 80}
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{
                                duration: 1,
                                delay: 0.5 + index * 0.1
                            }}
                        />
                    ))}

                    {/* Vertical grid lines */}
                    {Array.from({ length: 8 }).map((_, index) => (
                        <motion.line
                            key={index}
                            x1={100 + index * 100}
                            y1="43"
                            x2={100 + index * 100}
                            y2="621"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{
                                duration: 1,
                                delay: 0.8 + index * 0.1
                            }}
                        />
                    ))}
                </motion.g>

                {/* Right chart grid */}
                <motion.g
                    stroke="rgba(93, 93, 93, 0.3)"
                    strokeWidth="1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    {Array.from({ length: 6 }).map((_, index) => (
                        <motion.line
                            key={index}
                            x1="916"
                            y1={100 + index * 80}
                            x2="1690"
                            y2={100 + index * 80}
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{
                                duration: 1,
                                delay: 1 + index * 0.1
                            }}
                        />
                    ))}
                </motion.g>

                {/* Gradients */}
                <defs>
                    <linearGradient id="paint0_linear_42_8" x1="838" y1="598" x2="263.5" y2="242.5" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#161515" />
                        <stop offset="1" stopColor="#3F3F3F" />
                    </linearGradient>

                    <linearGradient id="paint1_linear_42_8" x1="1208.7" y1="693.419" x2="1538.94" y2="132.22" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#161515" />
                        <stop offset="1" stopColor="#353535" />
                    </linearGradient>

                    <clipPath id="clip0_42_8">
                        <rect width="1455" height="677" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
}