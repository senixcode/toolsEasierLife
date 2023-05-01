import { useMutation } from "@tanstack/react-query"
import DetailService from "../../../infrastructure/services/detail/Detail.service"

const useDetailsCreate = () => {
    const mutation = useMutation({
        mutationFn: (body) => new DetailService().create(body)
      })

    return mutation
}
export default useDetailsCreate