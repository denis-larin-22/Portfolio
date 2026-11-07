'use client'

import React from "react";
import { WorksLine } from "./ui/WorksLine";
import { getWorksList } from "../lib/data/works-list";
import { useLanguage } from "../lib/LanguageContext";

function Works() {
    const { lang } = useLanguage();

    return (
        <div className="w-full">
            <WorksLine data={getWorksList(lang)} />
        </div>
    );
}

export default Works;