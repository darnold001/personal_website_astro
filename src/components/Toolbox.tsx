
import { ActiveTab } from "../pages/stores/tabs"
import { useStore } from '@nanostores/react'
import { ToolCard } from "./ToolCard";
import { Tools } from "../constants";

export interface IToolObj { icon: string; name: string }

export function Toolbox() {

    const $currentTab = useStore(ActiveTab);


    return <div hidden={$currentTab !== 'Toolbox'}>
        {Tools.map((section) => <div key={section.sectionTitle} >
            <h2 className="sectionTitle">{section.sectionTitle}</h2>
            <div className='toolboxSection'>
                {section.tools.map(tool => <ToolCard key={tool.name} tool={tool} />)}
            </div>
        </div>)}
    </div>
}
