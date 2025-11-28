'use client';
import { motion } from "motion/react";



export function OrbitUsers() {
    return (
        <div className="flex items-center justify-center relative w-full h-full top-24">
            <div className="absolute inset-0 flex items-center justify-center">
                <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-96 rounded-full bg-radial from-[#1A1A1A] from-[30%] to-[#3A3A3A] shadow-2xl shadow-[#1A1A1A]"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                    <UserCircle className="absolute top-10 left-10" duration={30} />
                    <UserCircle className="absolute bottom-10 right-10" duration={30} />
                </motion.div>
            </div>


            <motion.div className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-80 rounded-full bg-radial from-[#1A1A1A] from-[20%] to-[#3A3A3A] z-10 shadow-2xl shadow-[#1A1A1A]">
                    <UserCircle className="absolute bottom-5 left-5" duration={20} />
                    <UserCircle className="absolute top-5 right-5" duration={20} />
                </div>
            </motion.div>


            <div className="absolute inset-0 flex items-center justify-center">
                <GroupUser />
                <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-64 rounded-full bg-radial from-[#1A1A1A] to-[#3A3A3A] shadow-2xl shadow-[#1A1A1A] z-20"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                    <UserCircle className="absolute top-20 -left-5" duration={20} />
                    <UserCircle className="absolute top-1/2 -right-5" duration={20} />
                </motion.div>
            </div>
        </div>
    )


}


function GroupUser() {
    return (
        <svg width="60" height="60" viewBox="0 0 141 141" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
            <g filter="url(#filter0_d_15_24)">
                <circle cx="70.5" cy="66.5" r="66" fill="url(#paint0_linear_15_24)" stroke="#434141" />
                <g clipPath="url(#clip0_15_24)">
                    <path d="M59.987 66.5C56.8932 66.5949 54.3628 67.8092 52.3958 70.1429H48.5573C46.9913 70.1429 45.6736 69.7586 44.6042 68.9902C43.5347 68.2218 43 67.0977 43 65.6177C43 58.9202 44.184 55.5714 46.5521 55.5714C46.6667 55.5714 47.082 55.7706 47.7982 56.1691C48.5143 56.5675 49.4453 56.9707 50.5911 57.3786C51.737 57.7866 52.8733 57.9905 54 57.9905C55.2795 57.9905 56.5495 57.7723 57.8099 57.3359C57.7144 58.0379 57.6667 58.6641 57.6667 59.2143C57.6667 61.8516 58.4401 64.2801 59.987 66.5ZM90.6667 84.6289C90.6667 86.9057 89.9696 88.7034 88.5755 90.022C87.1814 91.3407 85.329 92 83.0182 92H57.9818C55.671 92 53.8186 91.3407 52.4245 90.022C51.0304 88.7034 50.3333 86.9057 50.3333 84.6289C50.3333 83.6233 50.3668 82.6415 50.4336 81.6833C50.5004 80.7252 50.6341 79.6911 50.8346 78.5812C51.0352 77.4713 51.2882 76.442 51.5938 75.4933C51.8993 74.5446 52.3099 73.6197 52.8255 72.7185C53.3411 71.8172 53.9332 71.0488 54.6016 70.4132C55.27 69.7776 56.0864 69.2701 57.0508 68.8906C58.0152 68.5112 59.0799 68.3214 60.2448 68.3214C60.4358 68.3214 60.8464 68.5254 61.4766 68.9333C62.1068 69.3412 62.8038 69.7966 63.5677 70.2994C64.3316 70.8022 65.3533 71.2575 66.6328 71.6655C67.9123 72.0734 69.2014 72.2773 70.5 72.2773C71.7986 72.2773 73.0877 72.0734 74.3672 71.6655C75.6467 71.2575 76.6684 70.8022 77.4323 70.2994C78.1962 69.7966 78.8932 69.3412 79.5234 68.9333C80.1536 68.5254 80.5642 68.3214 80.7552 68.3214C81.9201 68.3214 82.9848 68.5112 83.9492 68.8906C84.9136 69.2701 85.73 69.7776 86.3984 70.4132C87.0668 71.0488 87.6589 71.8172 88.1745 72.7185C88.6901 73.6197 89.1007 74.5446 89.4062 75.4933C89.7118 76.442 89.9648 77.4713 90.1654 78.5812C90.3659 79.6911 90.4996 80.7252 90.5664 81.6833C90.6332 82.6415 90.6667 83.6233 90.6667 84.6289ZM61.3333 48.2857C61.3333 50.2969 60.6172 52.014 59.1849 53.4369C57.7526 54.8599 56.0243 55.5714 54 55.5714C51.9757 55.5714 50.2474 54.8599 48.8151 53.4369C47.3828 52.014 46.6667 50.2969 46.6667 48.2857C46.6667 46.2746 47.3828 44.5575 48.8151 43.1345C50.2474 41.7115 51.9757 41 54 41C56.0243 41 57.7526 41.7115 59.1849 43.1345C60.6172 44.5575 61.3333 46.2746 61.3333 48.2857ZM81.5 59.2143C81.5 62.231 80.4258 64.8066 78.2773 66.9411C76.1289 69.0756 73.5365 70.1429 70.5 70.1429C67.4635 70.1429 64.8711 69.0756 62.7227 66.9411C60.5742 64.8066 59.5 62.231 59.5 59.2143C59.5 56.1975 60.5742 53.6219 62.7227 51.4874C64.8711 49.353 67.4635 48.2857 70.5 48.2857C73.5365 48.2857 76.1289 49.353 78.2773 51.4874C80.4258 53.6219 81.5 56.1975 81.5 59.2143ZM98 65.6177C98 67.0977 97.4653 68.2218 96.3958 68.9902C95.3264 69.7586 94.0087 70.1429 92.4427 70.1429H88.6042C86.6372 67.8092 84.1068 66.5949 81.013 66.5C82.5599 64.2801 83.3333 61.8516 83.3333 59.2143C83.3333 58.6641 83.2856 58.0379 83.1901 57.3359C84.4505 57.7723 85.7205 57.9905 87 57.9905C88.1267 57.9905 89.263 57.7866 90.4089 57.3786C91.5547 56.9707 92.4857 56.5675 93.2018 56.1691C93.918 55.7706 94.3333 55.5714 94.4479 55.5714C96.816 55.5714 98 58.9202 98 65.6177ZM94.3333 48.2857C94.3333 50.2969 93.6172 52.014 92.1849 53.4369C90.7526 54.8599 89.0243 55.5714 87 55.5714C84.9757 55.5714 83.2474 54.8599 81.8151 53.4369C80.3828 52.014 79.6667 50.2969 79.6667 48.2857C79.6667 46.2746 80.3828 44.5575 81.8151 43.1345C83.2474 41.7115 84.9757 41 87 41C89.0243 41 90.7526 41.7115 92.1849 43.1345C93.6172 44.5575 94.3333 46.2746 94.3333 48.2857Z" fill="white" />
                </g>
            </g>
            <defs>
                <filter id="filter0_d_15_24" x="0" y="0" width="141" height="141" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_15_24" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_15_24" result="shape" />
                </filter>
                <linearGradient id="paint0_linear_15_24" x1="137" y1="6.07358" x2="4" y2="126.926" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#242424" />
                    <stop offset="1" stopColor="#595959" />
                </linearGradient>
                <clipPath id="clip0_15_24">
                    <rect width="55" height="51" fill="white" transform="translate(43 41)" />
                </clipPath>
            </defs>
        </svg>
    )
}



function UserCircle({ className, duration }) {
    return (

        <motion.svg width="40" height="40" viewBox="0 0 101 101" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}
            animate={{ rotate: -360 }}
            transition={{ duration: duration, repeat: Infinity, ease: "linear" }}
        >
            <circle cx="50.11" cy="50.11" r="49" transform="rotate(-0.71054 50.11 50.11)" fill="black" fillOpacity="0.31" stroke="#323232" />
            <path fillRule="evenodd" clipRule="evenodd" d="M43.2305 39.6946C43.2034 37.5067 44.0465 35.3977 45.5744 33.8314C47.1022 32.2652 49.1897 31.37 51.3776 31.3429C53.5655 31.3158 55.6745 32.1589 57.2407 33.6867C58.807 35.2146 59.7021 37.3021 59.7293 39.4899C59.7564 41.6778 58.9133 43.7868 57.3854 45.3531C55.8576 46.9193 53.7701 47.8145 51.5822 47.8416C49.3943 47.8687 47.2853 47.0256 45.7191 45.4978C44.1528 43.9699 43.2577 41.8824 43.2305 39.6946ZM36.6786 65.637C36.6912 61.6664 38.2646 57.86 41.0593 55.0394C43.8539 52.2188 47.6456 50.6103 51.6159 50.5611C55.5862 50.5118 59.4167 52.0258 62.2804 54.7762C65.1442 57.5266 66.8115 61.2928 66.9226 65.2619C66.9307 65.5291 66.8607 65.7928 66.7212 66.0209C66.5817 66.2489 66.3788 66.4314 66.1373 66.5459C61.6697 68.6606 56.7976 69.7843 51.855 69.8399C46.7478 69.9033 41.8815 68.8489 37.4955 66.9011C37.2512 66.7926 37.0438 66.6152 36.8987 66.3907C36.7536 66.1662 36.6771 65.9043 36.6786 65.637Z" fill="white" />
        </motion.svg>

    )
}



