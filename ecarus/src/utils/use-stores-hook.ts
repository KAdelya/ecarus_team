import {MobXProviderContext} from 'mobx-react';
import {useContext} from "react";
import {MainStore} from "../stores/mainStore";


export function useStores(): MainStore {
    return <MainStore>useContext(MobXProviderContext);
}
