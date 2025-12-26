"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { faqData } from "@/data/faq";

export function FAQ() {
    const [currentPage, setCurrentPage] = useState(0);

    const itemsPerPage = 2;
    const totalPages = Math.ceil(faqData.length / itemsPerPage);
    const currentFAQs = faqData.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

    const nextPage = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <section className="w-full overflow-hidden py-40 max-w-7xl mx-auto px-6 z-10">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-12 mb-16">
                <div className="flex-1">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="md:text-5xl mb-6 bg-gradient-to-r from-neutral-500 via-white to-neutral-500 bg-clip-text py-8 text-4xl font-normal text-transparent lg:text-6xl"
                    >
                        Have a Questions?<br />
                        We've Got Your Answers.
                    </motion.h2>
                </div>

                <div className="flex-1 lg:max-w-lg">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-neutral-400 text-lg leading-relaxed mb-8"
                    >
                        Confused or curious? Don't worry we've got you covered. Our comprehensive FAQ section is here to provide clear, straightforward answers to all your questions.
                    </motion.p>

                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-neutral-200 transition-colors"
                    >
                        Read More
                    </motion.button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                {currentFAQs.map((faq, index) => (
                    <motion.div
                        key={`${currentPage}-${index}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <div className="w-full text-left">
                            <h3 className="text-white text-xl font-medium mb-6">
                                {faq.question}
                            </h3>
                            <p className="text-neutral-400 leading-relaxed">
                                {faq.answer}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="flex gap-8 items-center">
                <div className="border-t-2 h-1 border-neutral-800 w-full"></div>

                <div className="flex justify-end gap-4">
                    <motion.button
                        onClick={prevPage}
                        disabled={currentPage === 0}
                        whileHover={{ scale: currentPage === 0 ? 1 : 1.1 }}
                        whileTap={{ scale: currentPage === 0 ? 1 : 0.9 }}
                        className={cn(
                            "w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all",
                            currentPage === 0
                                ? "border-neutral-600 text-neutral-600 cursor-not-allowed"
                                : "border-neutral-400 text-neutral-400 hover:border-white hover:text-white"
                        )}
                    >
                        <ArrowLeft className="w-5 h-5" />
                    </motion.button>

                    <motion.button
                        onClick={nextPage}
                        disabled={currentPage === totalPages - 1}
                        whileHover={{ scale: currentPage === totalPages - 1 ? 1 : 1.1 }}
                        whileTap={{ scale: currentPage === totalPages - 1 ? 1 : 0.9 }}
                        className={cn(
                            "w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all",
                            currentPage === totalPages - 1
                                ? "border-neutral-600 text-neutral-600 cursor-not-allowed"
                                : "border-neutral-400 text-neutral-400 hover:border-white hover:text-white"
                        )}
                    >
                        <ArrowRight className="w-5 h-5" />
                    </motion.button>
                </div>
            </div>
        </section>
    );
}