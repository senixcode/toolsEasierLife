export enum OptionsTypeDetail {
    Income = 1,
    Egress = 2
}

export const getTypeDetail = (value: OptionsTypeDetail ) => {
    if (value === OptionsTypeDetail.Income) return "Ingreso"
    if (value === OptionsTypeDetail.Egress) return "Egreso"
    return ""
}
