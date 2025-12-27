"use client";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useId } from "react";

export function ShieldFlowAnimation({ className }) {
    const beam1Id = useId();
    const beam2Id = useId();
    const beam3Id = useId();
    const beam4Id = useId();
    const beam5Id = useId();

    return (
        <div className={cn("w-full h-full", className)}>
            <svg width="1448" height="1044" viewBox="0 0 1448 1044" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                <path
                    d="M1031 379H1178.91L1440.67 625.36"
                    stroke="#898989"
                    strokeWidth="3"
                    opacity="0.3"
                />
                <path
                    d="M401.269 379H264.091L0 612.762"
                    stroke="#898989"
                    strokeWidth="3"
                    opacity="0.3"
                />
                <line
                    x1="727" y1="628" x2="727" y2="1044"
                    stroke="#898989"
                    strokeWidth="3"
                    opacity="0.3"
                />
                <line
                    x1="412.003" y1="308.315" x2="0.468852" y2="310.181"
                    stroke="#898989"
                    strokeWidth="3"
                    opacity="0.3"
                />
                <line
                    x1="1031" y1="309.176" x2="1447.2" y2="307.31"
                    stroke="#898989"
                    strokeWidth="3"
                    opacity="0.3"
                />

                <path
                    d="M1031 379H1178.91L1440.67 625.36"
                    stroke={`url(#${beam1Id})`}
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                />

                <path
                    d="M401.269 379H264.091L0 612.762"
                    stroke={`url(#${beam2Id})`}
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                />

                <path
                    d="M 727 628 L 727 1044"
                    stroke={`url(#${beam3Id})`}
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                />

                <path
                    d="M 412.003 308.315 L 0.468852 310.181"
                    stroke={`url(#${beam4Id})`}
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                />

                <path
                    d="M 1031 309.176 L 1447.2 307.31"
                    stroke={`url(#${beam5Id})`}
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                />

                <motion.rect
                    x="405.468" y="0" width="625.233" height="625.233" rx="75"
                    fill="url(#paint0_radial_28_2)"
                    stroke="url(#rotatingBeamGradient)"
                    strokeWidth="4"
                    strokeDasharray="150 2350"
                    strokeLinecap="round"
                    opacity="0.9"
                    initial={{ strokeDashoffset: 0 }}
                    animate={{ strokeDashoffset: -2500 }}
                    transition={{
                        duration: 6,
                        ease: "linear",
                        repeat: Infinity
                    }}
                />

                <rect
                    x="506.252" y="94.2516" width="436.73" height="436.73" rx="75"
                    fill="url(#paint1_radial_28_2)"
                    opacity="0.8"
                />

                <rect
                    x="595.837" y="187.57" width="242.628" height="242.628" rx="61"
                    fill="#D9D9D9"
                    opacity="0.9"
                />

                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M713.769 255.595C716.25 254.665 718.985 254.665 721.466 255.595L759.843 269.986C761.934 270.77 763.735 272.173 765.007 274.008C766.279 275.843 766.96 278.022 766.96 280.255V309.657C766.96 318.821 764.408 327.803 759.591 335.598C754.773 343.393 747.88 349.693 739.684 353.791L721.296 362.98C720.154 363.551 718.895 363.848 717.617 363.848C716.34 363.848 715.081 363.551 713.939 362.98L695.551 353.785C687.355 349.687 680.462 343.388 675.644 335.593C670.827 327.798 668.275 318.815 668.275 309.652V280.26C668.274 278.027 668.955 275.846 670.226 274.01C671.498 272.174 673.3 270.77 675.392 269.986L713.769 255.595ZM723.1 307.881C725.19 306.674 726.824 304.811 727.747 302.581C728.671 300.351 728.833 297.879 728.208 295.547C727.584 293.216 726.207 291.156 724.292 289.686C722.377 288.217 720.031 287.42 717.617 287.42C715.204 287.42 712.858 288.217 710.943 289.686C709.028 291.156 707.651 293.216 707.027 295.547C706.402 297.879 706.564 300.351 707.488 302.581C708.411 304.811 710.045 306.674 712.135 307.881V325.798C712.135 327.252 712.713 328.646 713.741 329.674C714.769 330.702 716.163 331.28 717.617 331.28C719.071 331.28 720.466 330.702 721.494 329.674C722.522 328.646 723.1 327.252 723.1 325.798V307.881Z"
                    fill="#1E1E1E"
                />

                <defs>
                    <motion.linearGradient
                        id={beam1Id}
                        gradientUnits="userSpaceOnUse"
                        initial={{ x1: "0%", x2: "0%", y1: "0%", y2: "0%" }}
                        animate={{ x1: ["90%", "-10%"], x2: ["100%", "0%"], y1: ["0%", "0%"], y2: ["0%", "0%"] }}
                        transition={{
                            duration: 2,
                            ease: [0.16, 1, 0.3, 1],
                            repeat: Infinity,
                            repeatDelay: 3,
                            delay: 2
                        }}
                    >
                        <stop stopColor="#FFFFFF" stopOpacity="0" />
                        <stop stopColor="#FFFFFF" />
                        <stop offset="32.5%" stopColor="#FFFFFF" />
                        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                    </motion.linearGradient>

                    <motion.linearGradient
                        id={beam2Id}
                        gradientUnits="userSpaceOnUse"
                        initial={{ x1: "0%", x2: "0%", y1: "0%", y2: "0%" }}
                        animate={{ x1: ["10%", "110%"], x2: ["0%", "100%"], y1: ["0%", "0%"], y2: ["0%", "0%"] }}
                        transition={{
                            duration: 3.5,
                            ease: [0.16, 1, 0.3, 1],
                            repeat: Infinity,
                            repeatDelay: 1,
                            delay: 1.2
                        }}
                    >
                        <stop stopColor="#FFFFFF" stopOpacity="0" />
                        <stop stopColor="#FFFFFF" />
                        <stop offset="32.5%" stopColor="#FFFFFF" />
                        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                    </motion.linearGradient>

                    <motion.linearGradient
                        id={beam3Id}
                        gradientUnits="userSpaceOnUse"
                        initial={{ x1: "0%", x2: "0%", y1: "0%", y2: "0%" }}
                        animate={{ x1: ["0%", "0%"], x2: ["0%", "0%"], y1: ["90%", "-10%"], y2: ["100%", "0%"] }}
                        transition={{
                            duration: 3.5,
                            ease: [0.16, 1, 0.3, 1],
                            repeat: Infinity,
                            repeatDelay: 1,
                            delay: 1.2
                        }}
                    >
                        <stop stopColor="#FFFFFF" stopOpacity="0" />
                        <stop stopColor="#FFFFFF" />
                        <stop offset="32.5%" stopColor="#FFFFFF" />
                        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                    </motion.linearGradient>

                    <motion.linearGradient
                        id={beam4Id}
                        gradientUnits="userSpaceOnUse"
                        initial={{ x1: "0%", x2: "0%", y1: "0%", y2: "0%" }}
                        animate={{ x1: ["10%", "110%"], x2: ["0%", "100%"], y1: ["0%", "0%"], y2: ["0%", "0%"] }}
                        transition={{
                            duration: 3.5,
                            ease: [0.16, 1, 0.3, 1],
                            repeat: Infinity,
                            repeatDelay: 1,
                            delay: 1.2
                        }}
                    >
                        <stop stopColor="#FFFFFF" stopOpacity="0" />
                        <stop stopColor="#FFFFFF" />
                        <stop offset="32.5%" stopColor="#FFFFFF" />
                        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                    </motion.linearGradient>

                    <motion.linearGradient
                        id={beam5Id}
                        gradientUnits="userSpaceOnUse"
                        initial={{ x1: "0%", x2: "0%", y1: "0%", y2: "0%" }}
                        animate={{ x1: ["90%", "-10%"], x2: ["100%", "0%"], y1: ["0%", "0%"], y2: ["0%", "0%"] }}
                        transition={{
                            duration: 3.5,
                            ease: [0.16, 1, 0.3, 1],
                            repeat: Infinity,
                            repeatDelay: 1,
                            delay: 1.2
                        }}
                    >
                        <stop stopColor="#FFFFFF" stopOpacity="0" />
                        <stop stopColor="#FFFFFF" />
                        <stop offset="32.5%" stopColor="#FFFFFF" />
                        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                    </motion.linearGradient>

                    <linearGradient id="shieldGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.8" />
                    </linearGradient>

                    <linearGradient id="rotatingBeamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
                        <stop offset="20%" stopColor="#FFFFFF" stopOpacity="0.6" />
                        <stop offset="50%" stopColor="#FFFFFF" stopOpacity="1" />
                        <stop offset="80%" stopColor="#FFFFFF" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                    </linearGradient>

                    <radialGradient id="paint0_radial_28_2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(718.085 312.616) rotate(90) scale(312.616)">
                        <stop offset="0.394231" stopColor="#1A1A1A" />
                        <stop offset="1" stopColor="#3A3A3A" />
                    </radialGradient>

                    <radialGradient id="paint1_radial_28_2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(724.617 312.617) rotate(90) scale(218.365)">
                        <stop offset="0.115385" stopColor="#1A1A1A" />
                        <stop offset="1" stopColor="#3A3A3A" />
                    </radialGradient>
                </defs>
            </svg>
        </div>
    );
}