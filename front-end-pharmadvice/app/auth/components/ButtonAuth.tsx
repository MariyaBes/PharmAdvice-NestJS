'use client';

import React, { FC } from 'react'
import { toast } from 'react-hot-toast'

interface IButton {
	type: string
}

const Button: FC<IButton> = ({ type }) => {
	const handleClick = () => {
		toast.success(`Пользователь успешно ${type === 'login' ? 'вошел' : 'создан'}!`);
	};
	return (
		<button
			className='p-4 text-white text-sm font-bold tracking-[3px] rounded-xl mt-2 mb-2 w-[305px] shadow-md bg-red-400 hover:bg-red-500 transition-all'
			onClick={handleClick}
		>
			{type === 'login' ? 'Авторизация' : "Регистрация"}
		</button>
	);
}

export default Button;