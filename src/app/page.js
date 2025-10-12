'use client'
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { NavbarDemo } from "@/components/Navbar";
import { Features } from "@/components/ui/Features";
import { FAQ } from "@/components/ui/FAQ";
import { Footer } from "@/components/ui/Footer";

export default function Home() {



  return (
    <div className="bg-black relative w-full">
      <NavbarDemo >
        <BackgroundBeamsWithCollision className={"-mt-16"}>

          <div className="relative z-20 flex flex-col items-center justify-center px-4 text-center h-screen">
            {/* Badge */}
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-neutral-900/50 px-4 py-2 text-sm text-neutral-300">
                ✦ Trusted Platform
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-light text-transparent sm:text-7xl max-w-5xl">
              Revolutionize Your Transactions With Secure Blockchain Solutions
            </h1>

            {/* Description */}
            <p className="mt-4 max-w-2xl text-base text-neutral-400 sm:text-lg">
              Experience the future of digital transactions with our state-of-the-art blockchain technology. Our secure,
              decentralized platform ensures every transaction is transparent, immutable, and protected against fraud.
            </p>

            {/* CTA Button */}
            <button className="mt-8 rounded-full bg-white px-8 py-3 text-base font-medium text-black transition-all hover:bg-neutral-200">
              Get Started
            </button>

          </div>

        </BackgroundBeamsWithCollision>

        {/* Partners Section */}
        <div className="relative">
          <img src="/image/hero-gradient.png" className="w-full absolute bottom-0 z-10" />

          <div className="relative flex flex-col items-center z-20 -top-20">
            <div className="mb-8">
              <span className="inline-flex items-center rounded-full border border-neutral-700 bg-neutral-900/50 px-4 py-2 text-sm text-neutral-300">
                Our Partners
              </span>
            </div>

            <h2 className="mb-12 text-2xl font-light text-white sm:text-4xl">
              Leading the Way in Crypto Trust with Webtrix
            </h2>

            {/* Partner Logos */}
            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="flex h-20 w-40 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900/50 px-6 hover:bg-white hover:scale-105 transition-all duration-300 group">
                <img src="/image/tron-logo.png" alt="TRON" className="h-auto w-auto object-cover filter brightness-0 invert group-hover:filter-none transition-all duration-300" />
              </div>
              <div className="flex h-20 w-40 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900/50 px-6 hover:bg-white hover:scale-105 transition-all duration-300 group">
                <img src="/image/cosmos-logo.png" alt="COSMOS" className="h-auto w-auto object-cover filter brightness-0 invert group-hover:filter-none transition-all duration-300" />
              </div>
              <div className="flex h-20 w-40 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900/50 px-6 hover:bg-white hover:scale-105 transition-all duration-300 group">
                <img src="/image/stellar-logo.png" alt="Stellar" className="h-auto w-auto object-cover filter brightness-0 invert group-hover:filter-none transition-all duration-300" />
              </div>
              <div className="flex h-20 w-40 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900/50 px-6 hover:bg-white hover:scale-105 transition-all duration-300 group">
                <img src="/image/okx-logo.png" alt="OKX" className="h-auto w-auto object-cover filter brightness-0 invert group-hover:filter-none transition-all duration-300" />
              </div>
              <div className="flex h-20 w-40 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900/50 px-6 hover:bg-white hover:scale-105 transition-all duration-300 group">
                <img src="/image/ethereum-logo.png" alt="Ethereum" className="h-auto w-auto object-cover filter brightness-0 invert group-hover:filter-none transition-all duration-300" />
              </div>
              <div className="flex h-20 w-40 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900/50 px-6 hover:bg-white hover:scale-105 transition-all duration-300 group">
                <img src="/image/vechain-logo.png" alt="VeChain" className="h-auto w-auto object-cover filter brightness-0 invert group-hover:filter-none transition-all duration-300" />
              </div>
            </div>
          </div>

        </div>

        {/* Features Section */}
        <Features />

        {/* FAQ Section */}
        <FAQ />

      </NavbarDemo >

      {/* Footer */}
      <Footer />


      {/* gradent mask */}
      {/* <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div> */}


    </div>
  );
}



