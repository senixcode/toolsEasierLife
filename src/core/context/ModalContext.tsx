import { createContext } from 'react';
import { TypeDetailBody } from 'domains/personal-accountant/domain/clases/Details';
import { ACTIONS_MODALS } from 'core/const/actionsModal.const';

export interface Actions {
    register: boolean,
    editer: boolean
}

export type ParamsModal = boolean | TypeDetailBody

export interface ModalState {
    open: boolean
    actions: Actions
    params: ParamsModal
}

export type TypeModalContext = {
    modalState: ModalState;
    changeActionsModal: (action: ACTIONS_MODALS, params: ParamsModal) => void;
    handleRegisterModal: () => void;
    handleEditerModal: (params: ParamsModal) => void;
    closeModal: () => void;
}


export const initialModalState: ModalState = {
    open: false,
    actions: {
        register: false,
        editer: false,
    },
    params: false
}

export const initialModalContext: TypeModalContext = {
    modalState: initialModalState,
    changeActionsModal: () => null,
    handleRegisterModal: () => null,
    handleEditerModal: () => null,
    closeModal: () => null,
}

const modalContext = createContext(initialModalContext)
export default modalContext