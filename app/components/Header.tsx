'use client'

import { poppinsFont } from "../fonts";
import { links } from "../lib/data/links-list";
import { motion } from "framer-motion";

function Header() {
    return (
        <motion.header
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="container flex items-center justify-between py-5"
        >
            <div className="flex items-center gap-4">
                <img
                    src="/images/avatar.webp"
                    alt="Avatar"
                    className="w-10 md:w-14 h-10 md:h-14 rounded-full"
                />
                <p className={`${poppinsFont.className} text-lg md:text-xl font-bold`}><span className="text-m-green text-glow-green">Denis</span> Larin</p>
            </div>

            {/* Desktop */}
            <nav className="hidden lg:flex justify-center gap-x-9 xsm:gap-x-20 font-bold">
                {links.map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        target={item.text === 'Blog' ? '_blank' : '_parent'}
                        className="hover:text-glow-green hover:text-m-green duration-500"
                    >
                        <span className='text-m-green-light group-hover:text-black'>{item.text[0]}</span>
                        {item.text.slice(1)}
                    </a>
                ))}
                <button className="ml-10 w-7 h-7 text-sm flex items-center gap-0.5 group hover:text-m-green duration-150">
                    EN
                    <img src="/images/language-icon.svg" alt="Laguage button" className="fill-m-green" />
                </button>
            </nav>

            <button className="ml-10 w-7 h-7 text-sm flex lg:hidden items-center gap-0.5 group hover:text-m-green duration-150">
                EN
                <img src="/images/language-icon.svg" alt="Laguage button" className="fill-m-green" />
            </button>
        </motion.header>
    )
};

export default Header;