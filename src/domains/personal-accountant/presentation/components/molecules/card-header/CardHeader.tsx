import { useContext, FC } from 'react'
import * as icon from '@coreui/icons'
import IconCustom from 'domains/personal-accountant/presentation/components/atoms/iconcustom/IconCustom'
import ModalContext, { TypeModalContext } from 'core/context/ModalContext'
import useDetailDelete from 'domains/personal-accountant/presentation/hooks/services/useDetailDelete'
import Detail, { TypeDetailBody } from 'domains/personal-accountant/domain/clases/Details'
import './cardHeader.css'

type PropsCardHeader = {
    detail: TypeDetailBody
}

const CardHeader: FC<PropsCardHeader> = ({ detail }) => {
    const { handleEditerModal } = useContext<TypeModalContext>(ModalContext)
    const deletedDetail = useDetailDelete()
    
    const handleEdit = () => handleEditerModal(detail)
    const handleDeleted = () => detail[Detail.id] && deletedDetail(detail[Detail.id])

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