'use client'

import { createContext, useContext, useEffect, useState } from "react";
import { translations } from "./data/translations";

export type Language = 'en' | 'ua';

interface ILanguageContext {
    lang: Language,
    setLang: (lang: Language) => void
}

const LanguageContext = createContext<ILanguageContext>({
    lang: 'en',
    setLang: () => { }
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLang] = useState<Language>('en');

    useEffect(() => {
        const saved = localStorage.getItem('lang');
        if (saved === 'en' || saved === 'ua') setLang(saved);
    }, []);

    useEffect(() => {
        localStorage.setItem('lang', lang);
        document.documentElement.lang = lang === 'ua' ? 'uk' : 'en';
    }, [lang]);

    return (
        <LanguageContext.Provider value={{ lang, setLang }}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => {
    const { lang, setLang } = useContext(LanguageContext);
    return { lang, setLang, t: translations[lang] };
}
