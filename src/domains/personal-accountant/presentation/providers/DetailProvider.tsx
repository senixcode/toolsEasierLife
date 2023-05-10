import React, { FC } from 'react'
import DetailContext from 'domains/personal-accountant/presentation/context/DetailContext'
import useDetailsList from 'domains/personal-accountant/presentation/hooks/services/useDetailsList'
import { TypeDetailContext } from 'domains/personal-accountant/presentation/context/DetailContext'

type PropsDetailProvider = {
    children?: React.ReactNode
}
const DetailProvider: FC<PropsDetailProvider> = ({ children }) => {
    const detailList:TypeDetailContext = useDetailsList()

    return (
        <DetailContext.Provider value={detailList}>
            {children}
        </DetailContext.Provider>
    )
}

export default DetailProvider