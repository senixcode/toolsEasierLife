import { useEffect, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import AuthService from '../../infrastructure/services/auth.services'
import { TypeResponseAuth, TypeSignIn, TypeSignUp } from '../../domain/User'
import { useNavigate } from 'react-router-dom'
import Paths from '../const/Paths'
import { googleLogout } from '@react-oauth/google'

export enum LocalStorage {
    TOKEN = 'TOKEN',
    USER = 'USER'
}

const InitialUser: string = localStorage.getItem(LocalStorage.USER) || ""

function useAuth() {
    let navigate = useNavigate()
    const [user, setUser] = useState<string>(InitialUser)
    const [errorMenssage, setErrorMenssage] = useState<string>("")

    const signInMutation = useMutation({
        mutationFn: (body: TypeSignIn) => new AuthService().signIn(body),
        onSuccess: (data) => {
            if (typeof data === "string") {
                setErrorMenssage(data as string)
            } else {
                setErrorMenssage("")
                const { token, user } = data as TypeResponseAuth
                localStorage.setItem(LocalStorage.TOKEN, token)
                if (user?.name) { 
                    localStorage.setItem(LocalStorage.USER, user.name)
                    setUser(user.name)
                }
                navigate(Paths.personal_accountant, { replace: true })
            }
        },
        onError: (error) => {
            setErrorMenssage(error as string)
        }
    })

    const signUpMutation = useMutation({
        mutationFn: (body: TypeSignUp) => new AuthService().signUp(body),
        onSuccess: (data) => {
            if (typeof data === "string") {
                setErrorMenssage(data as string)
            } else {
                setErrorMenssage("")
                const { token, user } = data as TypeResponseAuth
                localStorage.setItem(LocalStorage.TOKEN, token)
                if (user?.name) { 
                    localStorage.setItem(LocalStorage.USER, user.name)
                    setUser(user.name)
                }
                navigate(Paths.personal_accountant)
            }
        },
        onError: (error) => {
            setErrorMenssage(error as string)
        }
    })

    const signOut = () => {
        localStorage.setItem(LocalStorage.TOKEN, "")
        localStorage.setItem(LocalStorage.USER, "")
        setUser(InitialUser)
        googleLogout()
        navigate(Paths.singin)
    }

    const handleSignIn = (body: TypeSignIn) => signInMutation.mutate(body)
    const handleSignUp = (body: TypeSignUp) => signUpMutation.mutate(body)


    return { user, errorMenssage, handleSignIn, handleSignUp, signOut }

}

export default useAuth