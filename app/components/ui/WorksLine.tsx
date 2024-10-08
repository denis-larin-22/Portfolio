"use client";

import {
    useScroll,
    useTransform,
    motion,
    useInView,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import TagWrap from "./TagWrap";
import { slateBgText } from "@/app/lib/text-styles";

interface TimelineEntry {
    titleImage: string;
    content: React.ReactNode;
}

export const WorksLine = ({ data }: { data: TimelineEntry[] }) => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div
            id="works"
            className="container"
            ref={containerRef}
        >
            <TagWrap tag="h4" appearanceDelay={1}>
                <motion.h4
                    initial={{ y: 50, opacity: 0, scale: 1.1 }}
                    animate={isInView && { y: 0, opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className={slateBgText + " text-5xl lg:text-[78px] font-bold pb-2"}
                >
                    Wo<span className="bg-gradient-to-br from-black to-m-green bg-clip-text tracking-tight text-transparent">r</span>ks
                </motion.h4>
            </TagWrap>

            <motion.div
                ref={ref}
                initial={{ opacity: 0 }}
                animate={isInView && { opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="relative max-w-7xl mx-auto pb-20"
            >
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="flex justify-start pt-10 md:pt-40 md:gap-10"
                    >
                        <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                            <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                            </div>
                            <img src={item.titleImage} alt="" className="max-h-20 translate-x-20 hidden lg:inline-block" />
                        </div>

                        <div className="relative pl-20 pr-4 md:pl-4 w-full">
                            {item.content}{" "}
                        </div>
                    </div>
                ))}
                <div
                    style={{
                        height: height + "px",
                    }}
                    className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-m-green via-green-500 to-transparent from-[0%] via-[10%] rounded-full"
                    />
                </div>
            </motion.div>
        </div >
    );
};
