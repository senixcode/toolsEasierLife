import { useQuery } from "@tanstack/react-query"
import DetailService from "../../../infrastructure/services/detail/Detail.service"

function useDetailsList() {
    const { status, data: details, error } = useQuery({
        queryKey: ['detailservice'],
        queryFn: () => new DetailService().list(),
    })

    return { status, details, error }
}

export default useDetailsList