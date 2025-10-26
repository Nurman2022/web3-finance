"use client";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function ShieldFlowAnimation({ className }) {
    return (
        <div className={cn("relative w-full h-auto", className)}>
            <svg width="1448" height="1044" viewBox="0 0 1448 1044" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                {/* Background paths - static */}
                <motion.path
                    d="M1031 379H1178.91L1440.67 625.36"
                    stroke="#333"
                    strokeWidth="1"
                    initial={{ opacity: 0.3 }}
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.path
                    d="M401.269 379H264.091L0 612.762"
                    stroke="#333"
                    strokeWidth="1"
                    initial={{ opacity: 0.3 }}
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                />
                <motion.line
                    x1="727" y1="628" x2="727" y2="1044"
                    stroke="#333"
                    strokeWidth="1"
                    initial={{ opacity: 0.3 }}
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
                <motion.line
                    x1="412.003" y1="308.315" x2="0.468852" y2="310.181"
                    stroke="#333"
                    strokeWidth="1"
                    initial={{ opacity: 0.3 }}
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                />
                <motion.line
                    x1="1031" y1="309.176" x2="1447.2" y2="307.31"
                    stroke="#333"
                    strokeWidth="1"
                    initial={{ opacity: 0.3 }}
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                />

                {/* Flowing beam animations */}
                {/* Beam from top right */}
                <motion.path
                    d="M1031 379H1178.91L1440.67 625.36"
                    stroke="url(#beamGradient1)"
                    strokeWidth="3"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                        pathLength: [0, 1, 0],
                        opacity: [0, 1, 0]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0
                    }}
                />

                {/* Beam from top left */}
                <motion.path
                    d="M401.269 379H264.091L0 612.762"
                    stroke="url(#beamGradient2)"
                    strokeWidth="3"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                        pathLength: [0, 1, 0],
                        opacity: [0, 1, 0]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.6
                    }}
                />

                {/* Beam from bottom */}
                <motion.line
                    x1="727" y1="628" x2="727" y2="1044"
                    stroke="url(#beamGradient3)"
                    strokeWidth="3"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                        pathLength: [0, 1, 0],
                        opacity: [0, 1, 0]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1.2
                    }}
                />

                {/* Beam from left */}
                <motion.line
                    x1="412.003" y1="308.315" x2="0.468852" y2="310.181"
                    stroke="url(#beamGradient4)"
                    strokeWidth="3"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                        pathLength: [0, 1, 0],
                        opacity: [0, 1, 0]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1.8
                    }}
                />

                {/* Beam from right */}
                <motion.line
                    x1="1031" y1="309.176" x2="1447.2" y2="307.31"
                    stroke="url(#beamGradient5)"
                    strokeWidth="3"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                        pathLength: [0, 1, 0],
                        opacity: [0, 1, 0]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2.4
                    }}
                />

                {/* Shield containers - animated on beam arrival */}
                <motion.rect
                    x="405.468" y="0" width="625.233" height="625.233" rx="75"
                    fill="url(#paint0_radial_28_2)"
                    stroke="url(#shieldGlow)"
                    strokeWidth="2"
                    initial={{ opacity: 0.7 }}
                    animate={{
                        opacity: [0.7, 1, 0.7],
                        scale: [1, 1.02, 1]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                <motion.rect
                    x="506.252" y="94.2516" width="436.73" height="436.73" rx="75"
                    fill="url(#paint1_radial_28_2)"
                    stroke="url(#shieldGlow2)"
                    strokeWidth="1"
                    initial={{ opacity: 0.8 }}
                    animate={{
                        opacity: [0.8, 1, 0.8],
                        scale: [1, 1.01, 1]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                    }}
                />

                <motion.rect
                    x="595.837" y="187.57" width="242.628" height="242.628" rx="61"
                    fill="#D9D9D9"
                    initial={{ opacity: 0.9 }}
                    animate={{
                        opacity: [0.9, 1, 0.9],
                        scale: [1, 1.05, 1]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                />

                {/* Shield icon - central focus with pulse */}
                <motion.path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M713.769 255.595C716.25 254.665 718.985 254.665 721.466 255.595L759.843 269.986C761.934 270.77 763.735 272.173 765.007 274.008C766.279 275.843 766.96 278.022 766.96 280.255V309.657C766.96 318.821 764.408 327.803 759.591 335.598C754.773 343.393 747.88 349.693 739.684 353.791L721.296 362.98C720.154 363.551 718.895 363.848 717.617 363.848C716.34 363.848 715.081 363.551 713.939 362.98L695.551 353.785C687.355 349.687 680.462 343.388 675.644 335.593C670.827 327.798 668.275 318.815 668.275 309.652V280.26C668.274 278.027 668.955 275.846 670.226 274.01C671.498 272.174 673.3 270.77 675.392 269.986L713.769 255.595ZM723.1 307.881C725.19 306.674 726.824 304.811 727.747 302.581C728.671 300.351 728.833 297.879 728.208 295.547C727.584 293.216 726.207 291.156 724.292 289.686C722.377 288.217 720.031 287.42 717.617 287.42C715.204 287.42 712.858 288.217 710.943 289.686C709.028 291.156 707.651 293.216 707.027 295.547C706.402 297.879 706.564 300.351 707.488 302.581C708.411 304.811 710.045 306.674 712.135 307.881V325.798C712.135 327.252 712.713 328.646 713.741 329.674C714.769 330.702 716.163 331.28 717.617 331.28C719.071 331.28 720.466 330.702 721.494 329.674C722.522 328.646 723.1 327.252 723.1 325.798V307.881Z"
                    fill="#1E1E1E"
                    initial={{ scale: 0.9, opacity: 0.8 }}
                    animate={{
                        scale: [0.9, 1.1, 0.9],
                        opacity: [0.8, 1, 0.8]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Gradient definitions */}
                <defs>
                    <linearGradient id="beamGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="30%" stopColor="#60A5FA" stopOpacity="0.8" />
                        <stop offset="70%" stopColor="#3B82F6" stopOpacity="1" />
                        <stop offset="100%" stopColor="transparent" />
                    </linearGradient>

                    <linearGradient id="beamGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="30%" stopColor="#34D399" stopOpacity="0.8" />
                        <stop offset="70%" stopColor="#10B981" stopOpacity="1" />
                        <stop offset="100%" stopColor="transparent" />
                    </linearGradient>

                    <linearGradient id="beamGradient3" x1="0%" y1="100%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="30%" stopColor="#F59E0B" stopOpacity="0.8" />
                        <stop offset="70%" stopColor="#D97706" stopOpacity="1" />
                        <stop offset="100%" stopColor="transparent" />
                    </linearGradient>

                    <linearGradient id="beamGradient4" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="30%" stopColor="#EC4899" stopOpacity="0.8" />
                        <stop offset="70%" stopColor="#DB2777" stopOpacity="1" />
                        <stop offset="100%" stopColor="transparent" />
                    </linearGradient>

                    <linearGradient id="beamGradient5" x1="100%" y1="0%" x2="0%" y2="0%">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="30%" stopColor="#8B5CF6" stopOpacity="0.8" />
                        <stop offset="70%" stopColor="#7C3AED" stopOpacity="1" />
                        <stop offset="100%" stopColor="transparent" />
                    </linearGradient>

                    <linearGradient id="shieldGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.8" />
                    </linearGradient>

                    <linearGradient id="shieldGlow2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#34D399" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#10B981" stopOpacity="0.6" />
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