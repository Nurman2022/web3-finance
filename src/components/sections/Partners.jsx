export function Partners() {
    const partners = [
        { name: "TRON", logo: "/image/tron-logo.png" },
        { name: "COSMOS", logo: "/image/cosmos-logo.png" },
        { name: "Stellar", logo: "/image/stellar-logo.png" },
        { name: "OKX", logo: "/image/okx-logo.png" },
        { name: "Ethereum", logo: "/image/ethereum-logo.png" },
        { name: "VeChain", logo: "/image/vechain-logo.png" },
    ];

    return (


        <>
            <div className="relative flex flex-col items-center z-20">
                <div className="mb-8">
                    <span className="inline-flex items-center rounded-full border border-neutral-700 bg-neutral-900/50 px-4 py-2 text-sm text-neutral-300">
                        Our Partners
                    </span>
                </div>

                <h2 className="mb-12 text-2xl font-light sm:text-4xl bg-gradient-to-r from-neutral-500 via-white to-neutral-500 bg-clip-text py-8 text-transparent">
                    Leading the Way in Crypto Trust with Webtrix
                </h2>

                {/* Partner Logos */}
                <div className="flex flex-wrap items-center justify-center gap-8">
                    {partners.map((partner) => (
                        <div
                            key={partner.name}
                            className="flex h-20 w-40 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900/50 px-6 hover:bg-white hover:scale-105 transition-all duration-300 group"
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
