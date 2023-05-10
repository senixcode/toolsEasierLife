import { useMutation } from "@tanstack/react-query"
import DetailService from "../../../infrastructure/services/detail/detail.services"
import { useContext } from "react"
import DetailContext from "../../context/DetailContext"

const useDetailDelete = () => {
  const { refresh } = useContext(DetailContext)
  const mutation = useMutation({
    mutationFn: (id: string) => new DetailService().deleted(id),
    onSuccess() {
      refresh()
    },
  })

  const deletedDetail = (id: string) => mutation.mutate(id)

  return deletedDetail
}
export default useDetailDelete