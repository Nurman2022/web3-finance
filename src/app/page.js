import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { GridBackground } from "@/components/ui/GridBackground";
export default function Home() {
  return (
    <div className="bg-black">
      {/* <GridBackground /> */}
      <BackgroundBeamsWithCollision >

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

          {/* Partners Section */}
          <div className="mt-24">
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
              <div className="flex h-20 w-32 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900/50 px-6">
                <span className="text-xl font-bold text-neutral-300">TRON</span>
              </div>
              <div className="flex h-20 w-32 items-center justify-center rounded-lg border border-neutral-800 bg-white px-6">
                <span className="text-xl font-bold text-black">COSMOS</span>
              </div>
              <div className="flex h-20 w-32 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900/50 px-6">
                <span className="text-xl font-bold text-neutral-300">Stellar</span>
              </div>
              <div className="flex h-20 w-32 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900/50 px-6">
                <span className="text-xl font-bold text-neutral-300">OKX</span>
              </div>
              <div className="flex h-20 w-32 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900/50 px-6">
                <span className="text-sm font-bold text-neutral-300">ethereum</span>
              </div>
              <div className="flex h-20 w-32 items-center justify-center rounded-lg border border-neutral-800 bg-neutral-900/50 px-6">
                <span className="text-xl font-bold text-neutral-300">VeChain</span>
              </div>
            </div>
          </div>
        </div>

      </BackgroundBeamsWithCollision>

      {/* gradent mask */}
      {/* <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div> */}


    </div>
  );
}
