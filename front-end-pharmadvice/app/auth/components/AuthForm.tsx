import Checkbox from '../../component/Checkbox'
import ButtonAuth from './ButtonAuth'
import React from 'react'
import InputAuth from '@/app/auth/components/InputAuth'

const AuthForm = () => {
	return (
		<div className='flex flex-col justify-center min-h-max w-[520px] bg-white rounded-3xl shadow-md items-center m-auto content-evenly z-10'>

			<div className='mb-6'>
				<h1 className='flex text-xl font-bold font-["Lato"] tracking-wide mb-1 p-1 pt-12 w-[315px] ml-1'>
					Авторизация в
					<p className="border-b-2 border-blue-light uppercase ml-[6px] font-semibold font-['Prompt']">PharmAdvice</p>
				</h1>
				<p className="mt-2 ml-2 font-light text-[13px] font-['Lato'] w-[305px]">Сервис для онлайн-консультаций с фармацевтом</p>
			</div>

			<form className='grid gap-3'>
				<InputAuth
					id="email"
					type="Почта"
					placeholder ='Email'
				/>
				<InputAuth
					id="password"
					type="password"
					placeholder ='Пароль'
				/>

				<Checkbox>
					Запомнить меня
				</Checkbox>

				<ButtonAuth/>
			</form>

			<div className="mt-4">
				<span className='flex mb-3 h-[1px] w-[303px] bg-gray-400'></span>
			</div>

			<div className="flex gap-2 justify-center text-sm mt-2 mb-8 px-2 text-[#9F9F9F] font-['Lato']">
				<div>
					Нет учетной записи?
				</div>
				<div className="underline cursor-pointer">
					Создать аккаунт
				</div>
			</div>

		</div>
	)
}

export default AuthForm;