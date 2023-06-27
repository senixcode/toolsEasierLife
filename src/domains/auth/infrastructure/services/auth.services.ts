import { AxiosError } from 'axios'
import { TypeResponseAuth, TypeSignIn, TypeSignUp } from '../../domain/User'
import Conection from './config,'

function isMatchString(value: string, match: string) {
    const regex = new RegExp(match, 'i');
    return regex.test(value)
}

class AuthService extends Conection {
    #path
    constructor() {
        super()
        this.#path = 'auth'
    }

    async signIn(body: TypeSignIn) {
        try {
            const result = await this.instance.post(`/${this.#path}`, body)
            return result.data as TypeResponseAuth
        } catch (e) {
            const error = e as any
            const msgError = error.response.data?.msg
            // if (msgError)
            //     return msgError
            return msgError
        }
    }

    async signUp(body: TypeSignUp) {
        try {
            const result = await this.instance.post(`/${this.#path}/register`, body)
            return result.data as TypeResponseAuth
        } catch (e) {
            const error = e as any
            const msgError = error.response.data?.msg
            // const match = "that email is already registered"
            // if (msgError && isMatchString(msgError, match))
            //     return "El correo ya esta registrado"
            return msgError

        }
    }
}

export default AuthService