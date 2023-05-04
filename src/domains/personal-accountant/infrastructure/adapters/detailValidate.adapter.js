import Detail from "../../domain/clases/Details"

const detailValidateAdapter = (body) => {
    if (!body[Detail.name] ||
        !body[Detail.detailType] ||
        !body[Detail.amountOfMoney]) {
        return true
    }

    return false

}

export const messageRequirements = `${Detail.name}, ${Detail.detailType}, ${Detail.amountOfMoney}`

export default detailValidateAdapter