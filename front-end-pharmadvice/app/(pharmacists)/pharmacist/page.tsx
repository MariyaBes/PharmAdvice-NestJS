import Footer from '@/app/component/footer/Footer'
import React, { FC } from 'react'
import Navbar from '@/app/component/navbar/Navbar'
import { Metadata } from 'next'
import Search from '@/app/(pharmacists)/pharmacist/components/Search'
import CartPharmacist from '@/app/(pharmacists)/pharmacist/components/CartPharmacist'
import { IPharmacist } from '@/app/types/pharmacist.interface'

export const metadata: Metadata = ({
	title: 'Фармацевты | PharmAdvice',
	description: 'Список фармацевтов',
} as const);

interface IPharmacistProps extends IPharmacist{
	full_name: string,
	email: string,
	pharmacist_id: number,
	qualification?: string,
	contact?: string,
	raiting?: number
}

const Pharmacist: FC<IPharmacistProps> = (
	{
		full_name,
		email,
		pharmacist_id,
		qualification,
		contact,
		password,
		raiting
	}
) => {
	console.log("Props in CartPharmacist:", full_name, email, pharmacist_id, qualification, contact, raiting);
	return (
		<>
			<Navbar/>

			<div className='flex flex-col max-w-full mx-auto xl:px-[365px] md:px-10 sm:px-2 px-4 min-h-full mb-14'>

				<Search />

				<CartPharmacist full_name={full_name} email={email} pharmacist_id={pharmacist_id} qualification={qualification} contact={contact} raiting={raiting} password={password}/>
				<CartPharmacist full_name={full_name} email={email} pharmacist_id={pharmacist_id} qualification={qualification} contact={contact} raiting={raiting} password={password}/>

			</div>


			<Footer />
		</>
	)
}

export default Pharmacist;