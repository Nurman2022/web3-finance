"use client";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import Image from "next/image";

export function CardStackLoop({ className }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const offset = 35; // offset between cards
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
        }, 5000); // card change every 5 seconds

        return () => clearInterval(interval);
    }, [cards.length]);

    return (
        <div className="relative -top-[80%] scale-[160%] -left-10">
            {cards.map((card, index) => {
                const relativeIndex = (index - activeIndex + cards.length) % cards.length;
                const isActive = index === activeIndex;
                return (

                    <motion.div
                        key={card.id}
                        className={cn("absolute w-48 h-28 rounded-xl overflow-hidden", className)}
                        initial={false}
                        animate={{
                            x: -relativeIndex * offset,
                            y: relativeIndex * offset,
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
                                width={192}
                                height={112}
                                className="w-full h-full object-fill"
                                priority
                            />
                        </div>
                    </motion.div>

                );
            })}
        </div>
    );
}
