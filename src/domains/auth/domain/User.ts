
export enum User {
    id = "id",
    name = "name",
    email = "email",
    password = "password"
}

export interface TypeSignIn {
    [User.password]?: string
    [User.email]?: string
    token?:string
}

export interface TypeSignUp extends TypeSignIn {
    [User.name]?: string
}

export interface TypeUser extends TypeSignUp {
    [User.id]?: number
}

export interface TypeResponseAuth {
    user: TypeUser
    token: string
}

export default User
