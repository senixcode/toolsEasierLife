import { FC } from 'react'
import AuthContext from '../contexts/AuthContext'
import useAuth from '../hooks/useAuth'

type Props = {
    children: React.ReactNode
}


const AuthProvider: FC<Props> = ({ children }) => {
    const value = useAuth()

    return (
    <AuthContext.Provider value={value}>
            {children}
    </AuthContext.Provider>
    )
}

export default AuthProvider