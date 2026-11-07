import Image from "next/image";

interface IProps {
    title: string,
    icon: string,
    description: string,
    screenshots: string[],
    link: string,
    linkText: string,
    badge?: string
}

const BrowserWindow = ({ src }: { src: string }) => (
    <div className="rounded-lg overflow-hidden border border-m-green/20 bg-m-grey-bg shadow-[0_0_40px_-12px_rgba(0,255,0,0.35)]">
        <div className="flex items-center gap-1 md:gap-1.5 px-2 md:px-3 h-3 md:h-6 border-b border-m-green/10">
            <span className="w-1 md:w-2 h-1 md:h-2 rounded-full bg-red-500/60" />
            <span className="w-1 md:w-2 h-1 md:h-2 rounded-full bg-yellow-400/60" />
            <span className="w-1 md:w-2 h-1 md:h-2 rounded-full bg-m-green/60" />
        </div>
        <Image
            src={src}
            alt="Website screenshot"
            width={1280}
            height={720}
            className="w-full aspect-video object-cover object-top brightness-75 hover:brightness-100 duration-300"
        />
    </div>
)

function WorkCard({ title, icon, description, screenshots, link, linkText, badge }: IProps) {
    return (
        <div>
            <img src={icon} alt="" className="inline lg:hidden w-12 h-12 mb-5 object-contain" />
            <p className="hidden lg:inline uppercase text-2xl bg-gradient-to-br from-slate-300 to-slate-900 bg-clip-text font-bold tracking-tight text-transparent">{title}</p>

            {badge &&
                <div className="flex">
                    <span className="inline-flex items-center gap-2 mt-3 px-3 py-1 rounded-full border border-m-green/30 bg-m-green/5 text-xs md:text-sm text-m-green">
                        <img src="/icons/react.svg" alt="" className="w-4 h-4 animate-[spin_8s_linear_infinite]" />
                        {badge}
                        <span className="text-slate-400">· React Native</span>
                    </span>
                </div>
            }

            {badge ?
                <div className="flex justify-center items-center gap-3 md:gap-8 mt-5 py-4 md:py-8">
                    {screenshots.map((src, index) => (
                        <div
                            key={src}
                            className={`relative w-[28%] max-w-[200px] aspect-[9/19] rounded-[14px] md:rounded-[28px] border-[3px] md:border-[6px] border-[#1d1d1d] ring-1 ring-m-green/20 overflow-hidden bg-black shadow-[0_0_40px_-12px_rgba(0,255,0,0.35)] duration-300 ${index === 1 ? 'z-10 scale-110' : index === 0 ? '-rotate-6 translate-y-3' : 'rotate-6 translate-y-3'}`}
                        >
                            <Image
                                src={src}
                                alt="App screenshot"
                                fill
                                sizes="200px"
                                className="object-cover object-top brightness-75 hover:brightness-100 duration-300"
                            />
                        </div>
                    ))}
                </div>
                :
                <div className="group relative mt-5 pr-[15%] pb-[12%]">
                    <BrowserWindow src={screenshots[0]} />
                    {screenshots[1] &&
                        <div className="absolute right-0 bottom-0 w-[55%] group-hover:-translate-y-2 duration-300">
                            <BrowserWindow src={screenshots[1]} />
                        </div>
                    }
                </div>
            }

            <p className="text-xs md:text-base font-normal my-4 md:my-7">
                {description}
            </p>
            <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-5 w-fit md:w-40 h-7 md:h-10 whitespace-nowrap rounded-md bg-slate-100 text-black text-xs md:text-base hover:bg-m-green duration-200">{linkText}</a>
        </div>
    )
}

export default WorkCard;
