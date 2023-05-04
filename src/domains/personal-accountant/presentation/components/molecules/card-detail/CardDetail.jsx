import React, { useContext } from 'react'
import CardHeader from '../card-header/CardHeader'
import { getTypeDetail } from '../../../utils/getTypeDetail'
import Detail from '../../../../domain/clases/Details'



function CardDetail({detail}) {

    return (
        <div className='cards__item'>
           <CardHeader detail={detail} />
            <div>
                <h3 className='cards__item-title'>{detail[Detail.name]}
                    <small>{detail[Detail.amountOfMoney]}</small>
                    <small>{getTypeDetail(detail[Detail.detailType])}</small>
                </h3>
            </div>
            <p>{detail.description}</p>
        </div>
    )
}

export default CardDetail