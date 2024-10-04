import { cn } from "@/app/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({
    items,
    className,
}: {
    items: {
        title: string,
        subtitle?: {
            text: string,
            link: string
        },
        text: string,
    }[];
    className?: string;
}) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className={cn(
                "columns-1 lg:columns-2 py-2",
                className
            )}
        >
            {items.map((item, idx) => (
                <div
                    key={idx}
                    className="relative group  block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-m-green/30 block  rounded-3xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <Card>
                        <div className="flex justify-between">
                            <p className=" text-xs md:text-base leading-[1.6] text-slate-300 font-normal">
                                {item.title}
                            </p>
                            {item.subtitle && <a href={item.subtitle.link} target="_blank" className="opacity-35 hover:opacity-100 duration-150 text-sm">
                                {item.subtitle.text}
                            </a>}
                        </div>
                        <p className="italic text-[10px] md:text-sm leading-[1.6] text-slate-300 font-normal">
                            {item.text}
                        </p>
                        <span className="inline-flex gap-0.5">
                            {[1, 2, 3, 4, 5].map((item) => (
                                <img key={item} src="/icons/star.svg" alt="Star icon" className="w-4 h-4" />
                            ))}
                        </span>
                    </Card>
                </div>
            ))}
        </div>
    );
}

export const Card = ({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "rounded-2xl h-full w-full p-1 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
                className
            )}
        >
            <div className="relative z-50">
                <div className="p-4 flex flex-col justify-between gap-4">{children}</div>
            </div>
        </div>
    );
};