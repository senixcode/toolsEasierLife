import { TypeResponseAuth, TypeSignIn, TypeSignUp } from '../../domain/User'
import Conection from './config,'

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
        } catch (error) {
            if (typeof error === "string")
                console.error("AuthService().signIn()", error.toUpperCase())
            else if (error instanceof Error)
                console.error("AuthService().signIn()", error.message)
        }
    }

    async signUp(body: TypeSignUp) {
        try {
            const result = await this.instance.post(`/${this.#path}/register`, body)
            return result.data as TypeResponseAuth
        } catch (error) {
            if (typeof error === "string")
                console.error("AuthService().signUp()", error.toUpperCase())
            else if (error instanceof Error)
                console.error("AuthService().signUp()", error.message)

        }
    }
}

export default AuthService