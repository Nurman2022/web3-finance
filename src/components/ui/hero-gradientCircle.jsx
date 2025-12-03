"use client";
import { CircleGradient } from "./circle-gradient";

export function HeroGradientCircle({ children, className = "" }) {
    return (

        <>
            <div className={`relative bg-gradient-to-b from-neutral-800 via-[#050505] to-[#050505] ${className}`}>
                {/* className={`relative bg-gradient-to-b from-neutral-900 md:from-neutral-800 via-[#050505] to-[#050505] ${className}`} */}


                <CircleGradient />

                <div className="absolute inset-0 pointer-events-none z-10">
                    {/* Top Left */}
                    <div className="absolute top-1/2 -left-96 w-[900px] h-[1000px] bg-neutral-400/20 rounded-full blur-[130px]" />

                    {/* Top Right */}
                    <div className="absolute top-3/4 -right-50 w-[400px] h-[400px] bg-neutral-400/20 rounded-full blur-[100px]" />

                    {/* Left block */}
                    <div className="absolute top-[15%] left-0 ">
                        <div className="h-20 w-10 bg-gradient-to-br from-[#3F3F3F] to-[#161515] border-2 border-neutral-800" />
                        <div className="h-20 w-20 ml-10 bg-gradient-to-br from-[#3F3F3F] to-[#161515] border-2 border-neutral-800" />
                    </div>


                    {/* Right block */}
                    <div className="absolute top-[15%] right-0 scale-x-[-1]">
                        <div className="h-20 w-10 bg-gradient-to-br from-[#3F3F3F] to-[#161515] border-2 border-neutral-800" />
                        <div className="h-20 w-20 ml-10 bg-gradient-to-br from-[#3F3F3F] to-[#161515] border-2 border-neutral-800" />
                    </div>
                </div>

                {/* Content */}
                <div className="z-20">
                    {children}
                </div>
            </div>
        </>
    );
}
