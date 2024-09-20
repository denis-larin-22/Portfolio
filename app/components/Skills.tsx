'use client'

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import TagWrap from "./ui/TagWrap";
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

    return (
        <section id="skills" ref={refSkills} className="min-h-screen mx-auto mt-9 md:mt-40 flex flex-col ">
            <TagWrap tag='h3' className="container flex flex-col gap-2" appearanceDelay={1}>
                <motion.h3
                    style={getInViewSkills(0.2)}
                    className={slateBgText + " text-5xl lg:text-[78px] font-bold"}
                >
                    <span className={greenGradientText}>M</span>y sk<span className={greenGradientText}>i</span>lls
                </motion.h3>
            </TagWrap>

            <HeroParallax products={products} />

            <TagWrap tag="section" className="my-10" appearanceDelay={1}>
                <div ref={refGroups} className="flex flex-col md:flex-row justify-around">
                    {skillsBySections.map((skill, index) => (
                        <motion.div
                            key={skill.title}
                            className="relative flex flex-col"
                            style={getInViewGroups(0.3 + (index / 10))}
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