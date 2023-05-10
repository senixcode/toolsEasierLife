import { FC } from 'react'
import Modal from 'react-modal'
import ModalContext from 'core/context/ModalContext'
import useModal from 'core/hooks/useModal'

Modal.setAppElement("#root")

type Props = {
    children?: React.ReactNode
}

const ModalProvider:FC<Props> = ({ children }) => {
    const params = useModal()
    return (
        <ModalContext.Provider value={params}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalProvider