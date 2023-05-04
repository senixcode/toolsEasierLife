import { useMutation } from "@tanstack/react-query"
import DetailService from "../../../infrastructure/services/detail/Detail.service"
import { useContext } from "react"
import DetailContext from "../../context/DetailContext"

const useDetailEdit = () => {
  const mutation = useMutation({
    mutationFn: (body) => new DetailService().edited(body)
  })

  const { refresh } = useContext(DetailContext)

  const editDetail = (body) => {
    mutation.mutate(body)
    refresh()
  }

  return editDetail
}
export default useDetailEdit