import Image from "next/image";

export const worksList = [
    {
        titleImage: "/works/hlegal/hlegal.svg",
        content: (
            <div>
                <img src="/works/hlegal/hlegal.svg" alt="" className="inline lg:hidden w-12 h-12 mb-5" />
                <p className="hidden lg:inline uppercase text-2xl bg-gradient-to-br from-slate-300 to-slate-900 bg-clip-text font-bold tracking-tight text-transparent">hlegal</p>
                <div className="grid grid-cols-2 gap-4">
                    <Image
                        src="/works/hlegal/hlegal2.webp"
                        alt="Website screenshot"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full brightness-75 hover:brightness-100 duration-150"
                    />
                    <Image
                        src="/works/hlegal/hlegal1.webp"
                        alt="Website screenshot"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full brightness-75 hover:brightness-100 duration-150"
                    />
                </div>
                <p className="text-xs md:text-base font-normal my-2 md:my-7">
                    Hlegal - a multi-page website project on pure HTML and CSS using SCSS preprocessor and Bootstrap 5.
                </p>
                <ul className="my-4 md:my-7 flex items-center gap-4">
                    <li>
                        <img src="/icons/html.svg" alt="HTML" className="w-6 md:w-10 h-6 md:h-10" />
                    </li>
                    <li>
                        <img src="/icons/css.svg" alt="CSS" className="w-6 md:w-10 h-6 md:h-10" />
                    </li>
                    <li>
                        <img src="/icons/sass.svg" alt="Sass" className="w-6 md:w-10 h-6 md:h-10" />
                    </li>
                    <li>
                        <img src="/icons/bootstrap-purple.svg" alt="Bootstrap" className="w-6 md:w-10 h-6 md:h-10" />
                    </li>
                </ul>
                <div className="flex items-center gap-2 text-xs md:text-base">
                    <a href="https://github.com/denis-larin-22/hlegal_final_hillel_project" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-5 w-fit md:w-40 h-7 md:h-10 whitespace-nowrap rounded-md border-2 border-slate-100">Open repository</a>
                    <a href="https://denis-larin-22.github.io/hlegal_final_hillel_project/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-5 w-fit md:w-40 h-7 md:h-10 rounded-md bg-slate-100 text-black">Visit</a>
                </div>
            </div>
        ),
    },
    {
        titleImage: "/works/jmb/julia-beauty.svg",
        content: (
            <div>
                <img src="/works/jmb/julia-beauty.svg" alt="" className="inline lg:hidden w-12 h-12 mb-5" />
                <p className="hidden lg:inline uppercase text-2xl bg-gradient-to-br from-slate-300 to-slate-900 bg-clip-text font-bold tracking-tight text-transparent">Julia Magic Beauty</p>
                <div className="grid grid-cols-2 gap-4">
                    <Image
                        src="/works/jmb/jmb1.webp"
                        alt="Website screenshot"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full brightness-75 hover:brightness-100 duration-150"
                    />
                    <Image
                        src="/works/jmb/jmb2.webp"
                        alt="Website screenshot"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full brightness-75 hover:brightness-100 duration-150"
                    />
                </div>
                <p className="text-xs md:text-base font-normal my-2 md:my-7">
                    Julia Magic Beauty - hair stylist portfolio website with examples of work, list of services, price list and contacts.
                </p>
                <ul className="my-4 md:my-7 flex items-center gap-4">
                    <li>
                        <img src="/icons/nextjs.svg" alt="Next.js" className="w-6 md:w-10 h-6 md:h-10" />
                    </li>
                    <li>
                        <img src="/icons/typescript.svg" alt="TypeScript" className="w-6 md:w-10 h-6 md:h-10" />
                    </li>
                    <li>
                        <img src="/icons/tailwindcss.svg" alt="Tailwind CSS" className="w-6 md:w-10 h-6 md:h-10" />
                    </li>
                    <li>
                        <img src="/icons/firebase.svg" alt="Firebase" className="w-6 md:w-10 h-6 md:h-10" />
                    </li>
                </ul>
                <div className="flex items-center gap-2 text-xs md:text-base">
                    <a href="https://github.com/denis-larin-22/julia-beauty" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-5 w-fit md:w-40 h-7 md:h-10 whitespace-nowrap rounded-md border-2 border-slate-100">Open repository</a>
                    <a href="https://julia-beauty.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-5 w-fit md:w-40 h-7 md:h-10 rounded-md bg-slate-100 text-black">Visit</a>
                </div>
            </div>

        ),
    },
    {
        titleImage: "/works/odins/odins.svg",
        content: (
            <div>

                <img src="/works/odins/odins.svg" alt="" className="inline lg:hidden w-12 h-12 mb-5" />
                <p className="hidden lg:inline uppercase text-2xl bg-gradient-to-br from-slate-300 to-slate-900 bg-clip-text font-bold tracking-tight text-transparent">Odin&apos;s Shoes</p>
                <div className="grid grid-cols-2 gap-4">
                    <Image
                        src="/works/odins/odins1.webp"
                        alt="Website screenshot"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full brightness-75 hover:brightness-100 duration-150"
                    />
                    <Image
                        src="/works/odins/odins2.webp"
                        alt="Website screenshot"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full brightness-75 hover:brightness-100 duration-150"
                    />
                </div>
                <p className="text-xs md:text-base font-normal my-2 md:my-7">
                    Odin&apos;s Shoes - website catalog of an assortment of shoes from the manufacturer of the trademark &quot;Odin&apos;s Shoes&quot;.
                </p>
                <ul className="my-4 md:my-7 flex items-center gap-4">
                    <li>
                        <img src="/icons/nextjs.svg" alt="Next.js" className="w-6 md:w-10 h-6 md:h-10" />
                    </li>
                    <li>
                        <img src="/icons/typescript.svg" alt="TypeScript" className="w-6 md:w-10 h-6 md:h-10" />
                    </li>
                    <li>
                        <img src="/icons/tailwindcss.svg" alt="Tailwind CSS" className="w-6 md:w-10 h-6 md:h-10" />
                    </li>
                    <li>
                        <img src="/icons/nextui.svg" alt="NextUI" className="w-6 md:w-10 h-6 md:h-10" />
                    </li>
                </ul>
                <div className="flex items-center gap-2 text-xs md:text-base">
                    <a href="https://github.com/denis-larin-22/Odin-s_2.0" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-5 w-fit md:w-40 h-7 md:h-10 whitespace-nowrap rounded-md border-2 border-slate-100">Open repository</a>
                    <a href="https://odin-s-2-0.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-5 w-fit md:w-40 h-7 md:h-10 rounded-md bg-slate-100 text-black">Visit</a>
                </div>
            </div>

        ),
    },
    {
        titleImage: "/works/piramid/piramid.svg",
        content: (
            <div>
                <img src="/works/piramid/piramid.svg" alt="" className="inline lg:hidden w-12 h-12 mb-5" />
                <p className="hidden lg:inline uppercase text-2xl bg-gradient-to-br from-slate-300 to-slate-900 bg-clip-text font-bold tracking-tight text-transparent">Piramid / Website</p>
                <div className="grid grid-cols-2 gap-4">
                    <Image
                        src="/works/piramid/piramid2.webp"
                        alt="Website screenshot"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full brightness-75 hover:brightness-100 duration-150"
                    />
                    <Image
                        src="/works/piramid/piramid1.webp"
                        alt="Website screenshot"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full brightness-75 hover:brightness-100 duration-150"
                    />
                </div>
                <p className="text-xs md:text-base font-normal my-2 md:my-7">
                    The website for Piramid Space promotes the services of ТПК &quot;Піраміда,&quot; a company that supports businesses by offering various solutions to enhance efficiency and productivity. It targets business owners, offering options to become a dealer or order a demo of their products.
                </p>
                <ul className="my-4 md:my-7 flex items-center gap-4">
                    <li>
                        <img src="/icons/html.svg" alt="HTML" className="w-6 md:w-10 h-6 md:h-10" />
                    </li>
                    <li>
                        <img src="/icons/css.svg" alt="CSS" className="w-6 md:w-10 h-6 md:h-10" />
                    </li>
                    <li>
                        <img src="/icons/sass.svg" alt="Sass" className="w-6 md:w-10 h-6 md:h-10" />
                    </li>
                    <li>
                        <img src="/icons/bootstrap-purple.svg" alt="Bootstrap" className="w-6 md:w-10 h-6 md:h-10" />
                    </li>
                </ul>
                <div className="flex items-center gap-2 text-xs md:text-base">
                    <a href="https://piramidspace.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-5 w-fit md:w-40 h-7 md:h-10 whitespace-nowrap rounded-md border-2 border-slate-100">Open repository</a>
                    <a href="https://piramidspace.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-5 w-fit md:w-40 h-7 md:h-10 rounded-md bg-slate-100 text-black">Visit</a>
                </div>
            </div>
        ),
    },
];
