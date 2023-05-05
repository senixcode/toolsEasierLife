import { createContext } from "react";
import { TypeDetail } from "@/domains/personal-accountant/domain/clases/Details";
import { PropsUseModal } from "@/core/hooks/useModal";

interface Actions {
    register: boolean,
    editer: boolean
}

export type ParamsModal =  boolean | TypeDetail

interface ModalContext {
    open: boolean
    actions: Actions
    params: ParamsModal
}

export const initialContext: ModalContext = {
    open: false,
    actions: {
        register: false,
        editer: false,
    },
    params: false
}

const ModalContext = createContext<ModalContext | PropsUseModal>(initialContext)

export default ModalContext