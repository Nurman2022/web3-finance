"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React, { useRef, useState, useEffect } from "react";
import { CircleGradient } from "./circle-gradient";

export const BackgroundBeamsWithCollision = ({
    children,
    className
}) => {
    const containerRef = useRef(null);
    const parentRef = useRef(null);

    const beams = [
        {
            initialX: 100,
            translateX: 100,
            duration: 7,
            repeatDelay: 3,
            delay: 2,
            blinkSpeed: 1.5,
        },
        {
            initialX: 600,
            translateX: 600,
            duration: 3,
            repeatDelay: 3,
            delay: 4,
            blinkSpeed: 1,
        },
        {
            initialX: 200,
            translateX: 200,
            duration: 7,
            repeatDelay: 7,
            className: "h-6",
            blinkSpeed: 2,
        },
        {
            initialX: 400,
            translateX: 400,
            duration: 5,
            repeatDelay: 14,
            delay: 4,
            blinkSpeed: 1.2,
        },
        {
            initialX: 800,
            translateX: 800,
            duration: 11,
            repeatDelay: 2,
            className: "h-20",
            blinkSpeed: 1.8,
        },
        {
            initialX: 1000,
            translateX: 1000,
            duration: 4,
            repeatDelay: 2,
            className: "h-12",
            blinkSpeed: 0.8,
        },
        {
            initialX: 1200,
            translateX: 1200,
            duration: 6,
            repeatDelay: 4,
            delay: 2,
            className: "h-6",
            blinkSpeed: 1.6,
        },
    ];

    return (

        <div
            ref={parentRef}
            className={cn(
                "h-[100vh] bg-gradient-to-b from-neutral-950 to-neutral-800  relative flex items-center w-full justify-center overflow-hidden",
                className
            )}>

            <div
                className={cn(
                    "absolute inset-0",
                    "[background-size:150px_150px]",
                    "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                    "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
                )} />

            {
                beams.map((beam) => (
                    <CollisionMechanism
                        key={beam.initialX + "beam-idx"}
                        beamOptions={beam}
                        containerRef={containerRef}
                        parentRef={parentRef} />
                ))
            }
            {/* <CircleGradient /> */}

            {children}

        </div>
    );
};

const CollisionMechanism = React.forwardRef(({ parentRef, containerRef, beamOptions = {} }, ref) => {
    const beamRef = useRef(null);
    const [collision, setCollision] = useState({
        detected: false,
        coordinates: null,
    });
    const [beamKey, setBeamKey] = useState(0);
    const [cycleCollisionDetected, setCycleCollisionDetected] = useState(false);
    const [lastExplosionY, setLastExplosionY] = useState(0);

    useEffect(() => {
        const checkCollision = () => {
            if (
                beamRef.current &&
                containerRef.current &&
                parentRef.current &&
                !cycleCollisionDetected
            ) {
                const beamRect = beamRef.current.getBoundingClientRect();
                const parentRect = parentRef.current.getBoundingClientRect();

                const relativeY = beamRect.top - parentRect.top;

                if (relativeY > lastExplosionY + 100) {
                    const relativeX =
                        beamRect.left - parentRect.left + beamRect.width / 2;

                    setCollision({
                        detected: true,
                        coordinates: {
                            x: relativeX,
                            y: relativeY,
                        },
                    });
                    setLastExplosionY(relativeY);
                    setCycleCollisionDetected(true);
                }
            }
        };

        const animationInterval = setInterval(checkCollision, 50);

        return () => clearInterval(animationInterval);
    }, [cycleCollisionDetected, containerRef, lastExplosionY]);

    useEffect(() => {
        if (collision.detected && collision.coordinates) {
            setTimeout(() => {
                setCollision({ detected: false, coordinates: null });
                setCycleCollisionDetected(false);
            }, 500);

            setTimeout(() => {
                setBeamKey((prevKey) => prevKey + 1);
            }, 500);
        }
    }, [collision]);

    useEffect(() => {
        setLastExplosionY(0);
    }, [beamKey]);

    return (
        <>
            <motion.div
                key={beamKey}
                ref={beamRef}
                animate="animate"
                initial={{
                    translateY: beamOptions.initialY || "-200px",
                    translateX: beamOptions.initialX || "0px",
                    rotate: beamOptions.rotate || 0,
                }}
                variants={{
                    animate: {
                        translateY: beamOptions.translateY || "1800px",
                        translateX: beamOptions.translateX || "0px",
                        rotate: beamOptions.rotate || 0,
                    },
                }}
                transition={{
                    duration: beamOptions.duration || 8,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear",
                    delay: beamOptions.delay || 0,
                    repeatDelay: beamOptions.repeatDelay || 0,
                }}
                className={cn(
                    "absolute left-0 top-20 m-auto h-14 w-px rounded-full bg-gradient-to-t from-neutral-100 via-neutral-500 to-transparent",
                    beamOptions.className
                )}>

                <BlinkingStar blinkSpeed={beamOptions.blinkSpeed || 1.5} />
            </motion.div>
        </>
    );
});

CollisionMechanism.displayName = "CollisionMechanism";

const BlinkingStar = ({
    blinkSpeed = 0.5
}) => {
    return (
        <motion.div
            className="absolute left-1/2 -translate-x-1/2 rounded-full -bottom-1 h-2 w-2 bg-white"
            animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.2, 0.8],
            }}
            transition={{
                duration: blinkSpeed,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
            }}
        />
    );
};

