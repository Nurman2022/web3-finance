'use client'
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { NavbarDemo } from "@/components/Navbar";

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
        <div className="min-h-screen text-white">
          <h1>tes</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibulum semper interdum. Aliquam aliquet, quam a egestas imperdiet, mauris enim tempor diam, volutpat facilisis arcu libero in sapien. Nullam aliquam leo at ipsum faucibus, vel efficitur libero dictum. Nullam eget velit vitae erat dignissim viverra. Donec id ultrices lectus. Praesent a luctus est. Suspendisse potenti. Nunc et mollis lectus. Vestibulum faucibus metus ut libero tempus feugiat. Cras auctor malesuada justo eu molestie. Morbi eu turpis nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
            In vestibulum, nisl eget mattis sagittis, erat risus imperdiet felis, et placerat orci tellus ac nisi. Quisque feugiat tempus hendrerit. Ut tristique laoreet neque tempus cursus. Nam lacus nisl, dignissim quis consectetur sit amet, blandit vel arcu. Cras rutrum urna turpis, a luctus lectus ultrices ac. Suspendisse efficitur purus non tortor maximus posuere. Cras at magna a urna blandit suscipit. Nulla facilisi. Morbi luctus ante sit amet ex bibendum, eget auctor ligula pulvinar. Praesent vitae enim in arcu fringilla mollis non vitae magna. Aenean cursus aliquet libero, sed volutpat ex vehicula iaculis. Maecenas aliquet, odio a mollis aliquet, lorem tortor vehicula augue, maximus dictum ipsum velit sit amet odio. Duis ac purus eros.

            Quisque scelerisque, ligula a efficitur hendrerit, velit turpis auctor tellus, id elementum erat elit id dui. Vestibulum at nibh eu tellus vulputate feugiat vitae non nisi. Duis vel laoreet nunc, sodales semper arcu. Ut vestibulum aliquam tincidunt. Vestibulum id lorem vel urna malesuada sollicitudin. Sed non libero suscipit, condimentum sapien at, imperdiet leo. Ut dictum vehicula fermentum. Integer sodales scelerisque augue eu consectetur. Ut sit amet varius urna, eget congue sapien. In eleifend, est in blandit scelerisque, nunc tortor malesuada erat, ut rutrum mauris mi at elit.

            Nullam tempus dui eget ornare mattis. Sed ut ex lectus. Sed egestas, risus et placerat varius, urna nisi convallis est, eget eleifend lacus massa eget orci. Phasellus at vestibulum magna, at laoreet tellus. Quisque ornare enim a tellus congue malesuada. Integer in quam condimentum, volutpat quam ut, placerat dolor. Nam sed tortor mattis, blandit metus eu, fringilla urna. Duis ante erat, commodo eget condimentum sit amet, imperdiet a augue. Nunc semper egestas commodo. Integer nec vestibulum dolor, quis aliquam nisl. Sed dictum, risus id volutpat ultrices, est lectus feugiat elit, eget auctor sapien est id eros. Nam ac turpis a urna feugiat semper. Etiam ipsum lorem, placerat in justo et, egestas faucibus est.

            Cras urna eros, gravida a consectetur vitae, vestibulum varius mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at lorem non libero ornare fermentum. Nunc at varius sem, vitae blandit libero. Vivamus quis elit non velit lobortis commodo nec ut ante. Sed ullamcorper ante non sem condimentum, quis volutpat tortor fermentum. Donec fermentum sem nec mollis tincidunt. Duis sed est ut ipsum bibendum sodales. Integer pellentesque nec felis congue ultrices.</p>

        </div>

      </NavbarDemo >




      {/* gradent mask */}
      {/* <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div> */}


    </div>
  );
}



