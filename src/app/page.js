'use client'
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { NavbarDemo } from "@/components/Navbar";
import { Features } from "@/components/sections/Features";
import { InfoSection } from "@/components/sections/InfoSection";
import { FAQ } from "@/components/sections/FAQ";
import { Footer } from "@/components/sections/Footer";
import { Partners } from "@/components/sections/Partners";
import { HeroGradientCircle } from "@/components/ui/HeroGradientCircle";


export default function Home() {
  return (
    <NavbarDemo >
      <div className="relative w-full overflow-hidden -mt-20">
        <BackgroundBeamsWithCollision>
          <div className="relative z-20 flex flex-col items-center justify-center px-4 text-center">
            {/* Badge */}
            <div className="mb-8">
              <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-neutral-400/20 to-neutral-800/20 border border-neutral-700 px-4 py-2 text-sm text-neutral-300">
                ✦ Trusted Platform
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="z-20 bg-gradient-to-r from-neutral-500 via-white to-neutral-500 bg-clip-text py-8 text-4xl font-light text-transparent lg:text-6xl max-w-5xl">
              Revolutionize Your Transactions With Secure Blockchain Solutions
            </h1>

            {/* Description */}
            <p className="mt-4 max-w-4xl text-base text-neutral-400 sm:text-lg">
              Experience the future of digital transactions with our state-of-the-art blockchain technology. Our secure,
              decentralized platform ensures every transaction is transparent, immutable, and protected against fraud.
            </p>

            {/* CTA Button */}
            <button className="mt-8 rounded-full bg-white px-8 py-3 text-base font-semibold text-black transition-all hover:bg-neutral-200">
              Get Started
            </button>

          </div>

        </BackgroundBeamsWithCollision>

        <HeroGradientCircle>

          <div className="absolute inset-0 pointer-events-none z-40">
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



            {/* Middle Left */}
            {/* <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-neutral-500/10 rounded-full blur-[90px]" /> */}

            {/* Center */}
            {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neutral-200/8 rounded-full blur-[150px]" /> */}
            {/* Center */}
            {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neutral-200/8 rounded-full blur-[150px]" /> */}

            {/* Middle Right */}
            {/* <div className="absolute top-2/3 right-10 w-[450px] h-[450px] bg-neutral-400/12 rounded-full blur-[110px]" /> */}

            {/* Bottom Left */}
            {/* <div className="absolute bottom-40 left-1/3 w-[400px] h-[400px] bg-neutral-300/15 rounded-full blur-[100px]" /> */}

            {/* Bottom Right */}
            {/* <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-neutral-500/18 rounded-full blur-[130px]" /> */}
          </div>
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



