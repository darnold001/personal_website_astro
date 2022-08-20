
import { ActiveTab, updateActiveTab } from "../pages/stores/tabs"
import { useStore } from '@nanostores/react'
export function About({ children }: any){
    const $currentTab = useStore(ActiveTab);
    return <div hidden={$currentTab !== 'About Me'}>{children}</div>
}
