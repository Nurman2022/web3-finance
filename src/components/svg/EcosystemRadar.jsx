"use client";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function EcosystemRadar({ className }) {
    return (
        <div className={cn("relative w-full h-auto", className)}>
            <svg width="1452" height="733" viewBox="0 0 1452 733" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
                {/* Radar Circles with pulse animation */}
                <motion.g id="radar">
                    {/* Outer circle */}
                    <motion.circle
                        cx="725.5" cy="639.5" r="457.5"
                        fill="url(#paint0_radial_1_2)"
                        animate={{
                            scale: [1, 1.02, 1],
                            opacity: [0.6, 0.8, 0.6]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />

                    {/* Middle circle */}
                    <motion.circle
                        cx="726" cy="640" r="366"
                        fill="url(#paint1_radial_1_2)"
                        animate={{
                            scale: [1, 1.03, 1],
                            opacity: [0.7, 1, 0.7]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5
                        }}
                    />

                    {/* Inner circle */}
                    <motion.circle
                        cx="726" cy="640" r="280"
                        fill="url(#paint2_radial_1_2)"
                        animate={{
                            scale: [1, 1.05, 1],
                            opacity: [0.8, 1, 0.8]
                        }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1
                        }}
                    />
                </motion.g>

                {/* Rotating radar sweep effect */}
                <motion.g
                    style={{ transformOrigin: "726px 640px" }}
                    animate={{ rotate: [0, 360] }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    <defs>
                        <radialGradient id="radarSweep" cx="0" cy="0" r="1">
                            <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
                            <stop offset="30%" stopColor="rgba(255,255,255,0.2)" />
                            <stop offset="70%" stopColor="rgba(255,255,255,0.05)" />
                            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                        </radialGradient>
                    </defs>
                    <path
                        d="M 726 640 L 1183.5 640 A 457.5 457.5 0 0 1 904.5 1029.5 Z"
                        fill="url(#radarSweep)"
                        opacity="0.6"
                    />
                </motion.g>

                {/* User Circle 1 - Clockwise rotation */}
                <motion.g
                    id="user-circle-1"
                    style={{ transformOrigin: "726px 640px" }}
                    animate={{ rotate: [0, 360] }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    <motion.g
                        style={{ transformOrigin: "836.5px 278.5px" }}
                        animate={{ rotate: [0, -360] }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    >
                        <motion.circle
                            cx="836.5" cy="278.5" r="49"
                            fill="black" fillOpacity="0.31"
                            stroke="#323232"
                            whileHover={{
                                scale: 1.2,
                                fill: "#4A5568",
                                stroke: "#63B3ED"
                            }}
                            transition={{ duration: 0.3 }}
                        />
                        <motion.path
                            fillRule="evenodd" clipRule="evenodd"
                            d="M829.75 268C829.75 265.812 830.619 263.714 832.166 262.166C833.713 260.619 835.812 259.75 838 259.75C840.188 259.75 842.286 260.619 843.833 262.166C845.381 263.714 846.25 265.812 846.25 268C846.25 270.188 845.381 272.286 843.833 273.834C842.286 275.381 840.188 276.25 838 276.25C835.812 276.25 833.713 275.381 832.166 273.834C830.619 272.286 829.75 270.188 829.75 268ZM822.877 293.859C822.939 289.889 824.559 286.102 827.388 283.317C830.218 280.531 834.029 278.97 838 278.97C841.97 278.97 845.782 280.531 848.611 283.317C851.441 286.102 853.061 289.889 853.123 293.859C853.128 294.126 853.055 294.389 852.912 294.616C852.77 294.842 852.565 295.022 852.322 295.133C847.828 297.193 842.943 298.256 838 298.25C832.892 298.25 828.039 297.135 823.678 295.133C823.435 295.022 823.23 294.842 823.087 294.616C822.945 294.389 822.872 294.126 822.877 293.859Z"
                            fill="white"
                            animate={{
                                scale: [1, 1.1, 1]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    </motion.g>
                </motion.g>

                {/* User Circle 2 - Counter-clockwise rotation */}
                <motion.g
                    id="user-circle-2"
                    style={{ transformOrigin: "726px 640px" }}
                    animate={{ rotate: [0, -360] }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    <motion.g
                        style={{ transformOrigin: "998.5px 524.5px" }}
                        animate={{ rotate: [0, 360] }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    >
                        <motion.circle
                            cx="998.5" cy="524.5" r="49"
                            fill="black" fillOpacity="0.31"
                            stroke="#323232"
                            whileHover={{
                                scale: 1.2,
                                fill: "#4A5568",
                                stroke: "#63B3ED"
                            }}
                            transition={{ duration: 0.3 }}
                        />
                        <motion.path
                            fillRule="evenodd" clipRule="evenodd"
                            d="M991.75 514C991.75 511.812 992.619 509.714 994.166 508.166C995.713 506.619 997.812 505.75 1000 505.75C1002.19 505.75 1004.29 506.619 1005.83 508.166C1007.38 509.714 1008.25 511.812 1008.25 514C1008.25 516.188 1007.38 518.286 1005.83 519.834C1004.29 521.381 1002.19 522.25 1000 522.25C997.812 522.25 995.713 521.381 994.166 519.834C992.619 518.286 991.75 516.188 991.75 514ZM984.877 539.859C984.939 535.889 986.559 532.102 989.388 529.317C992.218 526.531 996.029 524.97 1000 524.97C1003.97 524.97 1007.78 526.531 1010.61 529.317C1013.44 532.102 1015.06 535.889 1015.12 539.859C1015.13 540.126 1015.05 540.389 1014.91 540.616C1014.77 540.842 1014.56 541.022 1014.32 541.133C1009.83 543.193 1004.94 544.256 1000 544.25C994.892 544.25 990.039 543.135 985.678 541.133C985.435 541.022 985.23 540.842 985.087 540.616C984.945 540.389 984.872 540.126 984.877 539.859Z"
                            fill="white"
                            animate={{
                                scale: [1, 1.15, 1]
                            }}
                            transition={{
                                duration: 1.8,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.5
                            }}
                        />
                    </motion.g>
                </motion.g>

                {/* User Circle 3 - Clockwise rotation different speed */}
                <motion.g
                    id="user-circle-3"
                    style={{ transformOrigin: "726px 640px" }}
                    animate={{ rotate: [0, 360] }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    <motion.g
                        style={{ transformOrigin: "1034.5px 259.5px" }}
                        animate={{ rotate: [0, -360] }}
                        transition={{
                            duration: 30,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    >
                        <motion.circle
                            cx="1034.5" cy="259.5" r="49"
                            fill="black" fillOpacity="0.31"
                            stroke="#323232"
                            whileHover={{
                                scale: 1.2,
                                fill: "#4A5568",
                                stroke: "#63B3ED"
                            }}
                            transition={{ duration: 0.3 }}
                        />
                        <motion.path
                            fillRule="evenodd" clipRule="evenodd"
                            d="M1027.75 249C1027.75 246.812 1028.62 244.714 1030.17 243.166C1031.71 241.619 1033.81 240.75 1036 240.75C1038.19 240.75 1040.29 241.619 1041.83 243.166C1043.38 244.714 1044.25 246.812 1044.25 249C1044.25 251.188 1043.38 253.286 1041.83 254.834C1040.29 256.381 1038.19 257.25 1036 257.25C1033.81 257.25 1031.71 256.381 1030.17 254.834C1028.62 253.286 1027.75 251.188 1027.75 249ZM1020.88 274.859C1020.94 270.889 1022.56 267.102 1025.39 264.317C1028.22 261.531 1032.03 259.97 1036 259.97C1039.97 259.97 1043.78 261.531 1046.61 264.317C1049.44 267.102 1051.06 270.889 1051.12 274.859C1051.13 275.126 1051.05 275.389 1050.91 275.616C1050.77 275.842 1050.56 276.022 1050.32 276.133C1045.83 278.193 1040.94 279.256 1036 279.25C1030.89 279.25 1026.04 278.135 1021.68 276.133C1021.43 276.022 1021.23 275.842 1021.09 275.616C1020.95 275.389 1020.87 275.126 1020.88 274.859Z"
                            fill="white"
                            animate={{
                                scale: [1, 1.08, 1]
                            }}
                            transition={{
                                duration: 2.2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.3
                            }}
                        />
                    </motion.g>
                </motion.g>

                {/* User Circle 4 - Counter-clockwise rotation */}
                <motion.g
                    id="user-circle-4"
                    style={{ transformOrigin: "726px 640px" }}
                    animate={{ rotate: [0, -360] }}
                    transition={{
                        duration: 35,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    <motion.g
                        style={{ transformOrigin: "408.5px 543.5px" }}
                        animate={{ rotate: [0, 360] }}
                        transition={{
                            duration: 35,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    >
                        <motion.circle
                            cx="408.5" cy="543.5" r="49"
                            fill="black" fillOpacity="0.31"
                            stroke="#323232"
                            whileHover={{
                                scale: 1.2,
                                fill: "#4A5568",
                                stroke: "#63B3ED"
                            }}
                            transition={{ duration: 0.3 }}
                        />
                        <motion.path
                            fillRule="evenodd" clipRule="evenodd"
                            d="M401.75 533C401.75 530.812 402.619 528.714 404.166 527.166C405.713 525.619 407.812 524.75 410 524.75C412.188 524.75 414.286 525.619 415.833 527.166C417.381 528.714 418.25 530.812 418.25 533C418.25 535.188 417.381 537.286 415.833 538.834C414.286 540.381 412.188 541.25 410 541.25C407.812 541.25 405.713 540.381 404.166 538.834C402.619 537.286 401.75 535.188 401.75 533ZM394.877 558.859C394.939 554.889 396.559 551.102 399.388 548.317C402.218 545.531 406.029 543.97 410 543.97C413.97 543.97 417.782 545.531 420.611 548.317C423.441 551.102 425.061 554.889 425.123 558.859C425.128 559.126 425.055 559.389 424.912 559.616C424.77 559.842 424.565 560.022 424.322 560.133C419.828 562.193 414.943 563.256 410 563.25C404.892 563.25 400.039 562.135 395.678 560.133C395.435 560.022 395.23 559.842 395.087 559.616C394.945 559.389 394.872 559.126 394.877 558.859Z"
                            fill="white"
                            animate={{
                                scale: [1, 1.12, 1]
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.7
                            }}
                        />
                    </motion.g>
                </motion.g>

                {/* User Circle 5 - Clockwise rotation */}
                <motion.g
                    id="user-circle-5"
                    style={{ transformOrigin: "726px 640px" }}
                    animate={{ rotate: [0, 360] }}
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    <motion.g
                        style={{ transformOrigin: "604.5px 287.5px" }}
                        animate={{ rotate: [0, -360] }}
                        transition={{
                            duration: 40,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    >
                        <motion.circle
                            cx="604.5" cy="287.5" r="49"
                            fill="black" fillOpacity="0.31"
                            stroke="#323232"
                            whileHover={{
                                scale: 1.2,
                                fill: "#4A5568",
                                stroke: "#63B3ED"
                            }}
                            transition={{ duration: 0.3 }}
                        />
                        <motion.path
                            fillRule="evenodd" clipRule="evenodd"
                            d="M597.75 277C597.75 274.812 598.619 272.714 600.166 271.166C601.713 269.619 603.812 268.75 606 268.75C608.188 268.75 610.286 269.619 611.833 271.166C613.381 272.714 614.25 274.812 614.25 277C614.25 279.188 613.381 281.286 611.833 282.834C610.286 284.381 608.188 285.25 606 285.25C603.812 285.25 601.713 284.381 600.166 282.834C598.619 281.286 597.75 279.188 597.75 277ZM590.877 302.859C590.939 298.889 592.559 295.102 595.388 292.317C598.218 289.531 602.029 287.97 606 287.97C609.97 287.97 613.782 289.531 616.611 292.317C619.441 295.102 621.061 298.889 621.123 302.859C621.128 303.126 621.055 303.389 620.912 303.616C620.77 303.842 620.565 304.022 620.322 304.133C615.828 306.193 610.943 307.256 606 307.25C600.892 307.25 596.039 306.135 591.678 304.133C591.435 304.022 591.23 303.842 591.087 303.616C590.945 303.389 590.872 303.126 590.877 302.859Z"
                            fill="white"
                            animate={{
                                scale: [1, 1.06, 1]
                            }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1
                            }}
                        />
                    </motion.g>
                </motion.g>

                {/* Central Group User - Pulsing animation */}
                <motion.g
                    id="group-user"
                    animate={{
                        scale: [1, 1.1, 1],
                        filter: [
                            "drop-shadow(0 4px 8px rgba(0,0,0,0.25))",
                            "drop-shadow(0 8px 16px rgba(99, 179, 237, 0.4))",
                            "drop-shadow(0 4px 8px rgba(0,0,0,0.25))"
                        ]
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <motion.circle
                        cx="720.5" cy="629.5" r="66"
                        fill="url(#paint3_linear_1_2)"
                        stroke="#434141"
                        whileHover={{
                            scale: 1.15,
                            stroke: "#63B3ED",
                            fill: "url(#paint3_linear_1_2_hover)"
                        }}
                        transition={{ duration: 0.3 }}
                    />
                    <motion.path
                        d="M709.987 629.5C706.893 629.595 704.363 630.809 702.396 633.143H698.557C696.991 633.143 695.674 632.759 694.604 631.99C693.535 631.222 693 630.098 693 628.618C693 621.92 694.184 618.571 696.552 618.571C696.667 618.571 697.082 618.771 697.798 619.169C698.514 619.568 699.445 619.971 700.591 620.379C701.737 620.787 702.873 620.991 704 620.991C705.28 620.991 706.549 620.772 707.81 620.336C707.714 621.038 707.667 621.664 707.667 622.214C707.667 624.852 708.44 627.28 709.987 629.5ZM740.667 647.629C740.667 649.906 739.97 651.703 738.576 653.022C737.181 654.341 735.329 655 733.018 655H707.982C705.671 655 703.819 654.341 702.424 653.022C701.03 651.703 700.333 649.906 700.333 647.629C700.333 646.623 700.367 645.641 700.434 644.683C700.5 643.725 700.634 642.691 700.835 641.581C701.035 640.471 701.288 639.442 701.594 638.493C701.899 637.545 702.31 636.62 702.826 635.718C703.341 634.817 703.933 634.049 704.602 633.413C705.27 632.778 706.086 632.27 707.051 631.891C708.015 631.511 709.08 631.321 710.245 631.321C710.436 631.321 710.846 631.525 711.477 631.933C712.107 632.341 712.804 632.797 713.568 633.299C714.332 633.802 715.353 634.258 716.633 634.665C717.912 635.073 719.201 635.277 720.5 635.277C721.799 635.277 723.088 635.073 724.367 634.665C725.647 634.258 726.668 633.802 727.432 633.299C728.196 632.797 728.893 632.341 729.523 631.933C730.154 631.525 730.564 631.321 730.755 631.321C731.92 631.321 732.985 631.511 733.949 631.891C734.914 632.27 735.73 632.778 736.398 633.413C737.067 634.049 737.659 634.817 738.174 635.718C738.69 636.62 739.101 637.545 739.406 638.493C739.712 639.442 739.965 640.471 740.165 641.581C740.366 642.691 740.5 643.725 740.566 644.683C740.633 645.641 740.667 646.623 740.667 647.629ZM711.333 611.286C711.333 613.297 710.617 615.014 709.185 616.437C707.753 617.86 706.024 618.571 704 618.571C701.976 618.571 700.247 617.86 698.815 616.437C697.383 615.014 696.667 613.297 696.667 611.286C696.667 609.275 697.383 607.557 698.815 606.134C700.247 604.711 701.976 604 704 604C706.024 604 707.753 604.711 709.185 606.134C710.617 607.557 711.333 609.275 711.333 611.286ZM731.5 622.214C731.5 625.231 730.426 627.807 728.277 629.941C726.129 632.076 723.536 633.143 720.5 633.143C717.464 633.143 714.871 632.076 712.723 629.941C710.574 627.807 709.5 625.231 709.5 622.214C709.5 619.198 710.574 616.622 712.723 614.487C714.871 612.353 717.464 611.286 720.5 611.286C723.536 611.286 726.129 612.353 728.277 614.487C730.426 616.622 731.5 619.198 731.5 622.214ZM748 628.618C748 630.098 747.465 631.222 746.396 631.99C745.326 632.759 744.009 633.143 742.443 633.143H738.604C736.637 630.809 734.107 629.595 731.013 629.5C732.56 627.28 733.333 624.852 733.333 622.214C733.333 621.664 733.286 621.038 733.19 620.336C734.451 620.772 735.72 620.991 737 620.991C738.127 620.991 739.263 620.787 740.409 620.379C741.555 619.971 742.486 619.568 743.202 619.169C743.918 618.771 744.333 618.571 744.448 618.571C746.816 618.571 748 621.92 748 628.618ZM744.333 611.286C744.333 613.297 743.617 615.014 742.185 616.437C740.753 617.86 739.024 618.571 737 618.571C734.976 618.571 733.247 617.86 731.815 616.437C730.383 615.014 729.667 613.297 729.667 611.286C729.667 609.275 730.383 607.557 731.815 606.134C733.247 604.711 734.976 604 737 604C739.024 604 740.753 604.711 742.185 606.134C743.617 607.557 744.333 609.275 744.333 611.286Z"
                        fill="white"
                        animate={{
                            scale: [1, 1.05, 1]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5
                        }}
                    />
                </motion.g>

                {/* Gradients and filters */}
                <defs>
                    <filter id="filter0_d_1_2" x="650" y="563" width="141" height="141" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_2" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_2" result="shape" />
                    </filter>

                    <radialGradient id="paint0_radial_1_2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(725.5 639.5) rotate(92.6422) scale(457.5)">
                        <stop offset="0.576923" stopColor="#1A1A1A" />
                        <stop offset="1" stopColor="#3A3A3A" />
                    </radialGradient>

                    <radialGradient id="paint1_radial_1_2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(726 640) rotate(92.6422) scale(366)">
                        <stop offset="0.58" stopColor="#1A1A1A" />
                        <stop offset="1" stopColor="#3A3A3A" />
                    </radialGradient>

                    <radialGradient id="paint2_radial_1_2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(726 640) rotate(90) scale(280)">
                        <stop stopColor="#1A1A1A" />
                        <stop offset="1" stopColor="#3A3A3A" />
                    </radialGradient>

                    <linearGradient id="paint3_linear_1_2" x1="787" y1="569.074" x2="654" y2="689.926" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#242424" />
                        <stop offset="1" stopColor="#595959" />
                    </linearGradient>

                    <linearGradient id="paint3_linear_1_2_hover" x1="787" y1="569.074" x2="654" y2="689.926" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#3B82F6" />
                        <stop offset="1" stopColor="#1E40AF" />
                    </linearGradient>

                    <clipPath id="clip0_1_2">
                        <rect width="1452" height="733" fill="white" />
                    </clipPath>

                    <clipPath id="clip1_1_2">
                        <rect width="55" height="51" fill="white" transform="translate(693 604)" />
                    </clipPath>
                </defs>
            </svg>
        </div>
    );
}