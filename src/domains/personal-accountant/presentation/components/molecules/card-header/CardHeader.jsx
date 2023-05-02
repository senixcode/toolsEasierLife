import React, { useContext } from 'react'
import * as icon from '@coreui/icons'
import IconCustom from '../../atoms/iconcustom/IconCustom'
import './cardHeader.css'
import ModalContext from '../../../../../../core/context/ModalContext'
import useDetailDelete from '../../../hooks/services/useDetailDelete'

function CardHeader({id}) {
    const { handleEditerModal } = useContext(ModalContext)
    const deletedDetail = useDetailDelete()
    return (
        <div className='card__header'>
            <IconCustom
                btnClass="btn-icon"
                ciconOnclick={handleEditerModal}
                icon={icon.cilPencil}
            />
            <IconCustom
                btnClass="btn-icon red"
                ciconClass=""
                ciconOnclick={() => deletedDetail(id)}
                icon={icon.cilCut}
            />
        </div>
    )
}

export default CardHeader