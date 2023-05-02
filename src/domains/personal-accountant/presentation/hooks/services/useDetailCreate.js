import { useMutation } from "@tanstack/react-query"
import DetailService from "../../../infrastructure/services/detail/Detail.service"
import { useContext } from "react"
import DetailContext from "../../context/DetailContext"

const useDetailsCreate = () => {
  const mutation = useMutation({
    mutationFn: (body) => new DetailService().create(body)
  })

  const { refresh } = useContext(DetailContext)

  const createdDetail = (body) => {
    mutation.mutate(body)
    refresh()
  }

  return createdDetail
}
export default useDetailsCreate