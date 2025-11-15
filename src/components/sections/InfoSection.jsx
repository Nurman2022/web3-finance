"use client";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { features } from "@/data/feature";

export function InfoSection({ className }) {


    return (
        <section className={cn("bg-gradient-to-b from-[#0a0a0a] to-[#171717] relative w-full overflow-hidden py-20", className)}>
            <div
                className={cn(
                    "absolute inset-0 opacity-10",
                    "[background-size:150px_150px]",
                    "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                    "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
                )} />

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
                                        className="text-4xl lg:text-5xl font-light text-white leading-tight mb-6"
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
                                {/* <div className="relative group"> */}
                                {/* Image Container */}
                                {/* <div className="relative bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-3xl p-8 border border-neutral-700"> */}
                                <motion.img
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                    src={feature.image}
                                    alt={feature.title}
                                    className="w-full h-auto object-cover rounded-2xl"
                                />

                                {/* Overlay Gradient */}
                                {/* <div className="absolute inset-8 bg-gradient-to-t from-black/20 to-transparent rounded-2xl pointer-events-none"></div> */}
                                {/* </div> */}
                                {/* </div> */}
                            </motion.div>
                        </div>
                    </div>
                ))
                }
            </div >
        </section >
    );
}