import { apiInterceptor } from '@/app/api/api.interceptor'
import { IUser } from '@/app/types/user.interface'

const USERS = 'users'

type typeData = {
	email: string,
	password? : string,
	name? : string,
	avatarPath? : string,
	phone_num? : string
}

export const userService = {
	async getProfile() {
		return apiInterceptor<IUser[]>({
			url: `${USERS}/profile`,
			method: 'GET'
		})
	},

	async getById(id: string | number) {
		return apiInterceptor<IUser>({
			url: `${USERS}/${id}`,
			method: 'GET'
		})
	},

	async updateProfile(data: typeData) {
		return apiInterceptor<IUser>({
			url: `${USERS}/profile`,
			method: 'PUT',
			data
		})
	},


}