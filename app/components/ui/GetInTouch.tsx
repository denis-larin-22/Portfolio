'use client'

import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import { SparklesCore } from "./Sparkles";

export function GetInTouch() {
    const refSparkles = useRef(null);
    const isInViewSparkles = useInView(refSparkles, { once: true });

    return (
        <div ref={refSparkles} className="h-[15rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
            <motion.h5
                initial={{ opacity: 0 }}
                animate={isInViewSparkles && { opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="mb-5 text-3xl md:text-5xl text-center uppercase bg-gradient-to-br from-slate-300 to-slate-900 bg-clip-text tracking-tight text-transparent"
            >
                let&apos;s get in touch
            </motion.h5>
            <motion.div
                initial={{ opacity: 0 }}
                animate={isInViewSparkles && { opacity: 1 }}
                transition={{ duration: 2 }}
                className="w-[40rem] h-40 relative"
            >
                {/* Gradients */}
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-m-green to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-m-green to-transparent h-px w-3/4" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-green-700 to-transparent h-[5px] w-1/4 blur-sm" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-green-700 to-transparent h-px w-1/4" />

                {/* Core component */}
                <SparklesCore
                    background="transparent"
                    minSize={0.4}
                    maxSize={1}
                    particleDensity={1200}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />

                {/* Radial Gradient to prevent sharp edges */}
                <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </motion.div>
        </div>
    )
}