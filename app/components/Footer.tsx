import { poppinsFont } from "../fonts";
import { links } from "../lib/data/links-list";
import GradientLine from "./ui/GradientLine";
import Links from "./ui/Links";
import TagWrap from "./ui/TagWrap";

export const Footer = () => {
    const itemStyles = "flex items-center gap-x-2 text-slate-300 opacity-60 hover:opacity-100 duration-150";

    return (
        <footer className="mt-10 text-grey">
            <GradientLine />

            <div className="container flex justify-between items-center">
                <div className={poppinsFont.className + " flex flex-col my-5"}>
                    <p className="bg-gradient-to-br from-slate-300 to-slate-900 bg-clip-text text-2xl font-semibold tracking-tight text-transparent"><span className="text-light-green">C</span>ontacts</p>

                    <a href="mailto:denislarin2017@gmail.com" className={itemStyles + " mt-5 mb-2"}>
                        <img src="/icons/mail.svg" alt="Mail icon" className="w-7 h-7 opacity-65" />
                        denislarin2017@gmail.com
                    </a>
                    <a href="tel:380981268508" className={itemStyles + " mb-5"}>
                        <img src="/icons/call.svg" alt="Call icon" className="w-7 h-7 opacity-65" />
                        380 98 126 85 08
                    </a>

                    <Links />
                </div>

                <TagWrap tag="nav" className="my-3">
                    <nav className="flex flex-col gap-3 my-3">
                        {links.map((item, index) => (
                            <a
                                key={index}
                                href={item.link}
                                className="text-lg font-semibold opacity-70 hover:opacity-100 duration-150"
                            >
                                <span className="text-m-green">{item.text[0]}</span>{item.text.slice(1)}
                            </a>
                        ))}
                    </nav>
                </TagWrap>
            </div>
        </footer>
    )
}