import { cn } from "@/lib/utils";
import React from "react";

export function GridBackground() {
    return (
        <div
            className="relative flex flex-col h-screen w-full items-center justify-center bg-white dark:bg-black">
            <div
                className={cn(
                    "absolute inset-0",
                    "[background-size:150px_150px]",
                    "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                    "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
                )} />

            {/* Radial gradient for the container to give a faded look */}
            <div
                className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
            <h1
                className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
                Revolutionize Your Transactions With Secure Blockchain Solutions
            </h1>
            <p>
                Experience the future of digital transactions with our state-of-the-art blockchain technology Our secure,
                decentralized platform ensures every transaction is transparent, immutable, and protected against fraud.
            </p>
        </div>
    );
}
