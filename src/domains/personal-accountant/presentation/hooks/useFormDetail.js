import { useContext, useState } from "react"
import Detail from "../../infrastructure/models/Details"
import ModalContext from "../../../../core/context/ModalContext"
import useDetailsCreate from "./services/useDetailCreate"

const initialForm = {
    [Detail.id]: "",
    [Detail.name]: "",
    [Detail.detailType]: "0",
    [Detail.amountOfMoney]: "",
    [Detail.description]: "",
}

const useFormDetail = () => {
    const [form, setForm] = useState(initialForm)
    const { closeModal } = useContext(ModalContext)
    
    const createdDetail = useDetailsCreate()

    const handleSubmit = (e) => {
        e.preventDefault()
        createdDetail(form)
        setForm(initialForm)
        closeModal()
        // e.target
        //   .querySelectorAll(".input")
        //   .forEach(function ({ name }) {
        //     console.log(name)
        //   });
    }

    const handleChange = (event, key) => {
        const value = event.target.value
        setForm({ ...form, [key]: value })
    }


    return { form, handleSubmit, handleChange, closeModal }
}

export default useFormDetail