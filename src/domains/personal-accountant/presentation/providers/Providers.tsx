import { FC } from "react"
import ModalRegisterProvider from "@/domains/personal-accountant/presentation/providers/ModalRegisterProvider"
import ModalAlertDeleteProvider from "@/domains/personal-accountant/presentation/providers/ModalAlertDeleteProvider"
import DetailProvider from "./DetailProvider"

type PropsProviders = {
    children?: React.ReactNode
}

const Providers: FC<PropsProviders> = ({ children }) => {
    return (
        <DetailProvider>
            <ModalRegisterProvider>
                <ModalAlertDeleteProvider>
                    {children}
                </ModalAlertDeleteProvider>
            </ModalRegisterProvider>
        </DetailProvider>
    )
}

export default Providers