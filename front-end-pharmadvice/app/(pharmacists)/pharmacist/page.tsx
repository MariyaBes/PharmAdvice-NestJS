
import React, { FC} from 'react'
import { Metadata } from 'next'
import Pharmacist from '@/app/(pharmacists)/pharmacist/components/Pharmacist'

export const metadata: Metadata = ({
	title: 'Фармацевты | PharmAdvice',
	description: 'Список фармацевтов',
} as const);


const DynamicPharmacist: FC = () => {
	return (
		<Pharmacist />
	)
}

export default DynamicPharmacist;