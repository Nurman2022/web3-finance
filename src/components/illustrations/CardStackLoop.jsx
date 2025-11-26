"use client";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import Image from "next/image";

export function CardStackLoop({ className }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const offset = 60; // Offset untuk posisi stack

    // Data kartu dengan SVG files
    const cards = [
        {
            id: 1,
            svg: "/svg/visa-card.svg",
            name: "Visa Card"
        },
        {
            id: 2,
            svg: "/svg/master-card.svg",
            name: "Mastercard"
        },
        {
            id: 3,
            svg: "/svg/paypall-card.svg",
            name: "PayPal Card"
        }
        ,
        {
            id: 4,
            svg: "/svg/card-4.svg",
            name: "PayPal Card"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % cards.length);
        }, 3000); // Ganti kartu setiap 3 detik

        return () => clearInterval(interval);
    }, [cards.length]);

    return (
        <div>
            {cards.map((card, index) => {
                // Hitung posisi relatif terhadap kartu aktif
                const relativeIndex = (index - activeIndex + cards.length) % cards.length;
                const isActive = index === activeIndex;

                return (
                    <motion.div
                        key={card.id}
                        className={cn("absolute w-48 h-28 rounded-xl overflow-hidden", className)}
                        initial={false}
                        animate={{
                            x: relativeIndex * offset,
                            y: -relativeIndex * offset,
                            scale: isActive ? 0 : 1,
                            opacity: isActive ? 0 : 1,
                            zIndex: cards.length - relativeIndex,
                        }}
                        transition={{
                            duration: 0.6,
                            ease: [0.23, 1, 0.32, 1],
                            scale: { duration: 0.4 },
                            opacity: { duration: 0.4 },
                        }}
                    >
                        <div className="bg-neutral-300/10 backdrop-blur-sm size-full">
                            <Image
                                src={card.svg}
                                alt={card.name}
                                width={666}
                                height={418}
                                className="w-full h-full object-cover"
                                priority
                            />
                        </div>


                    </motion.div>
                );
            })}
        </div>
    );
}
