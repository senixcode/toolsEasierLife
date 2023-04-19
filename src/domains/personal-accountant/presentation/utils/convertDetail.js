
function modelDetail(detail) {
    return {
        id: detail.Id,
        name: detail.Name,
        detailTypeId: detail.detailTypeId,
        amount: detail.Amount,
        amountOfMoney: detail.AmountOfMoney,
        description: detail.Description,
        date: detail.Date,
    }
}

export const convertDetail = (details) => details.map(modelDetail)