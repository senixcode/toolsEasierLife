import { useMutation } from "@tanstack/react-query"
import DetailService from "../../../infrastructure/services/detail/detail.services"
import { useContext } from "react"
import DetailContext from "../../context/DetailContext"
import { TypeDetailBody } from "@/domains/personal-accountant/domain/clases/Details"

const useDetailsCreate = () => {
  const { refresh } = useContext(DetailContext)
  const mutation = useMutation({
    mutationFn: (body: TypeDetailBody) => new DetailService().create(body),
    onSuccess: () => {
      refresh()
    },
  })

  const createdDetail = (body: TypeDetailBody) => mutation.mutate(body)

  return createdDetail
}
export default useDetailsCreate