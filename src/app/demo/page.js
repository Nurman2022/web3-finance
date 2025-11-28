import { OrbitUsers } from "@/components/illustrations/OrbitUsers";


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
                    <div className="bg-white rounded-3xl p-8 backdrop-blur-sm border border-white/10 overflow-hidden">
                        <OrbitUsers />

                    </div>
                </div>


            </div>
        </div>


    );
}