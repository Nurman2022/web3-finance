// Example: Cara menggunakan CardStack components

import { CardStackDiv } from "@/components/svg/CardStackDiv";
import { CardStackCustom } from "@/components/svg/CardStackCustom";

// ============================================
// Example 1: Simple DIV Version
// ============================================
export function Example1() {
    return (
        <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-white text-center mb-12">
                    Our Features
                </h2>
                <CardStackDiv className="max-w-5xl mx-auto" />
            </div>
        </section>
    );
}

// ============================================
// Example 2: Wallet Cards
// ============================================
export function WalletExample() {
    const walletCards = [
        {
            id: 1,
            title: "Main Wallet",
            subtitle: "Ethereum Network",
            color: "from-purple-500 to-indigo-600",
            amount: "12.5480",
            currency: "ETH"
        },
        {
            id: 2,
            title: "Savings",
            subtitle: "Bitcoin Network",
            color: "from-orange-500 to-amber-600",
            amount: "0.8543",
            currency: "BTC"
        },
        {
            id: 3,
            title: "Trading",
            subtitle: "Multi-Chain",
            color: "from-cyan-500 to-blue-600",
            amount: "5,432.10",
            currency: "USDT"
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-white text-center mb-4">
                    Your Crypto Wallets
                </h2>
                <p className="text-gray-300 text-center mb-12">
                    Manage all your digital assets in one place
                </p>
                <CardStackCustom cards={walletCards} className="max-w-5xl mx-auto" />
            </div>
        </section>
    );
}

// ============================================
// Example 3: Credit Cards
// ============================================
export function CreditCardExample() {
    const creditCards = [
        {
            id: 4536,
            title: "Platinum Card",
            subtitle: "Premium Rewards",
            color: "from-slate-600 to-gray-800",
            amount: "15,240",
            currency: "USD"
        },
        {
            id: 7829,
            title: "Gold Card",
            subtitle: "Cashback Plus",
            color: "from-yellow-600 to-amber-700",
            amount: "8,567",
            currency: "USD"
        },
        {
            id: 9134,
            title: "Travel Card",
            subtitle: "Miles & Points",
            color: "from-blue-600 to-indigo-700",
            amount: "23,891",
            currency: "USD"
        }
    ];

    return (
        <section className="py-20 bg-black">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Your Cards
                    </h2>
                    <p className="text-gray-400">
                        Select a card to view details
                    </p>
                </div>
                <CardStackCustom cards={creditCards} className="max-w-6xl mx-auto" />

                <div className="mt-16 text-center">
                    <button className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-colors">
                        Add New Card
                    </button>
                </div>
            </div>
        </section>
    );
}

// ============================================
// Example 4: NFT Collections
// ============================================
export function NFTExample() {
    const nftCollections = [
        {
            id: 1,
            title: "Bored Apes",
            subtitle: "BAYC Collection",
            color: "from-green-500 to-emerald-600",
            amount: "45.2",
            currency: "ETH"
        },
        {
            id: 2,
            title: "CryptoPunks",
            subtitle: "Rare #3456",
            color: "from-pink-500 to-rose-600",
            amount: "89.7",
            currency: "ETH"
        },
        {
            id: 3,
            title: "Azuki",
            subtitle: "Gen 1",
            color: "from-red-500 to-orange-600",
            amount: "12.3",
            currency: "ETH"
        }
    ];

    return (
        <section className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900/30 to-black flex items-center">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">
                        NFT Portfolio
                    </span>
                    <h2 className="text-5xl font-bold text-white mt-4 mb-6">
                        Your Collections
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Premium NFTs worth over 147 ETH
                    </p>
                </div>
                <CardStackCustom cards={nftCollections} className="max-w-6xl mx-auto" />
            </div>
        </section>
    );
}

// ============================================
// Example 5: Subscription Plans
// ============================================
export function PricingExample() {
    const pricingPlans = [
        {
            id: 1,
            title: "Starter",
            subtitle: "For Individuals",
            color: "from-gray-500 to-gray-600",
            amount: "9.99",
            currency: "/mo"
        },
        {
            id: 2,
            title: "Professional",
            subtitle: "For Teams",
            color: "from-blue-500 to-cyan-600",
            amount: "29.99",
            currency: "/mo"
        },
        {
            id: 3,
            title: "Enterprise",
            subtitle: "For Organizations",
            color: "from-purple-500 to-pink-600",
            amount: "99.99",
            currency: "/mo"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Choose Your Plan
                    </h2>
                    <p className="text-gray-600">
                        Flexible pricing for every need
                    </p>
                </div>
                <CardStackCustom cards={pricingPlans} className="max-w-5xl mx-auto" />
            </div>
        </section>
    );
}

// ============================================
// Example 6: Landing Page Hero
// ============================================
export function HeroWithCards() {
    return (
        <section className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />

            <div className="relative container mx-auto px-4 pt-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <h1 className="text-6xl font-bold text-white leading-tight">
                            Manage Your
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                                Digital Wallet
                            </span>
                        </h1>
                        <p className="text-xl text-gray-300">
                            Secure, fast, and easy way to manage your crypto assets and digital cards.
                        </p>
                        <div className="flex gap-4">
                            <button className="px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-all">
                                Get Started
                            </button>
                            <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-black transition-all">
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Right - Cards */}
                    <div>
                        <CardStackDiv className="lg:scale-110" />
                    </div>
                </div>
            </div>
        </section>
    );
}

// ============================================
// Example 7: Dashboard Widget
// ============================================
export function DashboardWidget() {
    const accountCards = [
        {
            id: 1,
            title: "Checking",
            subtitle: "****1234",
            color: "from-blue-600 to-cyan-600",
            amount: "12,450.80",
            currency: "USD"
        },
        {
            id: 2,
            title: "Savings",
            subtitle: "****5678",
            color: "from-green-600 to-emerald-600",
            amount: "45,230.50",
            currency: "USD"
        },
        {
            id: 3,
            title: "Investment",
            subtitle: "****9012",
            color: "from-purple-600 to-pink-600",
            amount: "89,765.20",
            currency: "USD"
        }
    ];

    return (
        <div className="bg-gray-900 rounded-3xl p-8">
            <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-bold text-white">Your Accounts</h3>
                <button className="text-sm text-blue-400 hover:text-blue-300">
                    View All →
                </button>
            </div>
            <CardStackCustom cards={accountCards} />
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                <div>
                    <div className="text-gray-400 text-sm">Total Balance</div>
                    <div className="text-white font-bold text-lg">$147,446.50</div>
                </div>
                <div>
                    <div className="text-gray-400 text-sm">This Month</div>
                    <div className="text-green-400 font-bold text-lg">+$5,240</div>
                </div>
                <div>
                    <div className="text-gray-400 text-sm">Transactions</div>
                    <div className="text-white font-bold text-lg">142</div>
                </div>
            </div>
        </div>
    );
}
