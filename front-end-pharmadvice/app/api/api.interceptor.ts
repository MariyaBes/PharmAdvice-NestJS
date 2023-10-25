import axios from 'axios'
import { errorCatch, getContentType } from '@/app/api/api.helper'
import { getAccessToken, removeTokensStorage } from '@/app/service/auth/auth.helper'
import { AuthService } from '@/app/service/auth/auth.service'

export const apiInterceptor = axios.create({
	baseURL: process.env.SERVER_URL,
	headers: getContentType()
})

//Этот метод Axios используется для добавления перехватчика запросов
apiInterceptor.interceptors.request.use(config => {
	//Он проверяет наличие access token в заголовках запроса и, если такой токен есть, добавляет его в заголовки с префиксом "Bearer".
	const accessToken = getAccessToken()
	if (config && config.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`
	}

	return config
})


//Этот метод Axios используется для добавления перехватчика ответов
apiInterceptor.interceptors.response.use(config => config, async error => {
	const originalRequest = error.config

	//Если запрос возвращает ошибку с кодом 401 (неавторизованный доступ) или если возникает ошибка с определенными условиями (связанными с JWT-токеном), то этот перехватчик попытается обновить токены с помощью AuthService.getNewToken().
	// Если обновление токенов происходит успешно, он повторно отправляет исходный запрос с обновленными токенами.
	// Если обновление токенов не удается или происходит ошибка с JWT, то они могут быть удалены и выбрасывается исключение.
	if ((error.response.status === 401 || errorCatch(error) === 'jwt expired' || errorCatch(error) === 'jwt must be provided') && error.config && !error.config._isRetry) {
		originalRequest._isRetry = true
		try {
			// получаем новый токены
			await AuthService.getNewToken()
			return apiInterceptor.request(originalRequest)
		} catch (error) {
			if (errorCatch(error) === 'jwt expired')
				// удаляем токен
				removeTokensStorage()
		}

		throw error
	}
})