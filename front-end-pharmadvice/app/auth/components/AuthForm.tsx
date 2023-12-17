'use client'

import Checkbox from '../../component/Checkbox'
import ButtonAuth from './ButtonAuth'
import React, { useState } from 'react'
import InputAuth from '@/app/auth/components/input/InputAuth'
import { useAuth } from '@/app/hooks/useAuth'
import { useActions } from '@/app/hooks/useActions'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IEmailPassword } from '@/app/store/user/user.interface'
import { validEmail } from '@/app/auth/valid-email'
import Loader from '@/app/component/Loader'
import { useAuthRedirect } from '@/app/auth/useAuthRedirect'
import { toast, Toaster } from 'react-hot-toast'

const AuthForm = () => {
	useAuthRedirect()
	const {isLoading} = useAuth()
	const [rememberMe, setRememberMe] = useState(false)

	const {login, register} = useActions()

	const [type, setType] = useState<'login' | 'register'>('login')

	const {
		register: formRegister,
		handleSubmit,
		formState: { errors },
		reset, } = useForm<IEmailPassword>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IEmailPassword> = async (data, event) => {
		try {
			if (type === 'login') {
				login(data)
			} else {
				register(data)

			}

			if (rememberMe) {
				localStorage.setItem('rememberMe', 'true');
			} else {
				localStorage.removeItem('rememberMe');
			}

			reset();
		} catch (error) {
			toast.error('Ошибка регистрации. Пользователь уже существует.');
		}

	};

	const handleRememberMeChange = (isChecked: boolean) => {
		setRememberMe(isChecked)
	}

	return (
		<div className='flex flex-col justify-center min-h-max w-[520px] bg-white rounded-3xl shadow-md items-center m-auto content-evenly z-10'>
			<Toaster />

			<div className='mb-6'>
				<h1 className='flex text-xl font-bold font-["Lato"] tracking-wide mb-1 p-1 pt-12 w-[315px] ml-1'>
					{type === 'login' ? 'Авторизация' : 'Регистрация'} в
					<p className="border-b-2 border-[#BEB0F2] uppercase ml-[6px] font-semibold font-['Prompt']">PharmAdvice</p>
				</h1>
				<p className="mt-2 ml-2 font-light text-[13px] font-['Lato'] w-[305px]">Сервис для онлайн-консультаций с фармацевтом</p>
			</div>

			<form className='grid gap-3' onSubmit={handleSubmit(onSubmit)}>

				{ isLoading ? (
					<Loader/>
				) : (
					<>
						<InputAuth
							id="email"
							type="email"
							placeholder ='Введите email...'
							{...formRegister('email', {
								required: 'Обязательное поле: почта',
								pattern: {
									value: validEmail,
									message: 'Пожалуйста, введите действительный адрес электронной почты!'
								}
							})}
							error={errors.email?.message}
						/>

						<InputAuth
							id="password"
							type="password"
							placeholder ='Введите пароль...'
							{...formRegister('password', {
								required: 'Обязательное поле: пароль',
								minLength: {
									value: 8,
									message: 'Минимальная длина пароля должна быть 8 символов'
								}
							})}
							error={errors.password?.message}
						/>

						<Checkbox
							onChange={handleRememberMeChange}
						>
							Запомнить меня
						</Checkbox>

						<ButtonAuth type={type}/>

						<div className="mt-4">
							<span className='flex mb-3 h-[1px] w-[303px] bg-gray-400'></span>
						</div>

						<div className="flex gap-2 justify-center text-sm mt-2 mb-8 px-2 text-[#9F9F9F] font-['Lato']">
							<div>
								{type === 'login' ? 'Нет учетной записи?' : 'Уже есть аккаутн?'}
							</div>
							<a
								className="text-[#8640F9] cursor-pointer border border-transparent hover:border-b-[#8640F9] transform-all"
								onClick={() => setType(type === 'login' ? 'register' : 'login')}
							>
								{type === 'login' ? 'Создать аккаунт' : 'Войти в аккаутн'}
							</a>
						</div>

					</> )}
			</form>

		</div>
	)
}

export default AuthForm;