import type { IToolObj } from "./Toolbox"

export function ToolCard({ tool }: { tool: IToolObj }) {
    return <div className='toolCard' key={tool.name}>
        <div>{tool.icon}</div>
        <h3>{tool.name}</h3>
    </div>
}
