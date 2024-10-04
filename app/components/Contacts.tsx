'use client'

import { useRef } from "react";
import { poppinsFont } from "../fonts";
import Form from "./ui/Form";
import Links from "./ui/Links";
import { motion, useInView } from "framer-motion";
import { ShineSparkles } from "./ui/ShineSparkles";

function Contacts() {
    const refForm = useRef(null);
    const isInViewForm = useInView(refForm, { once: true });

    return (
        <section className={poppinsFont.className + " container mt-20 mb-10"}>

            <div id="contacts" ref={refForm} className="h-dvh flex flex-col items-center justify-center">
                <ShineSparkles className="rotate-180" />

                <motion.div
                    className="flex flex-col-reverse md:flex-row items-center w-full bg-m-grey-bg rounded-sm md:rounded-lg border-2 border-m-green/20"
                >
                    <div className="relative overflow-hidden py-7 w-full md:w-1/2 flex flex-col items-center gap-2 lg:gap-4 text-sm lg:text-xl text-m-green/60 font-semibold">
                        <Links />
                        <a href="mailto:denislarin2017@gmail.com" className={"flex items-center gap-x-2 text-slate-300 opacity-60 hover:opacity-100 duration-150 mt-5 mb-2"}>
                            <img src="/icons/mail.svg" alt="Mail icon" className="w-4 md:w-7 h-4 md:h-7 opacity-65" />
                            denislarin2017@gmail.com
                        </a>
                        <a href="tel:380981268508" className={"flex items-center gap-x-2 text-slate-300 opacity-60 hover:opacity-100 duration-150 mb-5"}>
                            <img src="/icons/call.svg" alt="Call icon" className="w-4 md:w-7 h-4 md:h-7 opacity-65" />
                            380 98 126 85 08
                        </a>
                    </div>
                    <Form />
                </motion.div>
                <ShineSparkles />
            </div>
        </section>
    )
}

export default Contacts;