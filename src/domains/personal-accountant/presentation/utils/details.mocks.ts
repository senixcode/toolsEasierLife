import { TypeDetailBody } from 'domains/personal-accountant/domain/clases/Details'

export const detailsMock : TypeDetailBody[] = [
    {
        id:"1",
        name: "Pago mensual de trabajo Mock1",
        detailTypeId:"1",
        amount: "1",
        amountOfMoney: "2000",
        description: "Pago empresa Inetum",
        date: "17/04/2023"
    },
    {
        id:"2",
        name: "Pago de Internet Mock2",
        detailTypeId:"2",
        amount: "1",
        amountOfMoney: "80",
        description: "Pago autoservicio",
        date: "17/04/2023"
    }
]