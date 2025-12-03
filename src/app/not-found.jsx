'use client';
import Link from "next/link";
import { CircleGradient } from "@/components/ui/circle-gradient";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-neutral-900 via-[#050505] to-[#000000] relative flex items-center justify-center overflow-hidden px-4">
            <CircleGradient />

            <div className="z-10 max-w-2xl w-full text-center space-y-8">
                <h1 className="text-9xl md:text-[150px] font-bold bg-gradient-to-r from-[oklch(55.19%_0.0137_285.94)] via-[oklch(87.09%_0.0055_286.29)] to-[oklch(55.19%_0.0137_285.94)] bg-clip-text text-transparent">
                    404
                </h1>

                <div>
                    <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
                        Page Not Found
                    </h2>
                    <p className="text-lg md:text-xl text-neutral-400 leading-relaxed max-w-xl mx-auto">
                        Oops! It seems like you've wandered into uncharted territory. The page you're looking for doesn't exist or has been moved.
                    </p>
                </div>

                <div className="flex justify-center pt-4">
                    <Link href="/">
                        <button className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer">
                            Back to Home
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
