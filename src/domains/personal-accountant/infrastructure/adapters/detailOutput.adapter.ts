import Detail, { TypeDetail, TypeDetailBody } from 'domains/personal-accountant/domain/clases/Details'

function DetailOutput(detail: TypeDetail) {
    const result: TypeDetailBody = {
        [Detail.name]: detail[Detail.name],
        [Detail.detailTypeId]: `${detail[Detail.detailTypeId]}`,
        [Detail.amount]: `${detail[Detail.amount]}`,
        [Detail.amountOfMoney]: detail[Detail.amountOfMoney],
    }

    if (detail[Detail.id]) result[Detail.id] = `${detail[Detail.id]}`
    if (detail[Detail.description]) result[Detail.description] = detail[Detail.description]
    if (detail[Detail.date]) result[Detail.date] = detail[Detail.date]
    if (detail[Detail.detailType]) result[Detail.detailType] = detail[Detail.detailType]

    return result
}

const detailOutputAdapter = (details: TypeDetail | TypeDetail[]) => {
    if (Array.isArray(details)) return details.map(DetailOutput)
    return DetailOutput(details)
}

export default detailOutputAdapter
