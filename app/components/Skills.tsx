'use client'

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import TagWrap from "./ui/TagWrap";
import { greenGradientText, slateBgText } from "../lib/text-styles";
import Image from "next/image";
import { skillsIcons } from "../lib/data/skills-icons";
import { poppinsFont } from "../fonts";

function Skills() {
    const skillsBySections = [
        {
            title: "Layout",
            icon: "/icons/layout.svg",
            list: ["Html", "Css", "Scss", "Tailwind CSS"]
        },
        {
            title: "Languages",
            icon: "/icons/languages.svg",
            list: ["JavaScript", "Es5/Es6", "TypeScript"]
        },
        {
            title: "Development",
            icon: "/icons/developing.svg",
            list: ["ReactJS", "NextJS", "Redux", "npm"]
        },
        {
            title: "Tools",
            icon: "/icons/tools.svg",
            list: ["Redux", "Next UI", "Material UI", "Bootstrap", "Git", "Framer Motion", "Contentful", "Firebase", "Figma"]
        }
    ]

    // Skills
    const refSkills = useRef(null);
    const isInViewSkills = useInView(refSkills, { once: true });
    const getInViewSkills = (delay: number) => ({
        transform: isInViewSkills ? "translateY(0) scale(1)" : "translateY(50px) scale(1.1)",
        opacity: isInViewSkills ? 1 : 0,
        transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`,
    });

    // Groups
    const refGroups = useRef(null);
    const isInViewGroups = useInView(refGroups, { once: true });
    const getInViewGroups = (delay = 0) => ({
        opacity: isInViewGroups ? 1 : 0,
        transition: `all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`,
    });


    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };


    return (
        <section id="skills" ref={refSkills} className="container relative min-h-screen mx-auto mt-9 md:mt-40 flex flex-col ">
            <TagWrap tag='h3' className=" flex flex-col gap-2" appearanceDelay={1}>
                <motion.h3
                    style={getInViewSkills(0.2)}
                    className={slateBgText + " text-5xl lg:text-[78px] font-bold pb-2"}
                >
                    <span className={greenGradientText}>M</span>y sk<span className={greenGradientText}>i</span>lls
                </motion.h3>
            </TagWrap>

            <motion.div
                variants={container}
                initial="hidden"
                animate={isInViewSkills && "visible"}
                className="flex flex-wrap justify-center gap-4 mt-5"
            >
                {skillsIcons.map((skill, index) => (
                    <motion.a
                        key={index}
                        href={skill.link}
                        className="inline-flex gap-2 w-fit px-3 h-12 py-2 rounded-md bg-m-grey-bg items-center border-2 border-m-grey-bg hover:bg-m-green/40 hover:border-m-green duration-300"
                        variants={item}
                    >
                        <Image
                            alt="Skill icon"
                            src={skill.thumbnail}
                            width={30}
                            height={30}
                        />
                        <p className="">{skill.title}</p>
                    </motion.a>
                ))}
            </motion.div>

            <TagWrap tag="section" className=" my-10" appearanceDelay={1}>
                <div ref={refGroups} className="flex flex-wrap gap-4 justify-between mb-5">
                    {skillsBySections.map((skill, index) => (
                        <motion.div
                            key={skill.title}
                            className="relative flex flex-col"
                            style={getInViewGroups(0.3 + (index / 10))}
                        >
                            <p className={greenGradientText + " relative z-10 text-2xl lg:text-4xl font-bold my-5 lg:my-7"}>{skill.title}</p>
                            <img src={skill.icon} alt="Icon" className="hidden lg:inline-block absolute top-0 right-0 lg:left-3/4 w-12 lg:w-24 h-12 lg:h-24 z-0 brightness-[5%]" />
                            <ul className={poppinsFont.className + " relative z-10 text-md lg:text-lg font-light text-slate-400 flex flex-col items-start gap-1 cursor-default"}>
                                {skill.list.map((item, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={isInViewGroups && { opacity: 1, x: 0 }}
                                        transition={{ delay: 0.5 + (index / 10) }}
                                    >
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </TagWrap>
        </section >
    )
};

export default Skills;