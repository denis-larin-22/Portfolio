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
                    initial={{ opacity: 0, y: -50 }}
                    animate={isInViewForm && { opacity: 1, y: 0 }}
                    transition={{ duration: 1.5 }}
                    className="relative overflow-hidden w-full lg:w-1/2 mx-auto px-[2em] py-[1.6em] rounded-2xl bg-[#12121270] flex flex-col items-center gap-4 text-base md:text-xl text-m-green/60 font-semibold mb-10 hover:ring-1 hover:ring-m-green-light duration-700"
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