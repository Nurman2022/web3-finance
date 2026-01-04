"use client";
export function HeroGradientCircle({ children, className = "" }) {
    return (

        <>
            <section className={`relative${className}`}>
                {/* <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-neutral-800 md:from-neutral-800 to-transparent pointer-events-none z-20 md:invisible visible" /> */}

                <div className="absolute inset-0 pointer-events-none">
                    {/* top left */}
                    <div className="absolute top-1/2 -left-96 w-[900px] h-[1000px] bg-neutral-400/20 rounded-full blur-[130px]" />

                    {/* top right */}
                    <div className="absolute top-3/4 -right-50 w-[400px] h-[400px] bg-neutral-400/20 rounded-full blur-[100px]" />

                    {/* left block */}
                    <div className="absolute top-[15%] left-0 invisible md:visible">
                        <div className="h-20 w-10 bg-gradient-to-br from-[#3F3F3F] to-dark-bg-tertiary border-2 border-dark-grid" />
                        <div className="h-20 w-20 ml-10 bg-gradient-to-br from-[#3F3F3F] to-dark-bg-tertiary border-2 border-dark-grid" />
                    </div>


                    {/* right block */}
                    <div className="absolute top-[15%] right-0 scale-x-[-1] invisible md:visible">
                        <div className="h-20 w-10 bg-gradient-to-br from-[#3F3F3F] to-dark-bg-tertiary border-2 border-dark-grid" />
                        <div className="h-20 w-20 ml-10 bg-gradient-to-br from-[#3F3F3F] to-dark-bg-tertiary border-2 border-dark-grid" />
                    </div>
                </div>

                {/* content */}
                {/* <div className="z-20 bg-gradient-to-b from-dark-bg-tertiary via-black/95 to-dark-bg "> */}
                <div className="z-20 bg-gradient-to-b from-neutral-800 via-black/95 to-dark-bg ">
                    {children}
                </div>
            </section>
        </>
    );
}
