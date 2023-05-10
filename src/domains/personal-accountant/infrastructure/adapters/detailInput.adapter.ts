import Detail, { TypeDetail, TypeDetailBody } from 'domains/personal-accountant/domain/clases/Details'

const DetailInput = (detail: TypeDetailBody): TypeDetail => {
    const result: TypeDetail = {
        [Detail.name]: detail[Detail.name],
        [Detail.detailTypeId]: +detail[Detail.detailTypeId],
        [Detail.amount]: +detail[Detail.amount],
        [Detail.amountOfMoney]: detail[Detail.amountOfMoney],
    }

    if (detail[Detail.id]) result[Detail.id] = +detail[Detail.id]
    if (detail[Detail.description]) result[Detail.description] = detail[Detail.description]
    if (detail[Detail.date]) result[Detail.date] = detail[Detail.date]

    return result
}

const detailInputAdapter = (details: TypeDetailBody[] | TypeDetailBody) => {
    if (Array.isArray(details)) return details.map(DetailInput)
    return DetailInput(details)
}

export default detailInputAdapter
