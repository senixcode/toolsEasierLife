import { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import DetailService from "../../../infrastructure/services/detail/Detail.service"

function useDetailsList() {
    const [details, setDetails] = useState([])
    const { status, data, error, isFetching, refetch } = useQuery({
        queryKey: ['detailsList'],
        queryFn: () => new DetailService().list(),
    })
    const resetDetails = () => setDetails(data)

    useEffect(() => {
        resetDetails()
    }, [data])

    const refresh = () => setTimeout(function () { refetch() }, 1000)

    return { status, details, setDetails, error, isFetching, refresh, resetDetails }
}

export default useDetailsList