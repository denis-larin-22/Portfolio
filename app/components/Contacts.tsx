'use client'

import { useRef } from "react";
import { poppinsFont } from "../fonts";
import Form from "./ui/Form";
import Links from "./ui/Links";
import { motion, useInView } from "framer-motion";
import { GetInTouch } from "./ui/GetInTouch";

function Contacts() {
    const refForm = useRef(null);
    const isInViewForm = useInView(refForm, { once: true });

    return (
        <section className={poppinsFont.className + " container mt-20 mb-10"}>
            <GetInTouch />

            <div id="contacts" ref={refForm} className="h-screen flex flex-col justify-center">
                {/* Contacts */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInViewForm && { opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="relative overflow-hidden w-full lg:w-1/2 mx-auto px-[2em] py-[1.6em] rounded-t-2xl bg-m-grey-bg flex flex-col items-center gap-4 text-base md:text-xl text-m-green/60 font-semibold"
                >
                    <Links />
                    <a href="mailto:denislarin2017@gmail.com" className={"flex items-center gap-x-2 text-slate-300 opacity-60 hover:opacity-100 duration-150 mt-5 mb-2"}>
                        <img src="/icons/mail.svg" alt="Mail icon" className="w-4 md:w-7 h-4 md:h-7 opacity-65" />
                        denislarin2017@gmail.com
                    </a>
                    <a href="tel:380981268508" className={"flex items-center gap-x-2 text-slate-300 opacity-60 hover:opacity-100 duration-150 mb-5"}>
                        <img src="/icons/call.svg" alt="Call icon" className="w-4 md:w-7 h-4 md:h-7 opacity-65" />
                        380 98 126 85 08
                    </a>
                </motion.div>
                {/* Form */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInViewForm && { opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <Form />
                </motion.div>

            </div>
        </section>
    )
}

export default Contacts;