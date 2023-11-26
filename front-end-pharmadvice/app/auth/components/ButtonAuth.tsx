'use client';

import React, { FC } from 'react'

interface IButton {
	type: string
}

const Button: FC<IButton> = ({ type }) => {
	return (
		<button
			className='p-4 text-white text-sm font-bold tracking-[3px] rounded-xl mt-2 mb-2 w-[305px] shadow-md bg-red-400 hover:bg-red-500 transition-all'
			onClick={() => console.log(`Пользователь создан или успешно вошел!`)}
		>
			{type === 'login' ? 'Авторизация' : "Регистрация"}
		</button>
	);
}

export default Button;