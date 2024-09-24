"use client";

import { cn } from "@/app/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}: {
    items: {
        quote: string;
        name: string;
        title: string;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);
    const [start, setStart] = useState(false);

    useEffect(() => {
        addAnimation();
    }, []);

    const addAnimation = () => {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    };

    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards"
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse"
                );
            }
        }
    };

    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    };

    // Логика для свайпа
    let startX: number = 0;
    let scrollLeft: number = 0;

    const handleTouchStart = (e: React.TouchEvent) => {
        if (containerRef.current) {
            startX = e.touches[0].pageX - containerRef.current.offsetLeft;
            scrollLeft = containerRef.current.scrollLeft;
        }
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (containerRef.current) {
            const x = e.touches[0].pageX - containerRef.current.offsetLeft;
            const walk = (x - startX) * 1.5; // Увеличиваем чувствительность свайпа
            containerRef.current.scrollLeft = scrollLeft - walk;
        }
    };

    return (
        <div
            ref={containerRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            className={cn(
                "scroller relative z-20 max-w-7xl overflow-x-scroll [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] hide-scrollbar",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
                    start && "animate-scroll ",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {items.map((item) => (
                    <li
                        className="w-[320px] max-w-full h-full relative rounded-2xl flex-shrink-0 flex flex-col justify-between px-4 md:px-8 py-6 md:w-[450px] bg-m-green/10"
                        key={item.name}
                    >
                        <blockquote>
                            <div
                                aria-hidden="true"
                                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                            ></div>
                            <span className=" relative z-20 text-sm md:text-base leading-[1.6] text-slate-300 font-normal">
                                {item.quote}
                            </span>
                            <div className="relative z-20 mt-6 flex flex-col gap-5">
                                <span className="inline-flex gap-0.5">
                                    {[1, 2, 3, 4, 5].map((item) => (
                                        <img src="/icons/star.svg" alt="Star icon" className="w-4 h-4" />
                                    ))}
                                </span>
                                <span className="flex flex-col gap-1">
                                    <span className=" text-xs md:text-sm leading-[1.6] text-slate-300 font-normal">
                                        {item.name}
                                    </span>
                                    <span className=" text-xs md:text-sm leading-[1.6] text-slate-300 font-normal">
                                        {item.title}
                                    </span>
                                </span>
                            </div>
                        </blockquote>
                    </li>
                ))}
            </ul>
        </div>
    );
};
