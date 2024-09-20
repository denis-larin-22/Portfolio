'use client'

import { useEffect, useState } from "react";
import { poppinsFont } from "../fonts";
import { WordAnimate } from "./ui/WordAnimate";
import { motion } from "framer-motion";
import TagWrap from "./ui/TagWrap";
import Links from "./ui/Links";
import { Rabbit } from "./ui/Rabbit";

function Main() {
    const keyWords = ['matrix', 'js', 'ts', 'react', "nextjs", 'web'];
    const greetings = ['Hi,', 'I`m Denis', 'web', 'developer'];
    //Framer animation
    const variants = {
        visible: { opacity: 1, transition: { delay: 2, duration: 0.7 } },
        hidden: { opacity: 0 },
    }
    //Words toggler
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentWord, setCurrentWord] = useState(keyWords[0]);

    useEffect(() => {
        const changeWord = () => {
            const nextIndex = currentWordIndex + 1;

            if (nextIndex < keyWords.length) {
                setCurrentWordIndex(nextIndex);
                setCurrentWord(keyWords[nextIndex]);
            } else {
                clearInterval(intervalId);
            }
        };
        const intervalId = setInterval(changeWord, 600);

        setTimeout(() => {
            clearInterval(intervalId);
        }, 4000);

        return () => {
            clearInterval(intervalId);
        };
    }, [currentWordIndex, keyWords]);

    return (
        <main className="container relative h-[90dvh] flex flex-col justify-center">
            <TagWrap appearanceDelay={2} tag="h1" className="mt-5">
                <div className={poppinsFont.className + " font-semibold"}>
                    {greetings.map((word, index) => {
                        if (word === 'web') {
                            return (
                                <p key={index} className="text-6xl md:text-8xl leading-[105%] text-m-green" >
                                    {currentWord}
                                </p>
                            )
                        }
                        return (
                            <motion.p
                                key={index}
                                initial="hidden"
                                animate="visible"
                                variants={variants}
                                transition={{ delay: 2, duration: 0.7 }}
                                className="text-6xl md:text-8xl leading-[105%]"
                            >
                                <WordAnimate word={word} delay={true} />
                            </motion.p>
                        )
                    })}
                </div>
            </TagWrap>
            <TagWrap tag="p" className="mt-7 flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-5 mb-10" appearanceDelay={2}>
                <p className="typewriter text-xl font-medium"><span className=" text-m-green">Front End</span> Developer /</p>
            </TagWrap>
            <Links delay={4} />

            <Rabbit className="absolute top-[10%] md:top-1/4 right-0" />
        </main>
    )
}

export default Main;