import { createContext } from "react"
import { QueryStatus } from "@tanstack/react-query"
import { TypeDetailBody } from 'domains/personal-accountant/domain/clases/Details';

export type TypeDetailContext = {
    status: "loading" | "error" | "success";
    details: [] | TypeDetailBody[];
    setDetails: React.Dispatch<React.SetStateAction<[] | TypeDetailBody[]>>;
    error: unknown;
    isFetching: boolean;
    refresh: () => void | any;
    resetDetails: () => void;
    exportDetails: () => void;
    totalIncome: number
    totalEgress: number
}

const initialDetailContext = {
    status: "loading" as QueryStatus,
    details: [],
    setDetails: () => { },
    error: null,
    isFetching: false,
    refresh: () => { },
    resetDetails: () => { },
    exportDetails: () => { },
    totalIncome: 0,
    totalEgress: 0
}

const DetailContext = createContext<TypeDetailContext>(initialDetailContext)

export default DetailContext