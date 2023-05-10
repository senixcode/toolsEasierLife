import { useContext, useEffect, useState } from 'react'
import ModalContext from 'core/context/ModalContext'
import useDetailsCreate from "./services/useDetailCreate"
import useDetailEdit from 'domains/personal-accountant/presentation/hooks/services/useDetailEdit'
import Detail, { TypeDetailBody } from 'domains/personal-accountant/domain/clases/Details'

const initialForm = {
    [Detail.id]: "",
    [Detail.name]: "",
    [Detail.amount]: "0",
    [Detail.detailTypeId]: "0",
    [Detail.amountOfMoney]: "0",
    [Detail.description]: "",
}

const useFormDetail = () => {
    const [form, setForm] = useState(initialForm)
    const { closeModal, modalState } = useContext(ModalContext)
    const createdDetail = useDetailsCreate()
    const editDetail = useDetailEdit()
    const { params: isEdit } = modalState

    const passParamsEdit = (params:TypeDetailBody) => {
        const newForm = {
            [Detail.id]: `${params[Detail.id]}` ?? initialForm[Detail.id],
            [Detail.name]: params[Detail.name] ?? initialForm[Detail.name],
            [Detail.amount]: `${params[Detail.amount]}` ?? initialForm[Detail.amount],
            [Detail.detailTypeId]: `${params[Detail.detailTypeId]}` ?? initialForm[Detail.detailTypeId],
            [Detail.amountOfMoney]: params[Detail.amountOfMoney] ?? initialForm[Detail.amountOfMoney],
            [Detail.description]: params[Detail.description] ?? initialForm[Detail.description],
        }
        setForm(newForm)
    }

    useEffect(() => {
        if (isEdit) passParamsEdit(isEdit as TypeDetailBody)
    }, [modalState])

    const handleSubmit = (e:any) => {
        e.preventDefault()
        isEdit ? editDetail(form) : createdDetail(form)
        setForm(initialForm)
        closeModal()
    }

    const handleChange = (event:any, key:string, isMin: number = 1) => {
        const value = event.target.value
        if (value.length >= isMin) setForm({ ...form, [key]: value })
    }


    return { form, handleSubmit, handleChange, closeModal }
}

export default useFormDetail