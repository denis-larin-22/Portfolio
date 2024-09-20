'use client'

import { useRef } from "react";
import TagWrap from "./ui/TagWrap";
import { motion, useInView } from "framer-motion";
import { greenGradientText, slateBgText } from "../lib/text-styles";

function AboutMe() {
    // About me wrap
    const refAboutMe = useRef(null);
    const isInViewAboutMe = useInView(refAboutMe, { once: true });
    const getInView = (delay = 0) => ({
        transform: isInViewAboutMe ? "translateY(0) scale(1)" : "translateY(150px) scale(1.1)",
        opacity: isInViewAboutMe ? 1 : 0,
        transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`,
    });

    return (
        <section>
            <article
                id="about"
                className="container mb-5 min-h-[70dvh] flex flex-col gap-7 justify-center"
            >
                <motion.div
                    ref={refAboutMe}
                    style={getInView()}
                >
                    <TagWrap tag="h2" className="flex flex-col gap-2">
                        <h2 className={slateBgText + " text-5xl lg:text-[78px] font-bold"}><span className={greenGradientText}>A</span>bout <span className={greenGradientText}>m</span>e</h2>
                    </TagWrap>
                </motion.div>

                <motion.div style={getInView(0.2)} className="text-md lg:text-lg max-w-[900px] text-slate-300">
                    <TagWrap
                        className="flex flex-col text-m-md gap-2"
                        tag="p"
                    >
                        <motion.p style={getInView(0.4)}>
                            I’m a <span className="font-bold">Front-End Developer</span> located in Ukraine. I have
                            a serious passion for UI effects, animations and
                            creating intuitive, dynamic user experiences.
                        </motion.p>
                        <motion.p
                            style={getInView(0.6)}
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