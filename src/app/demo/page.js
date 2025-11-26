

import { ShieldFlowAnimation } from "@/components/illustrations/ShieldFlowAnimation";
import { User } from "lucide-react";

export default function CardStackDemo() {
    return (
        // <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900/20 to-black p-8">
        //     <div className="max-w-6xl mx-auto space-y-16">

        //         <div className="space-y-6 bg-black">
        //             <div className="text-center">
        //                 <h2 className="text-2xl font-semibold text-white mb-2">
        //                     Demo page for testing
        //                 </h2>
        //                 <p className="text-gray-500 text-sm">
        //                     Kartu bergantian menghilang dan loop terus-menerus
        //                 </p>
        //             </div>
        //             <div className="bg-white/5 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
        //                 {/* <ShieldFlowAnimation /> */}
        //                 <div className="size-18 rounded-full bg-radial from-pink-400 from-40% to-fuchsia-700"></div>
        //                 <div className="size-18 rounded-full bg-radial-[at_50%_75%] from-sky-200 via-blue-400 to-indigo-900 to-90%"></div>
        //                 <div className="size-56 rounded-full bg-radial-[at_20%_30%] from-[#050505] to-[#292929] to-85%%"></div>
        //             </div>
        //         </div>


        //     </div>
        // </div>

        <>
            <div className="w-full overflow-hidden relative bg-amber-300">

                <div className="h-[3000px] w-[3000px] absolute z-10 left-1/2 -translate-x-1/2 top-60 rounded-full bg-radial from-[#000000] via-[#090909] to-[#3b3b3b] to-95%"></div>
                <main className="min-h-screen">
                    <div className="h-[2000px] p-8">
                        <h1 className="text-white text-4xl">Scroll Test</h1>
                        <p className="text-white mt-4">Page ini bisa di-scroll sekarang!</p>
                    </div>
                </main>

            </div>


        </>
    );
}