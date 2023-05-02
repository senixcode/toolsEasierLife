import { createContext } from "react";
import { ACTIONS_MODALS } from "../const/actionsModal.cons.js";



export const initialContext = {
    open: false,
    payload: {
        actions: {
            [ACTIONS_MODALS.register]: false,
            [ACTIONS_MODALS.editer]: false,
        }
    },
    parmas: false
}

const ModalContext = createContext(initialContext)

export default ModalContext