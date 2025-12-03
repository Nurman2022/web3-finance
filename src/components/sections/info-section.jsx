"use client";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { features } from "@/data/feature";

export function InfoSection({ className }) {
    return (
        // <section className={cn("bg-gradient-to-b from-[#0a0a0a] to-[#171717] relative w-full overflow-hidden py-20", className)}>
        <section className="overflow-hidden w-full relative py-20">

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {features.map((feature, index) => (
                    <div key={index} className={cn("mb-32 last:mb-0", index > 0 && "mt-32")}>
                        <div className={cn(
                            "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",
                            feature.reversed && "lg:grid-flow-dense"
                        )}>
                            {/* Content Side */}
                            <motion.div
                                initial={{ opacity: 0, x: feature.reversed ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className={cn(
                                    "space-y-8",
                                    feature.reversed && "lg:col-start-2"
                                )}
                            >
                                <div>
                                    <motion.h2
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.1 }}
                                        className="md:text-5xl mb-4 bg-gradient-to-r from-neutral-500 via-white to-neutral-500 bg-clip-text py-8 text-4xl font-light text-transparent lg:text-6xl"
                                    >
                                        {feature.title}
                                    </motion.h2>

                                    <motion.p
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.2 }}
                                        className="text-lg text-neutral-400 leading-relaxed"
                                    >
                                        {feature.description}
                                    </motion.p>
                                </div>


                                <motion.button
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                    whileHover={{ scale: 1.05, x: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="relative inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-neutral-200 transition-all duration-300"
                                >
                                    {feature.cta}
                                </motion.button>
                            </motion.div>

                            {/* Image Side */}
                            <motion.div
                                initial={{ opacity: 0, x: feature.reversed ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className={cn(
                                    "relative",
                                    feature.reversed && "lg:col-start-1"
                                )}
                            >
                                <div className="absolute inset-0 pointer-events-none">
                                    {/* Large Glow */}
                                    <div
                                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                                               h-64 w-[60%] scale-[2.5] rounded-[50%] 
                                               bg-gradient-radial from-[oklch(55.19%_0.0137_285.94)]/50 from-10% to-[oklch(55.19%_0.0137_285.94)]/0 to-60% 
                                               opacity-20 sm:h-[512px] dark:opacity-100 blur-3xl"
                                    ></div>

                                    {/* Small Glow */}
                                    <div
                                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                                               h-32 w-[40%] scale-[2] rounded-[50%] 
                                               bg-gradient-radial from-[oklch(87.09%_0.0055_286.29)]/30 from-10% to-[oklch(55.19%_0.0137_285.94)]/0 to-60% 
                                               opacity-20 sm:h-64 dark:opacity-100 blur-2xl"
                                    ></div>

                                    {/* Grid Lines Overlay */}
                                    <div
                                        className="inset-0 opacity-30"
                                        style={{
                                            backgroundImage: `
                                                linear-gradient(90deg, oklch(87.09% 0.0055 286.29 / 0.3) 1px, transparent 1px),
                                                linear-gradient(0deg, oklch(87.09% 0.0055 286.29 / 0.3) 1px, transparent 1px)
                                            `,
                                            backgroundSize: "40px 40px"
                                        }}
                                    ></div>
                                </div>

                                {/* Image */}
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                    src={feature.image}
                                    alt={feature.title}
                                    className="w-full h-auto object-cover rounded-2xl relative z-10"
                                />

                            </motion.div>
                        </div>
                    </div>
                ))
                }
            </div >
        </section >
    );
}