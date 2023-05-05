import { useContext, useEffect, useState } from "react"
import ModalContext from "../../../../core/context/ModalContext"
import useDetailsCreate from "./services/useDetailCreate"
import useDetailEdit from "./services/useDetailEdit"
import Detail from "../../domain/clases/Details"

const initialForm = {
    [Detail.id]: "",
    [Detail.name]: "",
    [Detail.amount]: "0",
    [Detail.detailType]: "0",
    [Detail.amountOfMoney]: "0",
    [Detail.description]: "",
}

const passParamsEdit = (params, setForm) => {
    const newForm = {
        [Detail.id]: `${params[Detail.id]}` ?? initialForm[Detail.id],
        [Detail.name]: params[Detail.name] ?? initialForm[Detail.name],
        [Detail.amount]: `${params[Detail.amount]}` ?? initialForm[Detail.amount],
        [Detail.detailType]: `${params[Detail.detailType]}` ?? initialForm[Detail.detailType],
        [Detail.amountOfMoney]: params[Detail.amountOfMoney] ?? initialForm[Detail.amountOfMoney],
        [Detail.description]: params[Detail.description] ?? initialForm[Detail.description],
    }
    setForm(newForm)
}

const useFormDetail = () => {
    const [form, setForm] = useState(initialForm)
    const { closeModal, modalState } = useContext(ModalContext)
    const createdDetail = useDetailsCreate()
    const editDetail = useDetailEdit()
    const { params: isEdit } = modalState

    useEffect(() => {
        if (isEdit) passParamsEdit(isEdit, setForm)
    }, [modalState])

    const handleSubmit = (e) => {
        e.preventDefault()
        isEdit ? editDetail(form) : createdDetail(form)
        setForm(initialForm)
        closeModal()
    }

    const handleChange = (event, key, isMin = 1) => {
        const value = event.target.value
        if (value.length >= isMin) setForm({ ...form, [key]: value })
    }


    return { form, handleSubmit, handleChange, closeModal }
}

export default useFormDetail