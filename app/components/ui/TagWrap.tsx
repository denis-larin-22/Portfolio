'use client'

import { auroreFont } from "@/app/fonts";
import { motion } from "framer-motion";

interface IProps {
    children: React.ReactNode,
    tag: string,
    className?: string,
    appearanceDelay?: number
}

function TagWrap({ children, tag, className = "", appearanceDelay = 0 }: IProps) {
    const tagStyles = `${auroreFont.className} text-signatures text-grey-sign`;

    return (
        <div className={className}>
            <motion.p
                className={tagStyles + " text-lg text-m-grey-tag leading-none"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: appearanceDelay }}
            >
                {`< ${tag} >`}
            </motion.p>
            {children}
            <motion.p
                className={tagStyles + " text-lg text-m-grey-tag leading-none mt-1 md:mt-2"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: appearanceDelay }}
            >
                {`</ ${tag} >`}
            </motion.p>
        </div>
    )
};

export default TagWrap;