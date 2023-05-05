import { useState } from "react"
import ModalContext, { ParamsModal, initialContext } from "@/core/context/ModalContext"
import { ACTIONS_MODALS } from '@/core/const/actionsModal.const'

export type PropsUseModal = {
    modalState: ModalContext;
    changeActionsModal: (action: ACTIONS_MODALS, params: ParamsModal) => void;
    handleRegisterModal: () => void;
    handleEditerModal: (params: ParamsModal) => void;
    closeModal: () => void;
}

const useModal = () => {
    const [modalState, setModalState] = useState<ModalContext>(initialContext)
    const changeActionsModal = (action: ACTIONS_MODALS, params: ParamsModal = false) =>
        setModalState({
            open: !modalState.open,
            actions: {
                ...initialContext.actions,
                [action]: !modalState.actions[action]
            },
            params,
        })

    const handleRegisterModal = () => changeActionsModal(ACTIONS_MODALS.register)
    const handleEditerModal = (params:ParamsModal) => changeActionsModal(ACTIONS_MODALS.editer, params)
    const closeModal = () => setModalState(initialContext)

    return {
        modalState,
        changeActionsModal,
        handleRegisterModal,
        handleEditerModal,
        closeModal
    }
}

export default useModal