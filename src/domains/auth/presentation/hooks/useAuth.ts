import { useEffect, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import AuthService from '../../infrastructure/services/auth.services'
import { TypeResponseAuth, TypeSignIn, TypeSignUp, TypeUser } from '../../domain/User'
import { useNavigate } from 'react-router-dom'
import Paths from '../const/Paths'

export enum LocalStorage {
    TOKEN = 'TOKEN',
    USER = 'USER'
}

const InitialToken: string = localStorage.getItem(LocalStorage.TOKEN) || ""
const InitialUser: string = localStorage.getItem(LocalStorage.USER) || ""

function useAuth() {
    let navigate = useNavigate()

    const [token, setToken] = useState<string>(InitialToken)
    const [user, setUser] = useState<string>(InitialUser)

    const signInMutation = useMutation({
        mutationFn: (body: TypeSignIn) => new AuthService().signIn(body),
        onSuccess: (data) => {
            const result = data as TypeResponseAuth
            setToken(result.token)
            setUser(result.user.name)
        },
    })

    const signUpMutation = useMutation({
        mutationFn: (body: TypeSignUp) => new AuthService().signUp(body),
        onSuccess: (data) => {
            const result = data as TypeResponseAuth
            setToken(result.token)
            setUser(result.user.name)
        },
    })

    useEffect(() => {
        if (token && user) {
            localStorage.setItem(LocalStorage.TOKEN, token)
            localStorage.setItem(LocalStorage.USER, user)
            navigate(Paths.personal_accountant)
        }

        return () => {
            setToken(InitialToken)
            setUser(InitialUser)
        }
    }, [token])

    const handleSignIn = (body: TypeSignIn) => signInMutation.mutate(body)
    const handleSignUp = (body: TypeSignUp) => signUpMutation.mutate(body)


    return { user, handleSignIn, handleSignUp }

}

export default useAuth