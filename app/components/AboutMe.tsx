'use client'

import { useRef } from "react";
import { LampContainer } from "./ui/Lamp";
import TagWrap from "./ui/TagWrap";
import { motion, useInView } from "framer-motion";
import { greenGradientText, slateBgText } from "../lib/text-styles";

function AboutMe() {
    // Lamp wrap
    const refLamp = useRef(null);
    const isInViewLamp = useInView(refLamp, { once: true });

    // About me wrap
    const refAboutMe = useRef(null);
    const isInViewAboutMe = useInView(refAboutMe, { once: true });
    const getInView = (delay: number) => ({
        transform: isInViewAboutMe ? "translateY(0) scale(1)" : "translateY(150px) scale(1.1)",
        opacity: isInViewAboutMe ? 1 : 0,
        transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`,
    });

    return (
        <section>
            {/* <LampContainer className="h-[50dvh]">
                <div ref={refLamp}>
                    <motion.h2
                        initial={{ opacity: 0, y: 100, scale: 1.1 }}
                        animate={isInViewLamp && { opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className={slateBgText + " mt-10 py-4 text-center text-5xl font-medium uppercase"}
                    >
                        dive into the world of the web with me
                    </motion.h2>
                </div>
            </LampContainer> */}

            <article
                id="about"
                className="container mb-5 h-screen flex flex-col gap-7 justify-center"
            >
                <motion.div
                    ref={refAboutMe}
                    style={getInView(0.5)}
                >
                    <TagWrap tag="h2">
                        <h2 className={slateBgText + " text-[78px] font-bold"}><span className={greenGradientText}>A</span>bout <span className={greenGradientText}>m</span>e</h2>
                    </TagWrap>
                </motion.div>

                <motion.div style={getInView(0.7)} className="text-lg max-w-[900px] text-slate-300">
                    <TagWrap
                        className="flex flex-col text-m-md gap-2"
                        tag="p"
                    >
                        <motion.p style={getInView(0.9)}>
                            I’m a <span className="font-bold">Front-End Developer</span> located in Ukraine. I have
                            a serious passion for UI effects, animations and
                            creating intuitive, dynamic user experiences.
                        </motion.p>
                        <motion.p
                            style={getInView(1.1)}
                            className="py-3"
                        >
                            Well-organised person, problem solver, independent
                            employee with high attention to detail.
                        </motion.p>
                        <motion.p style={getInView(1.2)}>
                            Interested in the entire frontend spectrum and
                            working on ambitious projects with positive people.
                        </motion.p>
                    </TagWrap>
                </motion.div>
            </article>
        </section>
    )
};

export default AboutMe;