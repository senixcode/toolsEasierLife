import { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import DetailService from "domains/personal-accountant/infrastructure/services/detail/detail.services"
import Detail, { TypeDetailBody } from "@/domains/personal-accountant/domain/clases/Details"
import { TypeDetailContext } from "../../context/DetailContext"
import { OptionsTypeDetail } from "../../utils/getTypeDetail"
import getTotalByDetailType from "@/domains/personal-accountant/infrastructure/adapters/getTotalByDetailType"

function useDetailsList(): TypeDetailContext {

    const [details, setDetails] = useState<TypeDetailBody[] | []>([])
    const [totalIncome, setTotalIncome] = useState(0)
    const [totalEgress, setTotalEgress] = useState(0)
    let { status, data, error, isFetching, refetch } = useQuery({
        queryKey: ['detailsList'],
        queryFn: () => new DetailService().list(),
    })
    const resetDetails = () => {
        if (Array.isArray(data)) setDetails(data)
    }
    const getTotalIncome = () => getTotalByDetailType(details, OptionsTypeDetail.Income)
    const getTotalEgress = () => getTotalByDetailType(details, OptionsTypeDetail.Egress)

    const exportDetails = () => {
        const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
            JSON.stringify(details)
        )}`;
        const link = document.createElement("a");
        link.href = jsonString;
        link.download = `export-${Date.now()}.json`;

        link.click();
    };

    useEffect(() => {
        resetDetails()
    }, [data])

    useEffect(() => {
        console.log("useEffect details");

        setTotalIncome(getTotalIncome)
        setTotalEgress(getTotalEgress)
    }, [details])

    let refresh = (): void | any => refetch()
    return { status, details, setDetails, error, isFetching, refresh, resetDetails, exportDetails, totalIncome, totalEgress }
}

export default useDetailsList