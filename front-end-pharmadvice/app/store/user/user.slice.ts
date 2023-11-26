'use client'
import { IInitialState, IUserState } from '@/app/store/user/user.interface'
import { createSlice } from '@reduxjs/toolkit'
import { checkAuth, login, logout, register } from '@/app/store/user/user.action'
import { getLocalStorage } from '@/app/utils/localStorage'

const initialState: IInitialState = {
	// Инициализация состояния, пытаемся получить пользователя из локального хранилища
	user: getLocalStorage('user'),
	isLoading: false // Флаг загрузки данных
}

export const userSlice = createSlice({
	name: 'user', // Имя среза Redux
	initialState, // Начальное состояние
	reducers: {}, // Редюсеры для обработки событий, но в данном случае отсутствуют
	extraReducers: builder => {
		builder
			.addCase(register.pending, state => {
				state.isLoading = true; // Установка флага загрузки при начале регистрации.
			})
			.addCase(register.fulfilled, (state, { payload }) => {
				state.isLoading = false; // Сброс флага загрузки при успешной регистрации.
				state.user = payload.user as IUserState; // Обновление информации о пользователе.
			})
			.addCase(register.rejected, state => {
				state.isLoading = false; // Сброс флага загрузки при неудачной регистрации.
				state.user = null; // Сброс информации о пользователе.
			})
			.addCase(login.pending, state => {
				state.isLoading = true; // Аналогичные действия для входа.
			})
			.addCase(login.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.user = payload.user as IUserState;
			})
			.addCase(login.rejected, state => {
				state.isLoading = false;
				state.user = null;
			})
			.addCase(logout.fulfilled, state => {
				state.isLoading = false;
				state.user = null; // Очистка информации о пользователе при выходе.
			})
			.addCase(checkAuth.fulfilled, (state, { payload }) => {
				state.user = payload.user as IUserState; // Обновление информации о пользователе при успешной проверке аутентификации.
			})
	}
})