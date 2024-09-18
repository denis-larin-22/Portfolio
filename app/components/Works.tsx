import React from "react";
import { WorksLine } from "./ui/WorksLine";
import { worksList } from "../lib/data/works-list";

function Works() {

    return (
        <div className="w-full">
            <WorksLine data={worksList} />
        </div>
    );
}

export default Works;