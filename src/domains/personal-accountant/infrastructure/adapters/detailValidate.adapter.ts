import Detail, { TypeDetailBody } from 'domains/personal-accountant/domain/clases/Details'

const detailValidateAdapter = (body:TypeDetailBody) => {
    if (!body[Detail.name] ||
        !body[Detail.detailTypeId] ||
        !body[Detail.amountOfMoney]) {
        return true
    }

    return false

}

export const messageRequirements = `${Detail.name}, ${Detail.detailTypeId}, ${Detail.amountOfMoney}`

export default detailValidateAdapter