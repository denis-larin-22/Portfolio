import WorkCard from "@/app/components/ui/WorkCard";
import { translations } from "./translations";
import { Language } from "../LanguageContext";

export const getWorksList = (lang: Language) => {
    const t = translations[lang].works;

    const works = [
        {
            title: "hlegal",
            icon: "/works/hlegal/hlegal.svg",
            description: t.hlegal,
            screenshots: ["/works/hlegal/hlegal2.webp", "/works/hlegal/hlegal1.webp"],
            link: "https://denis-larin-22.github.io/hlegal_final_hillel_project/",
        },
        {
            title: "Julia Magic Beauty",
            icon: "/works/jmb/julia-beauty.svg",
            description: t.julia,
            screenshots: ["/works/jmb/jmb1.webp", "/works/jmb/jmb2.webp"],
            link: "https://julia-beauty.vercel.app/",
        },
        {
            title: "Piramidspace | Main web-site",
            icon: "/works/piramid/piramid.svg",
            description: t.piramid,
            screenshots: ["/works/piramid/piramid1.webp", "/works/piramid/piramid2.webp"],
            link: "https://piramidspace.com/",
        },
        {
            title: "Piramidspace App",
            icon: "/works/piramid/piramid.svg",
            description: t.piramidApp,
            screenshots: ["/works/piramid-app/app2.webp", "/works/piramid-app/app1.webp", "/works/piramid-app/app3.webp"],
            link: "https://play.google.com/store/apps/details?id=piramid.test.app",
            linkText: "Google Play",
            badge: t.app,
        },
        {
            title: "Атмосфера стилю",
            icon: "/works/atmosfera/atmosfera.webp",
            description: t.atmosfera,
            screenshots: ["/works/atmosfera/atmosfera1.webp", "/works/atmosfera/atmosfera2.webp"],
            link: "https://denis-larin-22.github.io/Beauty_Atmosfera/",
        },
    ];

    return works.map((work) => ({
        titleImage: work.icon,
        content: <WorkCard {...work} linkText={work.linkText || t.visit} />,
    }));
}
