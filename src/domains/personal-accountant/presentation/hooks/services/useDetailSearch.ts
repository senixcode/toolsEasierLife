import { useMutation } from "@tanstack/react-query"
import DetailService from "../../../infrastructure/services/detail/detail.services"
import { useContext } from "react"
import DetailContext from "../../context/DetailContext"

const useDetailSearch = () => {
  const { setDetails, resetDetails } = useContext(DetailContext)
  const mutation = useMutation({
    mutationFn: (name:string) => new DetailService().search(name),
    onSuccess: (data) => {
      if(Array.isArray(data)) setDetails(data)
    },
    onError: () => {
      resetDetails()
    }
  })

  const searchDetail = (e:any) => {
    const value = e.target.value
    if (value?.length >= 3 && e.code === "Enter") {
      return mutation.mutate(value)
    }
    return resetDetails()
  }

  const onChange = (e:any) => {
    const value = e.target.value
    if(value === "") resetDetails()
    
  }

  return { onChange, searchDetail }
}
export default useDetailSearch