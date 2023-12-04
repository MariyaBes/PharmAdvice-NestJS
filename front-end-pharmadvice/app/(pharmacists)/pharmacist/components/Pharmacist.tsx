'use client'

import Navbar from '@/app/component/navbar/Navbar'
import Search from '@/app/(pharmacists)/pharmacist/components/Search'
import CartPharmacist from '@/app/(pharmacists)/pharmacist/components/CartPharmacist'
import Footer from '@/app/component/footer/Footer'
import React, { useState } from 'react'
import { IPharmacist } from '@/app/types/pharmacist.interface'


const Pharmacist =() => {
	const [pharmacists, setPharmacists] = useState<IPharmacist[]>([
		{
			pharmacist_id: 1,
			full_name: 'Елена Сидорова',
			gender: 'Женский',
			qualification: 'Фармацевт',
			email: 'elena.sidorova@example.com',
			password: 'qwerty123',
			contact: '111-222-3333',
			raiting: 143,
			images: "/imgPharmacist/photo.png"
		},
		{
			pharmacist_id: 2,
			full_name: 'Мария Смирнова',
			gender: 'Женский',
			qualification: 'Фармацевт',
			email: 'maria.smirnova@example.com',
			password: 'qwerty123',
			contact: '987-654-3210',
			raiting: 462,
			images: "/imgPharmacist/photo.png"
		},
		{
			pharmacist_id: 3,
			full_name: 'Игорь Сидоров',
			gender: 'Мужской',
			qualification: 'Фармацевт',
			email: 'igor.sidorov@example.com',
			password: 'qwerty123',
			contact: '999-000-2222',
			raiting: 77,
			images: "/imgPharmacist/photo-men1.png"
		},
		{
			pharmacist_id: 4,
			full_name: 'Татьяна Петрова',
			gender: 'Женский',
			qualification: 'Фармацевт',
			email: 'tatyana.petrova@example.com',
			password: 'qwerty123',
			contact: '888-777-6666',
			raiting: 310,
			images: "/imgPharmacist/photo.png"
		},
		{
			pharmacist_id: 5,
			full_name: 'Дмитрий Смирнов',
			gender: 'Мужской',
			qualification: 'Фармацевт',
			email: 'dmitry.smirnov@example.com',
			password: 'qwerty123',
			contact: '666-999-1111',
			raiting: 49,
			images: "/imgPharmacist/photo-men2.png"
		},
		{
			pharmacist_id: 6,
			full_name: 'Ольга Кузнецова',
			gender: 'Женский',
			qualification: 'Фармацевт',
			email: 'olga.kuznetsova@example.com',
			password: 'qwerty123',
			contact: '444-333-2222',
			raiting: 235,
			images: "/imgPharmacist/photo.png"
		},
		{
			pharmacist_id: 7,
			full_name: 'Александр Иванов',
			gender: 'Мужской',
			qualification: 'Фармацевт',
			email: 'alex.ivanov@example.com',
			password: 'qwerty123',
			contact: '777-888-9999',
			raiting: 189,
			images: "/imgPharmacist/photo.png"
		},
		{
			pharmacist_id: 8,
			full_name: 'Петр Петров',
			gender: 'Мужской',
			qualification: 'Фармацевт',
			email: 'petr.petrov@example.com',
			password: 'qwerty123',
			contact: '555-555-5555',
			raiting: 201,
			images: "/imgPharmacist/photo.png"
		},
		{
			pharmacist_id: 9,
			full_name: 'Иван Иванов',
			gender: 'Мужской',
			qualification: 'Фармацевт',
			email: 'ivan.ivanov@example.com',
			password: 'qwerty123',
			contact: '123-456-7890',
			raiting: 434,
			images: "/imgPharmacist/photo.png"
		}
	])


	return (
		<>
			<Navbar/>

			<div className='flex flex-col max-w-full mx-auto xl:px-[365px] md:px-10 sm:px-2 px-4 min-h-full mb-14'>

				<Search />

				{pharmacists.map((pharmacist) => (
					<CartPharmacist key={pharmacist.pharmacist_id} pharmacist={pharmacist}/>
				))
				}

			</div>


			<Footer />
		</>
	)
}

export default Pharmacist