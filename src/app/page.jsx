'use client'
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { NavbarDemo } from "@/components/navbar";
import { Features } from "@/components/sections/features";
import { InfoSection } from "@/components/sections/info-section";
import { FAQ } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";
import { Partners } from "@/components/sections/partners";
import { HeroGradientCircle } from "@/components/ui/hero-gradient-circle";


export default function Home() {
  return (
    <NavbarDemo >
      <div className="relative w-full overflow-hidden -mt-20">
        <BackgroundBeamsWithCollision>
          <div className="relative z-20 flex flex-col items-center justify-center px-4 text-center">
            <div className="mb-8">

              <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-neutral-400/20 to-neutral-800/20 border border-neutral-700 px-4 py-2 text-sm text-neutral-300">
                ✦ Trusted Platform
              </span>
            </div>

            <h1 className="z-20 bg-gradient-to-r from-neutral-500 via-white to-neutral-500 bg-clip-text font-normal py-8 text-4xl text-transparent lg:text-6xl max-w-5xl">
              Revolutionize Your Transactions With Secure Blockchain Solutions
            </h1>

            <p className="mt-4 max-w-4xl text-base text-neutral-400 sm:text-lg">
              Experience the future of digital transactions with our state of the art blockchain technology. Our secure,
              decentralized platform ensures every transaction is transparent, immutable, and protected against fraud.
            </p>

            <button className="mt-8 rounded-full bg-white px-8 py-3 text-base font-semibold text-black transition-all hover:bg-neutral-200">
              Get Started
            </button>

          </div>

        </BackgroundBeamsWithCollision>

        <HeroGradientCircle>
          <Partners />
          <Features />
          <InfoSection />
          <FAQ />
        </HeroGradientCircle>

        <Footer />
      </div>
    </NavbarDemo >
  );
}



