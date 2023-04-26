import React, { useContext } from 'react'
import CardHeader from '../card-header/CardHeader'
import { getTypeDetail } from '../../../utils/getTypeDetail'
import ModalContext from '../../../../../../core/context/ModalContext'

function CardDetail({detail}) {
   
    return (
        <div className='cards__item'>
           <CardHeader />
            <div>
                <h3 className='cards__item-title'>{detail.name}
                    <small>{getTypeDetail(detail.detailTypeId)}</small>
                </h3>
            </div>
            <p>{detail.description}</p>
        </div>
    )
}

export default CardDetail