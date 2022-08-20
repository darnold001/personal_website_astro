import { ActiveTab, updateActiveTab } from '../pages/stores/tabs';
import { useStore } from '@nanostores/react'
import Styles from "../styles/App.scss";


interface ITabWrapper {
    tabLabels: string[]
}

export function TabWrapper({ tabLabels }: ITabWrapper) {
    return <ul>
        {tabLabels.map(label => <li className='tab-label' key={label} onClick={() => updateActiveTab(label)}>{label}</li>)}
    </ul>
}

