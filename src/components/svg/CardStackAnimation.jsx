"use client";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function CardStackAnimation({ className }) {
    return (
        <div className={cn("relative w-full h-auto", className)}>
            <svg width="1046" height="658" viewBox="0 0 1046 658" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                {/* Card 1 - Bottom card with entrance from bottom */}
                <motion.g
                    id="card-1"
                    initial={{ y: 100, opacity: 0, scale: 0.8 }}
                    animate={{ y: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    {/* Card Background */}
                    <motion.rect
                        x="3" y="243" width="660" height="412" rx="32"
                        fill="url(#paint23_linear_44_49)"
                        stroke="url(#paint24_radial_44_49)"
                        strokeWidth="3"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    />

                    {/* Logo with pulse animation */}
                    <motion.rect
                        x="23" y="243" width="120" height="120"
                        fill="url(#pattern2_44_49)"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />

                    {/* Card number with typewriter effect */}
                    <motion.rect
                        x="45" y="520" width="576" height="44" rx="22"
                        fill="url(#paint27_linear_44_49)"
                        initial={{ width: 0 }}
                        animate={{ width: 576 }}
                        transition={{ duration: 1.2, delay: 0.8 }}
                    />

                    {/* Name field */}
                    <motion.rect
                        x="45" y="594" width="236" height="29" rx="14.5"
                        fill="url(#paint28_linear_44_49)"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                    />

                    {/* Date field */}
                    <motion.rect
                        x="535" y="594" width="86" height="29" rx="14.5"
                        fill="url(#paint29_linear_44_49)"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 1.4 }}
                    />

                    {/* Chip with glow effect */}
                    <motion.path
                        d="M105.652 426H59.0409C51.3078 426 45 432.293 45 440.041V471.959C45 479.692 51.2926 486 59.0409 486H105.652C113.385 486 119.693 479.707 119.693 471.959V440.026C119.693 432.293 113.4 426 105.652 426Z"
                        fill="url(#paint30_linear_44_49)"
                        animate={{
                            filter: [
                                "drop-shadow(0 0 5px rgba(255,255,255,0.3))",
                                "drop-shadow(0 0 15px rgba(255,255,255,0.6))",
                                "drop-shadow(0 0 5px rgba(255,255,255,0.3))"
                            ]
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />

                    {/* Visa logo */}
                    <motion.g
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.6 }}
                    >
                        <path d="M526.826 324.131L534.201 280.868H545.992L538.616 324.131H526.826Z" fill="url(#paint31_linear_44_49)" />
                        <path d="M494.062 280.867H475.152L475 281.766C489.776 285.344 499.552 293.988 503.611 304.371L499.481 284.505C498.768 281.77 496.702 280.954 494.144 280.859" fill="url(#paint32_linear_44_49)" />
                    </motion.g>
                </motion.g>

                {/* Card 2 - Middle card with slide from left */}
                <motion.g
                    id="card-2"
                    initial={{ x: -200, opacity: 0, rotate: -5 }}
                    animate={{ x: 0, opacity: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                    {/* Card Background */}
                    <motion.rect
                        x="193" y="123" width="660" height="412" rx="32"
                        fill="url(#paint11_linear_44_49)"
                        stroke="url(#paint12_radial_44_49)"
                        strokeWidth="3"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    />

                    {/* Logo */}
                    <motion.rect
                        x="213" y="123" width="120" height="120"
                        fill="url(#pattern1_44_49)"
                        animate={{ rotateY: [0, 360] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />

                    {/* Card number */}
                    <motion.rect
                        x="235" y="400" width="576" height="44" rx="22"
                        fill="url(#paint15_linear_44_49)"
                        initial={{ width: 0 }}
                        animate={{ width: 576 }}
                        transition={{ duration: 1.2, delay: 1.0 }}
                    />

                    {/* Name and date fields */}
                    <motion.rect
                        x="235" y="474" width="236" height="29" rx="14.5"
                        fill="url(#paint16_linear_44_49)"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.4 }}
                    />
                    <motion.rect
                        x="725" y="474" width="86" height="29" rx="14.5"
                        fill="url(#paint17_linear_44_49)"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1.6 }}
                    />

                    {/* Contactless symbol with wave animation */}
                    <motion.g
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.7, 1, 0.7]
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <path d="M810.474 176.706C809.505 170.398 807.642 164.316 804.81 158.76C804.14 157.333 803.245 155.982 802.947 155.681C802.127 154.855 800.339 154.78 799.296 155.456C798.55 155.907 797.805 157.183 797.805 158.009C797.805 158.234 798.476 159.811 799.37 161.538C803.32 169.572 804.885 176.255 804.885 184.89C804.885 193.826 803.096 201.184 798.997 209.143C797.954 211.095 797.805 211.621 797.954 212.297C798.178 213.423 799.146 214.549 800.115 214.85C800.562 215 801.01 215 801.159 215C801.308 214.925 801.606 214.925 801.829 214.925C802.724 214.925 803.767 213.498 805.407 209.969C808.164 204.188 809.878 198.256 810.772 191.648C811.145 188.044 811.07 180.61 810.474 176.706Z" fill="url(#paint19_linear_44_49)" />
                    </motion.g>
                </motion.g>

                {/* Card 3 - Top card with slide from right */}
                <motion.g
                    id="card-3"
                    initial={{ x: 200, opacity: 0, rotate: 5 }}
                    animate={{ x: 0, opacity: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                >
                    {/* Card Background */}
                    <motion.rect
                        x="383" y="3" width="660" height="412" rx="32"
                        fill="url(#paint0_linear_44_49)"
                        stroke="url(#paint1_radial_44_49)"
                        strokeWidth="3"
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                        }}
                        transition={{ duration: 0.3 }}
                    />

                    {/* Logo with floating animation */}
                    <motion.rect
                        x="403" y="3" width="120" height="120"
                        fill="url(#pattern0_44_49)"
                        animate={{
                            y: [0, -5, 0],
                            rotateZ: [0, 2, 0, -2, 0]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />

                    {/* Card number with shimmer effect */}
                    <motion.rect
                        x="425" y="280" width="576" height="44" rx="22"
                        fill="url(#paint4_linear_44_49)"
                        initial={{ width: 0 }}
                        animate={{ width: 576 }}
                        transition={{ duration: 1.2, delay: 1.2 }}
                        style={{
                            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                            backgroundSize: "200% 100%"
                        }}
                    />

                    {/* Name and date with stagger animation */}
                    <motion.rect
                        x="425" y="354" width="236" height="29" rx="14.5"
                        fill="url(#paint5_linear_44_49)"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 1.6 }}
                    />
                    <motion.rect
                        x="915" y="354" width="86" height="29" rx="14.5"
                        fill="url(#paint6_linear_44_49)"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 1.8 }}
                    />

                    {/* Mastercard with rotation */}
                    <motion.g
                        animate={{ rotateY: [0, 360] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    >
                        <ellipse cx="933.999" cy="62.9996" rx="29.9995" ry="29.9996" fill="url(#paint8_linear_44_49)" fillOpacity="0.6" />
                        <path d="M1001.2 63.0004C1001.2 79.5687 987.767 93 971.199 93C954.631 93 941.2 79.5687 941.2 63.0004C941.2 46.4321 954.631 33.0008 971.199 33.0008C987.767 33.0008 1001.2 46.4321 1001.2 63.0004Z" fill="url(#paint9_linear_44_49)" fillOpacity="0.8" />
                        <path d="M952.6 39.4606C945.655 44.9551 941.2 53.4572 941.2 62.9999C941.2 72.5426 945.655 81.0446 952.6 86.5391C959.544 81.0446 963.999 72.5426 963.999 62.9999C963.999 53.4572 959.544 44.9551 952.6 39.4606Z" fill="url(#paint10_linear_44_49)" fillOpacity="0.6" />
                    </motion.g>
                </motion.g>

                {/* Gradients and patterns from original SVG */}
                <defs>
                    <pattern id="pattern0_44_49" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0_44_49" transform="scale(0.002)" />
                    </pattern>
                    <pattern id="pattern1_44_49" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0_44_49" transform="scale(0.002)" />
                    </pattern>
                    <pattern id="pattern2_44_49" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0_44_49" transform="scale(0.002)" />
                    </pattern>

                    <linearGradient id="paint0_linear_44_49" x1="0" y1="0" x2="535.799" y2="536.321" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" stopOpacity="0.4" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>

                    <radialGradient id="paint1_radial_44_49" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(58.0258) scale(778.039 485.685)">
                        <stop stopColor="white" stopOpacity="0.7" />
                        <stop offset="0.677083" stopColor="#B691FF" stopOpacity="0.4" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                    </radialGradient>

                    <linearGradient id="paint4_linear_44_49" x1="425" y1="302" x2="1001" y2="302" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" stopOpacity="0.4" />
                        <stop offset="1" stopColor="white" stopOpacity="0.1" />
                    </linearGradient>

                    <linearGradient id="paint5_linear_44_49" x1="425" y1="368.5" x2="661" y2="368.5" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" stopOpacity="0.4" />
                        <stop offset="1" stopColor="white" stopOpacity="0.1" />
                    </linearGradient>

                    <linearGradient id="paint6_linear_44_49" x1="915" y1="368.5" x2="1001" y2="368.5" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" stopOpacity="0.4" />
                        <stop offset="1" stopColor="white" stopOpacity="0.1" />
                    </linearGradient>

                    <linearGradient id="paint8_linear_44_49" x1="933.999" y1="33" x2="933.999" y2="92.9992" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" stopOpacity="0.71" />
                        <stop offset="1" stopColor="white" />
                    </linearGradient>

                    <linearGradient id="paint9_linear_44_49" x1="971.199" y1="33.0008" x2="971.199" y2="93" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" stopOpacity="0.45" />
                        <stop offset="1" stopColor="white" />
                    </linearGradient>

                    <linearGradient id="paint10_linear_44_49" x1="952.6" y1="39.4606" x2="952.6" y2="86.5391" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" stopOpacity="0.07" />
                        <stop offset="1" stopColor="white" />
                    </linearGradient>

                    <linearGradient id="paint11_linear_44_49" x1="0" y1="0" x2="535.799" y2="536.321" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" stopOpacity="0.4" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>

                    <radialGradient id="paint12_radial_44_49" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(58.0258) scale(778.039 485.685)">
                        <stop stopColor="white" stopOpacity="0.7" />
                        <stop offset="0.677083" stopColor="#B691FF" stopOpacity="0.4" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                    </radialGradient>

                    <linearGradient id="paint15_linear_44_49" x1="235" y1="422" x2="811" y2="422" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" stopOpacity="0.4" />
                        <stop offset="1" stopColor="white" stopOpacity="0.1" />
                    </linearGradient>

                    <linearGradient id="paint16_linear_44_49" x1="235" y1="488.5" x2="471" y2="488.5" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" stopOpacity="0.4" />
                        <stop offset="1" stopColor="white" stopOpacity="0.1" />
                    </linearGradient>

                    <linearGradient id="paint17_linear_44_49" x1="725" y1="488.5" x2="811" y2="488.5" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" stopOpacity="0.4" />
                        <stop offset="1" stopColor="white" stopOpacity="0.1" />
                    </linearGradient>

                    <linearGradient id="paint19_linear_44_49" x1="764" y1="155" x2="811" y2="215" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" stopOpacity="0.8" />
                        <stop offset="1" stopColor="white" stopOpacity="0.36" />
                    </linearGradient>

                    <linearGradient id="paint23_linear_44_49" x1="0" y1="0" x2="535.799" y2="536.321" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" stopOpacity="0.4" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>

                    <radialGradient id="paint24_radial_44_49" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(58.0258) scale(778.039 485.685)">
                        <stop stopColor="white" stopOpacity="0.7" />
                        <stop offset="0.677083" stopColor="#B691FF" stopOpacity="0.4" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                    </radialGradient>

                    <linearGradient id="paint27_linear_44_49" x1="45" y1="542" x2="621" y2="542" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" stopOpacity="0.4" />
                        <stop offset="1" stopColor="white" stopOpacity="0.1" />
                    </linearGradient>

                    <linearGradient id="paint28_linear_44_49" x1="45" y1="608.5" x2="281" y2="608.5" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" stopOpacity="0.4" />
                        <stop offset="1" stopColor="white" stopOpacity="0.1" />
                    </linearGradient>

                    <linearGradient id="paint29_linear_44_49" x1="535" y1="608.5" x2="621" y2="608.5" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" stopOpacity="0.4" />
                        <stop offset="1" stopColor="white" stopOpacity="0.1" />
                    </linearGradient>

                    <linearGradient id="paint30_linear_44_49" x1="45" y1="426" x2="120" y2="486" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" stopOpacity="0.8" />
                        <stop offset="1" stopColor="white" stopOpacity="0.36" />
                    </linearGradient>

                    <linearGradient id="paint31_linear_44_49" x1="554.387" y1="280" x2="554.387" y2="324.603" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0.75" />
                    </linearGradient>

                    <linearGradient id="paint32_linear_44_49" x1="489.305" y1="280.859" x2="489.305" y2="304.371" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0.75" />
                    </linearGradient>

                    <image id="image0_44_49" width="500" height="500" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAYAAADL1t+KAAAUNklEQVR4nO3de7BuZ10f8O/PkBuc3E251ELEIKIRyAVJFU1aMt4ZR1sLWEbT0dLpxQqdjsU/MGDBgdoqtdNO7bQDTmUMN20bChZsgwozhQYHC5RLSIYQcj0JObmeXE7y66zhObK7OSc9J9mX9a7385l5Zr373Ttnr/U8K/v7rvU863kCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJCUOoD56u49Sc5OclKS48b2ieP1qUmOT3LihgM4Ock3bDqg6efuS/LgpvfvnH7FeH0gyT1J7k3yQJK7kuyf2zeSXJTkJ7v7XVXV+9e9QoBHR6AzKxfOYC9+KUdw6ZpAAA==" />
                </defs>
            </svg>
        </div>
    );
}