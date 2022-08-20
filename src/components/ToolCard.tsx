import type { IToolObj } from "./Toolbox"

interface IToolProps {
    tool: IToolObj,
    sectionName: string,
}

export function ToolCard({ tool, sectionName }: IToolProps) {
    return <a href={tool.link} target='_blank' referrerPolicy="strict-origin">
        <div className={`toolCard ${sectionName}`} key={tool.name} >
            <div>{tool.icon}</div>
            <h3 className="toolCardTitle">{tool.name}</h3>
        </div>
    </a>
}
