
function Detail(detail) {
    return {
        id: detail.id,
        name: detail.name,
        detailTypeId: detail.detailTypeId,
        amount: detail.amount,
        amountOfMoney: detail.amountOfMoney,
        description: detail.description,
        date: detail.date,
    }
}

const detailAdapter = (details) => details.map(Detail)

export default detailAdapter
