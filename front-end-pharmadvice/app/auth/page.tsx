import Logo from './components/Logo'
import React from 'react'
import Image from 'next/image'
import AuthForm from '@/app/auth/components/AuthForm'
import { Metadata } from 'next'

export const metadata: Metadata = ({
	title: 'Авторизация | PharmAdvice',
	description: 'Авторизация/регистрация',
} as const);

const AuthPage = () => {
	return (
			<div className='flex flex-col w-full h-full bg-[#E1DCFA] overflow-hidden'>
				<Logo/>

				<Image
					alt='Back'
					className='flex absolute ml-[405px] float-right z-0 object-contain'
					layout='fill'
					src='/images/Background.svg'
				/>

				<AuthForm />
			</div>
	)
}

export default AuthPage;