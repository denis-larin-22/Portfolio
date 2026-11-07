"use client";

import { useRef } from "react";
import { greenGradientText, slateBgText } from "../lib/text-styles";
import TagWrap from "./ui/TagWrap";
import { motion, useInView } from "framer-motion";
import { HoverEffect } from "./ui/CardHoverEffect";
import { useLanguage } from "../lib/LanguageContext";

export function Reviews() {
    const { lang, t } = useLanguage();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref} id="reviews" className="container mt-10">
            <TagWrap tag="h5" appearanceDelay={1.5}>
                <motion.h5
                    initial={{ opacity: 0, y: 100, scale: 1.1 }}
                    animate={isInView && { opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1 }}
                    className={slateBgText + " text-5xl lg:text-[78px] font-bold pb-2"}
                >
                    {lang === 'en' ?
                        <><span className={greenGradientText}>R</span>ev<span className={greenGradientText}>i</span>ews</>
                        :
                        <><span className={greenGradientText}>В</span>ідг<span className={greenGradientText}>у</span>ки</>
                    }
                </motion.h5>
            </TagWrap>
            <motion.section
                initial={{ opacity: 0 }}
                animate={isInView && { opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden"
            >
                <HoverEffect items={t.reviews} />
            </motion.section>
        </section >
    );
}
