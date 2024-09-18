import Image from "next/image";

export const worksList = [
    {
        titleImage: "/works/hlegal/hlegal.svg",
        content: (
            <div>
                <p className="mb-7 uppercase text-2xl bg-gradient-to-br from-slate-300 to-slate-900 bg-clip-text font-bold tracking-tight text-transparent">hlegal</p>
                <div className="grid grid-cols-2 gap-4">
                    <Image
                        src="/works/hlegal/hlegal2.webp"
                        alt=" website screenshot"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full brightness-75 hover:brightness-100 duration-150"
                    />
                    <Image
                        src="/works/hlegal/hlegal1.webp"
                        alt=" website screenshot"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full brightness-75 hover:brightness-100 duration-150"
                    />
                </div>
                <p className="text-xs md:text-base  font-normal my-7">
                    Hlegal - a multi-page website project on pure HTML and CSS using SCSS preprocessor and Bootstrap 5.
                </p>
                <ul className="flex items-center gap-4">
                    <li className="">
                        <img src="/icons/html.svg" alt="html" className="w-10 h-10" />
                    </li>
                    <li className="">
                        <img src="/icons/css.svg" alt="css" className="w-10 h-10" />
                    </li>
                    <li className="">
                        <img src="/icons/sass.svg" alt="sass" className="w-10 h-10" />
                    </li>
                    <li className="">
                        <img src="/icons/bootstrap-purple.svg" alt="bootstrap" className="w-10 h-10" />
                    </li>
                </ul>
                <div className="mt-7 flex items-center gap-2">
                    <a href="https://github.com/denis-larin-22/hlegal_final_hillel_project" target="_blank" className="inline-flex items-center justify-center w-40 h-10 rounded-md border-2 border-slate-100">Open repository</a>
                    <a href="https://denis-larin-22.github.io/hlegal_final_hillel_project/" target="_blank" className="inline-flex items-center justify-center w-40 h-10 rounded-md bg-slate-100 text-black">Visit</a>
                </div>
            </div>
        ),
    },
    {
        titleImage: "/works/jmb/julia-beauty.svg",
        content: (
            <div>
                <p className="mb-7 uppercase text-2xl bg-gradient-to-br from-slate-300 to-slate-900 bg-clip-text font-bold tracking-tight text-transparent">Julia Magic Beauty</p>
                <div className="grid grid-cols-2 gap-4">
                    <Image
                        src="/works/jmb/jmb1.webp"
                        alt=" website screenshot"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full brightness-75 hover:brightness-100 duration-150"
                    />
                    <Image
                        src="/works/jmb/jmb2.webp"
                        alt=" website screenshot"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full brightness-75 hover:brightness-100 duration-150"
                    />
                </div>
                <p className="text-xs md:text-base  font-normal my-7">
                    Julia Magic Beauty - hair stylist portfolio website with examples of work, list of services, price list and contacts.
                </p>
                <ul className="flex items-center gap-4">
                    <li className="">
                        <img src="/icons/nextjs.svg" alt="nextjs" className="w-10 h-10" />
                    </li>
                    <li className="">
                        <img src="/icons/typescript.svg" alt="typescript" className="w-10 h-10" />
                    </li>
                    <li className="">
                        <img src="/icons/tailwindcss.svg" alt="tailwindcss" className="w-10 h-10" />
                    </li>
                    <li className="">
                        <img src="/icons/firebase.svg" alt="firebase" className="w-10 h-10" />
                    </li>
                </ul>
                <div className="mt-7 flex items-center gap-2">
                    <a href="https://github.com/denis-larin-22/julia-beauty" target="_blank" className="inline-flex items-center justify-center w-40 h-10 rounded-md border-2 border-slate-100">Open repository</a>
                    <a href="https://julia-beauty.vercel.app/" target="_blank" className="inline-flex items-center justify-center w-40 h-10 rounded-md bg-slate-100 text-black">Visit</a>
                </div>
            </div>
        ),
    },
    {
        titleImage: "/works/odins/odins.svg",
        content: (
            <div>
                <p className="mb-7 uppercase text-2xl bg-gradient-to-br from-slate-300 to-slate-900 bg-clip-text font-bold tracking-tight text-transparent">Odin`s shoes</p>
                <div className="grid grid-cols-2 gap-4">
                    <Image
                        src="/works/odins/odins1.webp"
                        alt=" website screenshot"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full brightness-75 hover:brightness-100 duration-150"
                    />
                    <Image
                        src="/works/odins/odins2.webp"
                        alt=" website screenshot"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full brightness-75 hover:brightness-100 duration-150"
                    />
                </div>
                <p className="text-xs md:text-base  font-normal my-7">
                    Odin`s shoes - website catalog of an assortment of shoes from the manufacturer of the trademark "Odin`s shoes".
                </p>
                <ul className="flex items-center gap-4">
                    <li className="">
                        <img src="/icons/nextjs.svg" alt="nextjs" className="w-10 h-10" />
                    </li>
                    <li className="">
                        <img src="/icons/typescript.svg" alt="typescript" className="w-10 h-10" />
                    </li>
                    <li className="">
                        <img src="/icons/tailwindcss.svg" alt="tailwindcss" className="w-10 h-10" />
                    </li>
                    <li className="">
                        <img src="/icons/nextui.svg" alt="firebase" className="w-10 h-10 bg-white rounded-md" />
                    </li>
                </ul>
                <div className="mt-7 flex items-center gap-2">
                    <a href="https://github.com/denis-larin-22/Odin-s_2.0" target="_blank" className="inline-flex items-center justify-center w-40 h-10 rounded-md border-2 border-slate-100">Open repository</a>
                    <a href="https://odin-s-2-0.vercel.app/" target="_blank" className="inline-flex items-center justify-center w-40 h-10 rounded-md bg-slate-100 text-black">Visit</a>
                </div>
            </div>
        ),
    },
    {
        titleImage: "/works/piramid/piramid.svg",
        content: (
            <div>
                <p className="mb-7 uppercase text-2xl bg-gradient-to-br from-slate-300 to-slate-900 bg-clip-text font-bold tracking-tight text-transparent">Piramid /  Web-site</p>
                <div className="grid grid-cols-2 gap-4">
                    <Image
                        src="/works/piramid/piramid2.webp"
                        alt=" website screenshot"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full brightness-75 hover:brightness-100 duration-150"
                    />
                    <Image
                        src="/works/piramid/piramid1.webp"
                        alt=" website screenshot"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full brightness-75 hover:brightness-100 duration-150"
                    />
                </div>
                <p className="text-xs md:text-base  font-normal my-7">
                    The website for Piramid Space promotes the services of ТПК "Піраміда," a company that supports businesses by offering various solutions to enhance efficiency and productivity. It targets business owners, offering options to become a dealer or order a demo of their products
                </p>
                <ul className="flex items-center gap-4">
                    <li className="">
                        <img src="/icons/nextjs.svg" alt="nextjs" className="w-10 h-10" />
                    </li>
                    <li className="">
                        <img src="/icons/typescript.svg" alt="typescript" className="w-10 h-10" />
                    </li>
                    <li className="">
                        <img src="/icons/tailwindcss.svg" alt="tailwindcss" className="w-10 h-10" />
                    </li>
                    <li className="">
                        <img src="/icons/framer.svg" alt="framer" className="w-10 h-10" />
                    </li>
                    <li className="">
                        <img src="/icons/nextui.svg" alt="firebase" className="w-10 h-10 bg-white rounded-md" />
                    </li>
                    <li className="">
                        <img src="/icons/contentful.svg" alt="contentful" className="w-10 h-10" />
                    </li>
                </ul>
                <div className="mt-7 flex items-center gap-2">
                    <a href="https://piramidspace.com/" target="_blank" className="inline-flex items-center justify-center w-40 h-10 rounded-md bg-slate-100 text-black">Visit</a>
                </div>
            </div>
        ),
    },
    {
        titleImage: "/works/piramid/piramid.svg",
        content: (
            <div>
                <p className="mb-7 uppercase text-2xl bg-gradient-to-br from-slate-300 to-slate-900 bg-clip-text font-bold tracking-tight text-transparent">Piramid /  Catalog</p>
                <div className="grid grid-cols-2 gap-4">
                    <Image
                        src="/works/piramid/catalog1.webp"
                        alt=" website screenshot"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full brightness-75 hover:brightness-100 duration-150"
                    />
                    <Image
                        src="/works/piramid/catalog2.webp"
                        alt=" website screenshot"
                        width={500}
                        height={500}
                        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full brightness-75 hover:brightness-100 duration-150"
                    />
                </div>
                <p className="text-xs md:text-base  font-normal my-7">
                    Company product catalog of ТПК "Піраміда" company. Catalog presents the entire range of products in different categories with the ability to filter and integrate with the personal account system.
                </p>
                <ul className="flex items-center gap-4">
                    <li className="">
                        <img src="/icons/nextjs.svg" alt="nextjs" className="w-10 h-10" />
                    </li>
                    <li className="">
                        <img src="/icons/typescript.svg" alt="typescript" className="w-10 h-10" />
                    </li>
                    <li className="">
                        <img src="/icons/tailwindcss.svg" alt="tailwindcss" className="w-10 h-10" />
                    </li>
                    <li className="">
                        <img src="/icons/nextui.svg" alt="firebase" className="w-10 h-10 bg-white rounded-md" />
                    </li>
                </ul>
                <div className="mt-7 flex items-center gap-2">
                    <a href="https://site-2024-beta.vercel.app/catalog" target="_blank" className="inline-flex items-center justify-center w-40 h-10 rounded-md bg-slate-100 text-black">Visit</a>
                    <p className="text-m-grey ml-4">Under development...</p>
                </div>
            </div>
        ),
    },
];