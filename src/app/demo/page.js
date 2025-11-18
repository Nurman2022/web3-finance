import { RadarPulse } from "@/components/svg/RadarPulse";
import { User } from "lucide-react";

export default function CardStackDemo() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900/20 to-black p-8">
            <div className="max-w-6xl mx-auto space-y-16">

                <div className="space-y-6 bg-black">
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold text-white mb-2">
                            Demo page for testing
                        </h2>
                        <p className="text-gray-500 text-sm">
                            Kartu bergantian menghilang dan loop terus-menerus
                        </p>
                    </div>
                    {/* <div className="bg-white/5 rounded-3xl p-8 backdrop-blur-sm border border-white/10">
                        <RadarPulse />
                    </div> */}
                    <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-b from-neutral-400/20 to-neutral-800/20 border border-neutral-700 px-4 py-2 text-sm text-neutral-300"><User /> Create Account</div>
                    <div className="flex gap-4 h-20 w-44 bg-gray-700 bg-gradient-to-b from-gray-900 to-gray-600 border-2 border-[#2b2b2a] text-white font-semibold text-sm items-center justify-center rounded-3xl p-2"><User /> Create Account </div>
                </div>


            </div>
        </div>
    );
}