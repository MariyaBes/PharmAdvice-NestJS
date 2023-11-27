import Footer from '@/app/component/footer/Footer'
import React from 'react'
import Navbar from '@/app/component/navbar/Navbar'
import { Metadata } from 'next'

export const metadata: Metadata = ({
	title: 'Имя фармацевта | PharmAdvice',
	description: 'Авторизация/регистрация',
} as const);

const Pharmacist = () => {
	return (
		<>
			<Navbar/>
			Тут сам фармацевт!
			<Footer />
		</>
	)
}

export default Pharmacist;