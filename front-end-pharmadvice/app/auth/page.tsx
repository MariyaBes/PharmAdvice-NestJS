import Logo from './components/Logo'
import React from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import AuthForm from '@/app/auth/components/AuthForm'
import AuthLayout from '@/app/auth/layout'

export const metadata: Metadata = ({
	title: 'PharmAdvice - регистрация',
	description: 'Авторизация/регистрация',
} as const);

const AuthPage: React.FC = () => {
	return (
		<AuthLayout>
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
		</AuthLayout>
	)
}

export default AuthPage;