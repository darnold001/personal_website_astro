
import { ToolCard } from "./ToolCard";
import { Tools } from "../constants";
import { useMemo } from "react";

export interface IToolObj { icon: string; name: string, link: string }

export function Toolbox() {

const sortedTools = useMemo(() =>Tools.sort(((a,b) => a.name > b.name ? 1: -1)),[Tools])

    return <div>
        <h1 className="toolboxTitle">My current Toolbox includes: </h1>
        <div className='toolbox'>
            {sortedTools.map(tool => <ToolCard key={tool.name} tool={tool}  />)}
        </div>
    </div>
}
