import { useMutation } from "@tanstack/react-query"
import DetailService from "../../../infrastructure/services/detail/Detail.service"
import { useContext } from "react"
import DetailContext from "../../context/DetailContext"

const useDetailDelete = () => {
  const mutation = useMutation({
    mutationFn: (id) => new DetailService().deleted(id)
  })
  const { refresh } = useContext(DetailContext)

  const deletedDetail = (id) => {
    mutation.mutate(id)
    refresh()
  }

  return deletedDetail
}
export default useDetailDelete