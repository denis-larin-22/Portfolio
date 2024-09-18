import { Raleway, Poppins, La_Belle_Aurore } from "next/font/google";

export const ralewayFont = Raleway({ subsets: ["latin", "cyrillic"] });
export const auroreFont = La_Belle_Aurore({ subsets: ["latin"], weight: ["400"] });
export const poppinsFont = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "900"],
});
