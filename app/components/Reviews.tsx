"use client";

import { useRef } from "react";
import { greenGradientText, slateBgText } from "../lib/text-styles";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards ";
import TagWrap from "./ui/TagWrap";
import { motion, useInView } from "framer-motion";

export function Reviews() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref} id="reviews">
            <TagWrap tag="section" className="container mt-60" appearanceDelay={1.5}>
                <motion.p
                    initial={{ opacity: 0, y: 100, scale: 1.1 }}
                    animate={isInView && { opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1 }}
                    className={slateBgText + " text-[78px] font-bold"}
                >
                    <span className={greenGradientText}>R</span>ev<span className={greenGradientText}>i</span>ews
                </motion.p>
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={isInView && { opacity: 1 }}
                    transition={{ duration: 2, delay: 1 }}
                    className="mt-28 rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden"
                >
                    <InfiniteMovingCards
                        items={testimonials}
                        direction="right"
                        speed="slow"
                    />
                </motion.section>
            </TagWrap>
        </section>
    );
}

const testimonials = [
    {
        quote:
            "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
        name: "Charles Dickens",
        title: "A Tale of Two Cities",
    },
    {
        quote:
            "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
        name: "William Shakespeare",
        title: "Hamlet",
    },
    {
        quote: "All that we see or seem is but a dream within a dream.",
        name: "Edgar Allan Poe",
        title: "A Dream Within a Dream",
    },
    {
        quote:
            "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
        name: "Jane Austen",
        title: "Pride and Prejudice",
    },
    {
        quote:
            "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
        name: "Herman Melville",
        title: "Moby-Dick",
    },
];
