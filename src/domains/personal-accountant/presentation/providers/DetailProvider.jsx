import React from 'react'
import DetailContext from '../context/DetailContext'
import useDetailsList from '../hooks/services/useDetailsList'

function DetailProvider({ children }) {
    const detailList = useDetailsList()
    
    return (
        <DetailContext.Provider value={detailList}>
            {children}
        </DetailContext.Provider>
    )
}

export default DetailProvider