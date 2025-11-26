import Head from 'next/head';

export default function Circle() {

    return (
        <>
            <div
                className="flex-col gap-4 bg-neutral-950 flex items-center justify-center overflow-hidden rounded-lg aspect-video p-8 fade-bottom "
            >
                <div className="group relative w-full pt-[50%]">
                    <div
                        className="border-neutral-700 bg-neutral-900/50 absolute top-0 left-0 z-10 w-full overflow-hidden rounded-[100%] border-4 pt-[100%] shadow-[0px_0px_12px_rgba(64,64,64,0.5),0px_0px_64px_rgba(82,82,82,0.3),0px_0px_12px_rgba(64,64,64,0.5)_inset]"
                    >
                        <div
                            className="bg-neutral-600/50 absolute top-0 left-0 h-full w-full rounded-[100%]"
                            style={{
                                maskImage: 'radial-gradient(140% 95%, transparent 0%, transparent 35%, black 55%)'
                            }}
                        ></div>
                        <div
                            className="bg-neutral-700/50 absolute top-0 left-0 h-full w-full -translate-y-4 rounded-[100%] opacity-80 transition-all duration-1000 ease-in-out group-hover:translate-y-0 group-hover:opacity-100"
                            style={{
                                maskImage: 'radial-gradient(140% 110%, transparent 0%, transparent 35%, black 55%)'
                            }}
                        ></div>
                        <div
                            className="bg-neutral-500 absolute top-0 left-0 h-full w-full -translate-y-4 rounded-[100%] opacity-80 transition-all duration-1000 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 dark:bg-neutral-400"
                            style={{
                                maskImage: 'radial-gradient(140% 120%, transparent 0%, transparent 38%, black 43%)'
                            }}
                        ></div>
                    </div>
                    <div className="absolute w-full top-[50%]">
                        <div
                            className="from-neutral-600/50 to-neutral-600/0 absolute left-1/2 h-64 w-[60%] -translate-x-1/2 scale-[2.5] rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-[512px] dark:opacity-100 -translate-y-1/2"
                        ></div>
                        <div
                            className="from-neutral-700/30 to-neutral-600/0 absolute left-1/2 h-32 w-[40%] -translate-x-1/2 scale-[2] rounded-[50%] bg-radial from-10% to-60% opacity-20 sm:h-64 dark:opacity-100 -translate-y-1/2"
                        ></div>
                    </div>
                </div>
            </div>
        </>
    );
}