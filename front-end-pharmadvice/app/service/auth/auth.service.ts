import Cookies from 'js-cookie'
import axios from 'axios'
import { IAuthResponse, IEmailPassword } from '@/app/store/user/user.interface'
import { getContentType } from '@/app/api/api.helper'
import { saveToStorage } from '@/app/service/auth/auth.helper'
import { apiInterceptor } from '@/app/api/api.interceptor'


export const AuthService = {
	async main(type: 'login' | 'register', data: IEmailPassword) {
		const response = await apiInterceptor<IAuthResponse>({
			url: `/auth/${type}`,
			method: 'POST',
			data
		})

		if (response.data.accessToken) {
			saveToStorage(response.data)
		}

		return response.data
	},
	async getNewToken() {
		//Получаем значение refresh-токена из куки
		const refreshToken = Cookies.get('refresh-token')

		const response = await axios.post<string, {
			data: IAuthResponse
		}> (
			process.env.SERVER_URL + '/auth/login/access-token', {refreshToken},
			{headers: getContentType()}
		)

		if (response.data.accessToken) {
			saveToStorage(response.data)
		}

		return response
	}
}