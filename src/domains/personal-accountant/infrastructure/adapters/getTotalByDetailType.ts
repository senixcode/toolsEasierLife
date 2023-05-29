import Detail, { TypeDetailBody } from "../../domain/clases/Details";
import { OptionsTypeDetail } from "../../presentation/utils/getTypeDetail";

function convertDecimal(value: string, decimalNumber: number = 2) {
    return +parseFloat(value).toFixed(decimalNumber);
}

const getTotalByDetailType = (details: TypeDetailBody[], detailTypeId: OptionsTypeDetail) => {
    return details
        .filter(detail => detail[Detail.detailTypeId] === `${detailTypeId}`)
        .reduce((acc, cur) => {
            const acomulator = convertDecimal(`${acc}`)
            const amount = convertDecimal(cur[Detail.amount])
            const amountOfMoney = convertDecimal(cur[Detail.amountOfMoney])
            const total = amount > 1 ? (amount * amountOfMoney) : amountOfMoney
            return acomulator + total
        }, 0);
}

export default getTotalByDetailType
