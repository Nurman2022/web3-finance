"use client";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { features } from "@/data/feature";

export function InfoSection() {
    return (
        <section className=" w-full py-40 max-w-7xl mx-auto px-6 relative z-10">
            {features.map((feature, index) => (
                <div key={index} className={cn("mb-32 last:mb-0", index > 0 && "mt-32")}>
                    <div className={cn(
                        "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center",
                        feature.reversed && "lg:grid-flow-dense"
                    )}>
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
                                    className="md:text-5xl mb-4 bg-gradient-to-r from-neutral-500 via-white to-neutral-500 bg-clip-text py-8 text-4xl font-normal text-transparent lg:text-6xl"
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


                                <div
                                    className="absolute inset-0 opacity-40"
                                    style={{
                                        backgroundImage: `
                                                linear-gradient(90deg, oklch(87.09% 0.0055 286.29 / 0.4) 1px, transparent 1px),
                                                linear-gradient(0deg, oklch(87.09% 0.0055 286.29 / 0.4) 1px, transparent 1px)
                                            `,
                                        backgroundSize: "40px 40px"
                                    }}
                                ></div>
                            </div>

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
        </section >
    );
}