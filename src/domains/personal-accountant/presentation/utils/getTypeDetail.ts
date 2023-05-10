export const getTypeDetail = (value:number) => {
    if (value === 1) return "Income"
    if (value === 2) return "Egress"
    return ""
}
