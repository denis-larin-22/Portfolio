import { poppinsFont } from "../fonts";
import { links } from "../lib/data/links-list";

function Header() {
    return (
        <header className="container flex items-center justify-between py-5">
            <div className="flex items-center gap-4">
                <img
                    src="/images/avatar.webp"
                    alt="Avatar"
                    className="w-14 h-14 rounded-full"
                />
                <p className={`${poppinsFont.className} text-xl font-bold`}><span className="text-m-green text-glow-green">Denis</span> Larin</p>
            </div>

            <nav className="hidden md:flex justify-center gap-x-9 xsm:gap-x-20 font-bold">
                {links.map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        target={item.text === 'Blog' ? '_blank' : '_parent'}
                        // className='relative group hover:rounded-lg hover:text-black py-2 px-4 after:absolute after:h-0 after:hover:h-[200%] transition-all duration-500 hover:transition-all hover:duration-500 after:transition-all after:duration-300 after:hover:transition-all after:hover:duration-300 overflow-hidden z-20 after:z-[-20] after:bg-light-green after:rounded-t-full after:w-full after:bottom-0 after:left-0 text-gray-500'
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
        </header>
    )
};

export default Header;