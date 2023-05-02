import { useQuery } from "@tanstack/react-query"
import DetailService from "../../../infrastructure/services/detail/Detail.service"
import { useState } from "react"

function useDetailsList() {
    const { status, data: details, error, isFetching, refetch } = useQuery({
        queryKey: ['detailsList'],
        queryFn: () => new DetailService().list(),
    })

    const refresh = () => setTimeout(function () { refetch() }, 1000)
    
    return { status, details, error, isFetching, refresh }
}

export default useDetailsList