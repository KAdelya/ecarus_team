import {observer} from "mobx-react";
import {useStores} from "../../../utils/use-stores-hook";

export const ModalConstructor = observer(() => {
    const { modalStore: {currentModal} } = useStores();
    return currentModal;
})
