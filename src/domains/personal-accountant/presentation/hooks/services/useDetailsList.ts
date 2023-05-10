import { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import DetailService from "domains/personal-accountant/infrastructure/services/detail/detail.services"
import {TypeDetailBody } from "@/domains/personal-accountant/domain/clases/Details"
import { TypeDetailContext } from "../../context/DetailContext"

function useDetailsList():TypeDetailContext  {
    
    const [details, setDetails] = useState<TypeDetailBody[] | []>([])
    let { status, data, error, isFetching, refetch } = useQuery({
        queryKey: ['detailsList'],
        queryFn: () => new DetailService().list(),
    })
    const resetDetails = () => {
        if (Array.isArray(data)) setDetails(data)
    }

    useEffect(() => {
        resetDetails()
    }, [data])

    let refresh = (): void | any => refetch()
    return { status, details, setDetails, error, isFetching, refresh, resetDetails }
}

export default useDetailsList