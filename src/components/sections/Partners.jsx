export function Partners() {
    const partnersImg = [
        { name: "tron", logo: "/image/tron-logo.png" },
        { name: "cosmos", logo: "/image/cosmos-logo.png" },
        { name: "stellar", logo: "/image/stellar-logo.png" },
        { name: "okx", logo: "/image/okx-logo.png" },
        { name: "ethereum", logo: "/image/ethereum-logo.png" },
        { name: "vechain", logo: "/image/vechain-logo.png" },
    ];

    const partnersContent = {
        badge: "Our Partners",
        title: "Leading the Way in Crypto Trust with Webtrix",
    };


    return (
        <>
            <div className="relative flex flex-col items-center z-20">
                <div className="mb-8">
                    <span className="inline-flex items-center rounded-full border border-dark-grid bg-neutral-900/50 px-4 py-2 text-sm text-neutral-300">
                        {partnersContent.badge}
                    </span>
                </div>

                <h2 className="mb-12 text-2xl font-normal sm:text-4xl bg-gradient-to-r from-neutral-500 via-white to-neutral-500 bg-clip-text py-8 text-transparent">
                    {partnersContent.title}
                </h2>

                <div className="flex flex-wrap w-full items-center justify-center gap-3 md:gap-4 lg:gap-8 px-4">
                    {partnersImg.map((partner) => (
                        <div
                            key={partner.name}
                            className="flex h-16 md:h-20 w-32 md:w-40 items-center justify-center rounded-lg border border-dark-grid bg-dark-card px-4 md:px-6 hover:bg-white hover:scale-105 transition-all duration-300 group"
                        >
                            <img
                                src={partner.logo}
                                alt={partner.name}
                                className="h-auto w-auto object-cover filter brightness-0 invert group-hover:filter-none transition-all duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>

    );
}
