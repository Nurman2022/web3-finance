"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

export function FAQ({ className }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    const faqData = [
        {
            question: "What is Webtrix?",
            answer: "Webtrix is a blockchain platform designed to offer secure, transparent, and efficient solutions for decentralized finance (DeFi) applications. It enables users to participate in various blockchain activities, such as providing liquidity, staking, and trading, all within a seamless and user-friendly environment."
        },
        {
            question: "How do I start using Webtrix?",
            answer: "To start using Webtrix, you'll need to create an account on our platform. Once registered, you can connect your cryptocurrency wallet, such as MetaMask, to interact with our services. From there, you can explore various features like providing liquidity to pools, staking tokens, and more."
        },
        {
            question: "Is Webtrix secure and trustworthy?",
            answer: "Yes, security is our top priority. Webtrix uses advanced blockchain technology and smart contracts that have been thoroughly audited. We implement multiple layers of security including encryption, multi-signature wallets, and regular security assessments to ensure your assets are protected."
        },
        {
            question: "What fees are associated with using Webtrix?",
            answer: "Webtrix charges minimal transaction fees that vary depending on the service you're using. These fees help maintain the network and ensure fast, reliable transactions. You can view all applicable fees in your dashboard before confirming any transaction."
        },
        {
            question: "Can I withdraw my funds at any time?",
            answer: "Yes, you have full control over your funds. You can withdraw your assets at any time, subject to any lock-up periods you may have agreed to for specific staking or liquidity programs. Standard withdrawal processing times vary but are typically completed within minutes."
        },
        {
            question: "What cryptocurrencies does Webtrix support?",
            answer: "Webtrix supports a wide range of cryptocurrencies including Bitcoin (BTC), Ethereum (ETH), and many popular altcoins. We're constantly adding support for new tokens based on community demand and market trends. Check our supported assets page for the most current list."
        }
    ];

    const itemsPerPage = 2;
    const totalPages = Math.ceil(faqData.length / itemsPerPage);
    const currentFAQs = faqData.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

    const nextPage = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1);
            setActiveIndex(0);
        }
    };

    const prevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
            setActiveIndex(0);
        }
    };

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    return (
        <section className={cn("bg-gradient-to-b from-[#171717] to-[#1d1d1d] relative w-full overflow-hidden py-20", className)}>
            <div
                className={cn(
                    "absolute inset-0 opacity-20",
                    "[background-size:150px_150px]",
                    "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                    "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
                )} />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row items-start justify-between gap-12 mb-16">
                    <div className="flex-1">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl lg:text-5xl xl:text-6xl font-light text-white leading-tight mb-6"
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
                            Confused or curious? Don't worry — we've got you covered. Our comprehensive FAQ section is here to provide clear, straightforward answers to all your questions.
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

                {/* FAQ Items */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    {currentFAQs.map((faq, index) => (
                        <motion.div
                            key={`${currentPage}-${index}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-[#202020] rounded-2xl p-6 border border-neutral-800"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full text-left flex items-center justify-between group"
                            >
                                <h3 className="text-white text-xl font-medium pr-4 group-hover:text-neutral-300 transition-colors">
                                    {faq.question}
                                </h3>
                                <motion.div
                                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex-shrink-0"
                                >
                                    <ChevronDown className="w-6 h-6 text-neutral-400" />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pt-4 border-t border-neutral-700 mt-4">
                                            <p className="text-neutral-400 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* Navigation */}
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
                        <ChevronLeft className="w-5 h-5" />
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
                        <ChevronRight className="w-5 h-5" />
                    </motion.button>
                </div>
            </div>
        </section>
    );
}