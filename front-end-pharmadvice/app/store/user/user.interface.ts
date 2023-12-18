import { IUser } from '@/app/types/user.interface'

export interface IUserState {
	name?: string
	email: string
	isAdmin: boolean
	avatarPath?: string
}

export interface ITokens {
	accessToken: string
	refreshToken: string
}

export interface IInitialState {
	user: IUserState | null
	isLoading: boolean
}

export interface IEmailPassword {
	name?: string
	email: string
	password: string
}

export interface IAuthResponse extends ITokens {
	user: IUser
}

