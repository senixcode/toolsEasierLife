import { createContext } from "react"
import { TypeDetailBody } from "../../domain/clases/Details";

export interface TypeModalAlertDelete {
    isShow: boolean;
    handleChangeIsShow: () => void;
    changeDetail: (data?: TypeDetailBody) => void
    detail: boolean | TypeDetailBody
    handleDeleted: () => void
}

const initialModalAlertDelete = {
    isShow: false,
    handleChangeIsShow: () => {},
    changeDetail: () => {},
    handleDeleted: () => {},
    detail: false
}

const modalAlertDeleteContext = createContext<TypeModalAlertDelete>(initialModalAlertDelete)
export default modalAlertDeleteContext