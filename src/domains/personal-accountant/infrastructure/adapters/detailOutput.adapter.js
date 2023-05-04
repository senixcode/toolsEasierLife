import Detail from "../../domain/clases/Details"

function DetailOutput(detail) {
    return {
        [Detail.id]: detail[Detail.id],
        [Detail.name]: detail[Detail.name],
        [Detail.detailType]: detail[Detail.detailType],
        [Detail.amount]: detail[Detail.amount],
        [Detail.amountOfMoney]: detail[Detail.amountOfMoney],
        [Detail.description]: detail[Detail.description],
        [Detail.date]: detail[Detail.date],
    }
}

const detailOutputAdapter = (details) => {
    if (Array.isArray(details)) return details.map(DetailOutput)
    return DetailOutput(details)
}

export default detailOutputAdapter
