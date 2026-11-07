import { Raleway, Poppins, La_Belle_Aurore, Montserrat } from "next/font/google";

export const ralewayFont = Raleway({ subsets: ["latin", "cyrillic"] });
export const auroreFont = La_Belle_Aurore({ subsets: ["latin"], weight: ["400"] });
// Poppins has no cyrillic, so ukrainian text falls back to Montserrat
export const montserratFont = Montserrat({
    subsets: ["cyrillic"],
    weight: ["400", "500", "600", "900"],
    variable: "--font-montserrat",
});
export const poppinsFont = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "900"],
    fallback: ["var(--font-montserrat)", "sans-serif"],
    adjustFontFallback: false,
});
