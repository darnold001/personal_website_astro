import { atom } from 'nanostores';

const initialValue ='About Me';
export const ActiveTab = atom(initialValue)


export function updateActiveTab(tabName: string){
    ActiveTab.set(tabName)
}
