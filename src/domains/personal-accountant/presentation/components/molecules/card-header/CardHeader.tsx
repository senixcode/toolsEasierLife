import { useContext, FC } from 'react'
import * as icon from '@coreui/icons'
import IconCustom from 'domains/personal-accountant/presentation/components/atoms/iconcustom/IconCustom'
import ModalContext, { TypeModalContext } from '@/domains/personal-accountant/presentation/context/ModalRegisterContext'
import { TypeDetailBody } from 'domains/personal-accountant/domain/clases/Details'
import modalAlertDeleteContext from 'domains/personal-accountant/presentation/context/ModalAlertDeleteContext'
import './cardHeader.css'

type PropsCardHeader = {
    detail: TypeDetailBody
}

const CardHeader: FC<PropsCardHeader> = ({ detail }) => {
    const { handleEditerModal } = useContext<TypeModalContext>(ModalContext)
    const { handleChangeIsShow, changeDetail } = useContext(modalAlertDeleteContext)
    

    const handleEdit = () => handleEditerModal(detail)
   const handleDeleted = () => {
    handleChangeIsShow()
    changeDetail(detail)
   }

    return (
        <div className='card__header'>
            
            <IconCustom
                btnClass="btn-icon"
                ciconOnclick={handleEdit}
                icon={icon.cilPencil}
            />
            <IconCustom
                btnClass="btn-icon red"
                ciconOnclick={handleDeleted}
                icon={icon.cilCut}
            />
        </div>
    )
}

export default CardHeader