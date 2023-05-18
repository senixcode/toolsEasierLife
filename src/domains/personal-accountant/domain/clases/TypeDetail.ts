export enum TypeDetails {
    id = "id",
    nameNumber = "nameNumber",
    name = "name",
    tags = "tags",
    date = "date"
}

export type TypeTypeDetails = {
    [TypeDetails.id]: number
    [TypeDetails.nameNumber]: number
    [TypeDetails.tags]: string
    [TypeDetails.date]: string
}