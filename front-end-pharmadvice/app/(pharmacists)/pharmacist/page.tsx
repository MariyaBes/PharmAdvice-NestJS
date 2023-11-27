import Footer from '@/app/component/footer/Footer'
import React from 'react'
import Navbar from '@/app/component/navbar/Navbar'
import { Metadata } from 'next'
import Search from '@/app/(pharmacists)/pharmacist/components/Search'
import CartPharmacist from '@/app/(pharmacists)/pharmacist/components/CartPharmacist'

export const metadata: Metadata = ({
	title: 'Фармацевты | PharmAdvice',
	description: 'Авторизация/регистрация',
} as const);

const Pharmacist = () => {
	return (
		<>
			<Navbar/>

			<div className='flex flex-col max-w-full mx-auto xl:px-[365px] md:px-10 sm:px-2 px-4 min-h-full mb-14'>

				<Search />

				<CartPharmacist />
				<CartPharmacist />
				<CartPharmacist />
				<CartPharmacist />

			</div>


			<Footer />
		</>
	)
}

export default Pharmacist;