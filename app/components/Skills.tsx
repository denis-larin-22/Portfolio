'use client'

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import TagWrap from "./ui/TagWrap";
import { ISkillIcon, skillsIcons } from "../lib/data/skills-icons";
import { greenGradientText, slateBgText } from "../lib/text-styles";
import { HeroParallax } from "./ui/SkillsParallax";

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

    const [activeSkill, setActiveSkill] = useState<null | ISkillIcon>(null);
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
    const getInViewGroups = (delay: number) => ({
        opacity: isInViewGroups ? 1 : 0,
        transition: `all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}s`,
    });

    return (
        <section id="skills" ref={refSkills} className="min-h-screen mx-auto mt-9 md:mt-40 flex flex-col ">
            <TagWrap tag='h3' className="mt-4 container" appearanceDelay={1}>
                <motion.h3
                    style={getInViewSkills(0.5)}
                    className={slateBgText + " text-[78px] font-bold pb-4"}
                >
                    <span className={greenGradientText}>M</span>y sk<span className={greenGradientText}>i</span>lls
                </motion.h3>
            </TagWrap>

            <HeroParallax products={products} />;

            {/* <div className="container mx-auto w-full flex items-center justify-between">
                <TagWrap tag='ul' className="flex flex-col gap-5 mt-5" appearanceDelay={1}>
                    <div className="grid grid-cols-4 gap-7">
                        {skillsIcons.map((item, index) => (
                            <motion.a
                                key={index}
                                href={item.link}
                                target="_blank"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInViewSkills && { opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 + (index / 10) }}
                                className={`inline-block w-20 h-w-20 overflow-hidden brightness-75 hover:brightness-100 duration-150 ${item.bg ? "bg-white rounded-full" : ""}`}
                                onMouseEnter={() => {
                                    setActiveSkill(item);
                                }}
                            >
                                <img src={item.icon} alt="Logo icon" className="w-full h-full object-cover m-auto" />
                            </motion.a>
                        ))}
                    </div>
                </TagWrap>
                {activeSkill === null ?
                    null
                    :
                    <motion.div
                        key={activeSkill.name}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.5 }}
                        className="flex flex-col items-center"
                    >
                        <img src={activeSkill.icon} alt="" className={`w-64 h-64 brightness-75 ${activeSkill.bg ? "bg-white rounded-full" : ""}`} />
                        <h2 className={slateBgText + " mt-8 py-4 text-center text-4xl font-medium uppercase"}>
                            {activeSkill.name}
                        </h2>
                    </motion.div>
                }
            </div> */}
            <TagWrap tag="section" className="my-10" appearanceDelay={1}>
                <div ref={refGroups} className="flex flex-col md:flex-row justify-around">
                    {skillsBySections.map((skill, index) => (
                        <motion.div
                            key={skill.title}
                            className="relative flex flex-col"
                            style={getInViewGroups(0.5 + (index / 10))}
                        >
                            <p className={greenGradientText + " relative z-10 text-4xl font-bold my-10"}>{skill.title}</p>
                            <img src={skill.icon} alt="Icon" className="absolute top-0 left-3/4 w-24 h-2w-24 z-0 brightness-[5%]" />
                            <ul className="relative z-10 text-xl font-semibold text-slate-400 flex flex-col gap-1">
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

export const products = [
    {
        title: "Figma",
        link: "https://www.figma.com/",
        thumbnail:
            "/icons/figma.svg",
    },

    {
        title: "Firebase",
        link: "https://firebase.google.com/",
        thumbnail:
            "/icons/firebase.svg",
    },
    {
        title: "React JS",
        link: "https://ru.legacy.reactjs.org/",
        thumbnail:
            "/icons/react.svg",
    },

    {
        title: "Next JS",
        link: "https://nextjs.org/",
        thumbnail:
            "/icons/nextjs.svg",
    },
    {
        title: "Redux",
        link: "https://redux.js.org/",
        thumbnail:
            "/icons/redux.svg",
    },
    {
        title: "Tailwind CSS",
        link: "https://tailwindcss.com/",
        thumbnail:
            "/icons/tailwindcss.svg",
    },

    {
        title: "Framer Motion",
        link: "https://www.framer.com/motion/",
        thumbnail:
            "/icons/framer.svg",
    },
    {
        title: "JavaScript",
        link: "https://ru.wikipedia.org/wiki/JavaScript",
        thumbnail:
            "/icons/javascript.svg",
    },
    {
        title: "TypeScript",
        link: "https://www.typescriptlang.org/",
        thumbnail:
            "/icons/typescript.svg",
    },

    {
        title: "Next UI",
        link: "https://nextui.org/",
        thumbnail:
            "/icons/nextui.svg",
    },
    {
        title: "Bootstrap",
        link: "https://getbootstrap.com/",
        thumbnail:
            "/icons/bootstrap.svg",
    },

    {
        title: "Sass/Scss",
        link: "https://sass-lang.com/",
        thumbnail:
            "/icons/sass.svg",
    },
    {
        title: "GitHub",
        link: "https://github.com/",
        thumbnail:
            "/icons/github.svg",
    },
    {
        title: "Contentful",
        link: "https://www.contentful.com/",
        thumbnail:
            "/icons/contentful.svg",
    },
    {
        title: "npm",
        link: "https://www.npmjs.com/",
        thumbnail:
            "/icons/npm.svg",
    },
];