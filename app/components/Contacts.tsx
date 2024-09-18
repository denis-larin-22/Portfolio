'use client'

import { useRef } from "react";
import { poppinsFont } from "../fonts";
import Form from "./ui/Form";
import Links from "./ui/Links";
import { SparklesCore } from "./ui/Sparkles";
import { motion, useInView } from "framer-motion";

function Contacts() {
    // Sparkles wrap
    const refSparkles = useRef(null);
    const isInViewSparkles = useInView(refSparkles, { once: true });
    // Form wrap
    const refForm = useRef(null);
    const isInViewForm = useInView(refForm, { once: true });

    return (
        <section className={poppinsFont.className + " container my-40"}>
            <div ref={refSparkles} className="h-[30rem] w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
                <motion.h5
                    initial={{ opacity: 0, y: -50, scale: 0.9 }}
                    animate={isInViewSparkles && { opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="mb-5 text-5xl text-center uppercase bg-gradient-to-br from-slate-300 to-slate-900 bg-clip-text tracking-tight text-transparent"
                >
                    let&apos;s get in touch
                </motion.h5>
                <div className="w-[40rem] h-40 relative">
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

                </div>
            </div>

            <div ref={refForm} className="h-screen flex flex-col justify-center">
                {/* Contacts */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={isInViewForm && { opacity: 1, y: 0 }}
                    transition={{ duration: 1.5 }}
                    className="relative overflow-hidden w-1/2 mx-auto px-[2em] py-[1.6em] rounded-2xl bg-[#12121270] flex flex-col items-center gap-4 text-xl text-m-green/60 font-semibold mb-10 hover:ring-1 hover:ring-m-green-light duration-700"
                >
                    <Links />
                    <a href="mailto:denislarin2017@gmail.com" className="hover:text-m-green duration-150">denislarin2017@gmail.com</a>
                    <a href="tel:380981268508" className="hover:text-m-green duration-150">+380 98 126 85 08</a>
                </motion.div>
                {/* Form */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={isInViewForm && { opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                >
                    <Form />
                </motion.div>
            </div>
        </section>
    )
}

export default Contacts;