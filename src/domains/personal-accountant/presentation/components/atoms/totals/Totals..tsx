import { useContext } from 'react'
import DetailContext from 'domains/personal-accountant/presentation/context/DetailContext'
import isEmptyArray from '../../../utils/isEmptyArray'
import './total.css'
import Detail from '@/domains/personal-accountant/domain/clases/Details'

const Totals = () => {
    const { details, totalIncome, totalEgress } = useContext(DetailContext)
    return (
        <div className='flex-center total-container'>
            <label className='bg-details' > Detalles: {isEmptyArray(details, Detail.name) ? 0 : details?.length}</label>
            <label className='bg-income'> Ingresos: {"S/" + totalIncome}</label>
            <label className='bg-egress'> Egresos: {"S/" + totalEgress}</label>
        </div>
    )
}
export default Totals