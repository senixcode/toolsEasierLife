export const getTypeDetail = (value:number) => {
    if (value === 1) return "Ingreso"
    if (value === 2) return "Egreso"
    return ""
}
