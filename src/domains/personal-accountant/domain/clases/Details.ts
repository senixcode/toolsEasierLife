export enum Detail {
    id = "id",
    name = "name",
    detailTypeId = "detailTypeId",
    amount = "amount",
    amountOfMoney = "amountOfMoney",
    description = "description",
    date = "date"
}

export type TypeDetail = {
    [Detail.id]?: number
    [Detail.name]: string
    [Detail.detailTypeId]: number
    [Detail.amount]: number
    [Detail.amountOfMoney]: string
    [Detail.description]?: string
    [Detail.date]?: string
}

export type TypeDetailBody = {
    [Detail.id]?: string
    [Detail.name]: string
    [Detail.detailTypeId]: string
    [Detail.amount]: string
    [Detail.amountOfMoney]: string
    [Detail.description]?: string
    [Detail.date]?: string
}

export default Detail
