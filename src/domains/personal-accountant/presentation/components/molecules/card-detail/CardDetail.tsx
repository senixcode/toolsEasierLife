import { FC, useContext } from 'react'
import CardHeader from 'domains/personal-accountant/presentation/components/molecules/card-header/CardHeader'
import { getTypeDetail } from 'domains/personal-accountant/presentation/utils/getTypeDetail'
import Detail, { TypeDetailBody } from 'domains/personal-accountant/domain/clases/Details'
import DetailContext from 'domains/personal-accountant/presentation/context/DetailContext'

type PropsCardDetail = {
    detail: TypeDetailBody
}

const CardDetail: FC<PropsCardDetail> = ({ detail }) => {
    const { status } = useContext(DetailContext)
    return (
        <div className='cards__item'>
            {status !== 'error' && <CardHeader detail={detail} />}
            <div>
                <h3 className='cards__item-title'>{detail[Detail.name]}
                    <small>{detail[Detail.amountOfMoney]}</small>
                    <small>{getTypeDetail(+detail[Detail.detailTypeId])}</small>
                </h3>
            </div>
            <p>{detail.description}</p>
        </div>
    )
}

export default CardDetail