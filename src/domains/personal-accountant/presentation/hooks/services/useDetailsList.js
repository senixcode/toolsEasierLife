import { useQuery } from "@tanstack/react-query"
import DetailService from "../../../infrastructure/services/detail/Detail.service"

function useDetailsList() {
    const { status, data: details, error, refetch } = useQuery({
        queryKey: ['detailsList'],
        queryFn: () => new DetailService().list(),
        refetchInterval: 1000,
    })

    return { status, details, error, refetch }
}

export default useDetailsList