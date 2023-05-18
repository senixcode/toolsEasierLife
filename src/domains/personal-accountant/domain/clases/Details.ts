import { TypeTypeDetails } from "./TypeDetail"

export enum Detail {
    id = "id",
    name = "name",
    detailTypeId = "detailTypeId",
    detailType = "detailType",
    amount = "amount",
    amountOfMoney = "amountOfMoney",
    description = "description",
    date = "date"
}

interface baseDetail {
    [Detail.name]: string
    [Detail.amountOfMoney]: string
    [Detail.description]?: string
    [Detail.date]?: string
    [Detail.detailType]?: TypeTypeDetails
}

export interface TypeDetail extends baseDetail {
    [Detail.id]?: number
    [Detail.amount]: number
    [Detail.detailTypeId]: number
}

export interface TypeDetailBody extends baseDetail {
    [Detail.id]?: string
    [Detail.amount]: string
    [Detail.detailTypeId]: string
}

export default Detail
