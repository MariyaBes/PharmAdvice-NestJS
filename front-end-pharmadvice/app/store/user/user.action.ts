import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import { IAuthResponse, IEmailPassword } from '@/app/store/user/user.interface'
import { AuthService } from '@/app/service/auth/auth.service'
import { errorCatch } from '@/app/api/api.helper'
import { removeTokensStorage } from '@/app/service/auth/auth.helper'

// РЕГИСТРАЦИЯ
export const register = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/register',
	async (data, thunkApi) => {
		try {
			const response = await AuthService.main('register', data)

			return response
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)

// АВТОРИЗАЦИЯ
export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/login',
	async (data, thunkApi) => {
		try {
			const response = await AuthService.main('login', data)

			return response
		} catch (error) {
			return thunkApi.rejectWithValue(error)
		}
	}
)

// ВЫХОД
export const logout = createAsyncThunk('auth/logout', async () => {
	removeTokensStorage()
})

// ПРОВЕРКА
export const checkAuth = createAsyncThunk<IAuthResponse>('auth/check-auth', async (_, thunkApi) => {
	try {
		const response = await AuthService.getNewToken()
		return response.data
	} catch (error) {
		if (errorCatch(error) === 'jwt expired') {
			thunkApi.dispatch(logout())
		}

		return thunkApi.rejectWithValue(error)
	}
})