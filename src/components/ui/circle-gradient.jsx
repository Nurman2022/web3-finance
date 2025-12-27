"use client";

export function CircleGradient() {
    return (
        <div className="absolute inset-x-0 -top-40 overflow-hidden pt-20 pointer-events-none">
            <div className="group relative w-full pt-[80%]">
                <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 z-10 w-[160%] pt-[160%] overflow-hidden rounded-[100%] 
                           border-4 border-[oklch(87.09%_0.0055_286.29)] bg-[oklch(14.05%_0.0044_285.82)]/50 
                           shadow-[0px_0px_12px_oklch(87.09%_0.0055_286.29),0px_0px_64px_oklch(55.19%_0.0137_285.94),0px_0px_12px_oklch(87.09%_0.0055_286.29)_inset]"
                >
                    {/* gradient layer 1 */}
                    <div
                        className="absolute top-0 left-0 h-full w-full rounded-[100%] bg-[oklch(55.19%_0.0137_285.94)]/10"
                        style={{
                            maskImage: 'radial-gradient(140% 95%, transparent 0%, transparent 35%, black 55%)'
                        }}
                    ></div>

                    {/* gradient layer 2 with hover */}
                    <div
                        className="absolute top-0 left-0 h-full w-full rounded-[100%] bg-[oklch(87.09%_0.0055_286.29)]/20 
                               -translate-y-4 opacity-80 transition-all duration-1000 ease-in-out 
                               group-hover:translate-y-0 group-hover:opacity-100"
                        style={{
                            maskImage: 'radial-gradient(140% 110%, transparent 0%, transparent 35%, black 55%)'
                        }}
                    ></div>

                    {/* gradient layer 3 with hover */}
                    <div
                        className="absolute top-0 left-0 h-full w-full rounded-[100%] bg-[oklch(87.09%_0.0055_286.29)] 
                               -translate-y-4 opacity-40 transition-all duration-1000 ease-in-out 
                               group-hover:translate-y-0 group-hover:opacity-80 "
                        style={{
                            maskImage: 'radial-gradient(140% 120%, transparent 0%, transparent 38%, black 43%)'
                        }}
                    ></div>
                </div>

                {/* glow effects - positioned at 50% (center of circle) */}
                <div className="absolute w-full top-[50%]">
                    {/* large glow */}
                    <div
                        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 
                               h-64 w-[60%] scale-[2.5] rounded-[50%] 
                               bg-gradient-radial from-[oklch(55.19%_0.0137_285.94)]/50 from-10% to-[oklch(55.19%_0.0137_285.94)]/0 to-60% 
                               opacity-20 sm:h-[512px] dark:opacity-100"
                    ></div>

                    {/* small glow */}
                    <div
                        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 
                               h-32 w-[40%] scale-[2] rounded-[50%] 
                               bg-gradient-radial from-[oklch(87.09%_0.0055_286.29)]/30 from-10% to-[oklch(55.19%_0.0137_285.94)]/0 to-60% 
                               opacity-20 sm:h-64 dark:opacity-100"
                    ></div>
                </div>
            </div>
        </div>
    );
}
