export interface ISkillIcon {
    name: string;
    icon: string;
    link: string;
    bg: boolean;
}

export const skillsIcons: ISkillIcon[] = [
    {
        name: "JavaScript",
        icon: "/icons/javascript.svg",
        link: "https://ru.wikipedia.org/wiki/JavaScript",
        bg: false
    },
    {
        name: "TypeScript",
        icon: "/icons/typescript.svg",
        link: "https://www.typescriptlang.org/",
        bg: false
    },
    {
        name: "React JS",
        icon: "/icons/react.svg",
        link: "https://ru.legacy.reactjs.org/",
        bg: false
    },
    {
        name: "Next JS",
        icon: "/icons/nextjs.svg",
        link: "https://nextjs.org/",
        bg: false
    },
    {
        name: "Redux",
        icon: "/icons/redux.svg",
        link: "https://redux.js.org/",
        bg: false
    },
    {
        name: "Tailwind CSS",
        icon: "/icons/tailwindcss.svg",
        link: "https://tailwindcss.com/",
        bg: false
    },
    {
        name: "Framer Motion",
        icon: "/icons/framer.svg",
        link: "https://www.framer.com/motion/",
        bg: false
    },
    {
        name: "Contentful",
        icon: "/icons/contentful.svg",
        link: "https://www.contentful.com/",
        bg: false
    },
    {
        name: "Firebase",
        icon: "/icons/firebase.svg",
        link: "https://firebase.google.com/",
        bg: false
    },
    {
        name: "Next UI",
        icon: "/icons/nextui.svg",
        link: "https://nextui.org/",
        bg: true
    },
    {
        name: "Bootstrap",
        icon: "/icons/bootstrap.svg",
        link: "https://getbootstrap.com/",
        bg: true
    },
    {
        name: "Sass/Scss",
        icon: "/icons/sass.svg",
        link: "https://sass-lang.com/",
        bg: false
    },
];