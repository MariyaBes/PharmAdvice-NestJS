'use client'

import { combineReducers } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import { userSlice } from '@/app/store/user/user.slice'
import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist'

const persistConfig = {
	key: 'pharm-advice',
	storage
}

const rootReducer = combineReducers({
	user: userSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		})
})

export const persist = persistStore(store)

export type TypeRootState = ReturnType<typeof rootReducer>