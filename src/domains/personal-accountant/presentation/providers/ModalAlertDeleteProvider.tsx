import React, { FC, useState, useEffect } from 'react'
import ModalAlertDeleteContext from '@/domains/personal-accountant/presentation/context/ModalAlertDeleteContext'
import Detail, { TypeDetailBody } from '../../domain/clases/Details'
import useDetailDelete from '../hooks/services/useDetailDelete'
type Props = {
    children?: React.ReactNode
}

const ModalAlertDeleteProvider: FC<Props> = ({ children }) => {
    const [isShow, setIsShow] = useState<boolean>(false)
    const [detail, setDetail] = useState<boolean | TypeDetailBody>(false)
    const deletedDetail = useDetailDelete()
    const handleChangeIsShow = () => {
        if(isShow) setDetail(false)
        setIsShow(!isShow)
    } 
    const changeDetail = (data?: TypeDetailBody) => {
        data && setDetail(data)
    } 
    const handleDeleted = () => {
        handleChangeIsShow()
        if (detail) 
            deletedDetail((detail as TypeDetailBody)[Detail.id] as string)
    }

    return (
        <ModalAlertDeleteContext.Provider value={{ isShow, handleChangeIsShow, changeDetail, detail, handleDeleted }}>
            {children}
        </ModalAlertDeleteContext.Provider>
    )
}

export default ModalAlertDeleteProvider