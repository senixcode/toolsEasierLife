import Detail from "../../domain/clases/Details"

function DetailInput(detail) {
    return {
        [Detail.id]: detail[Detail.id],
        [Detail.name]: detail[Detail.name],
        [Detail.detailType]: +detail[Detail.detailType],
        [Detail.amount]: +detail[Detail.amount],
        [Detail.amountOfMoney]: detail[Detail.amountOfMoney],
        [Detail.description]: detail[Detail.description],
        [Detail.date]: detail[Detail.date],
    }
}

const detailInputAdapter = (details) => {
    if (Array.isArray(details)) return details.map(DetailInput)
    return DetailInput(details)
}

export default detailInputAdapter
