import Image from 'next/image'
import { FC } from 'react'
import { IMedication } from '@/app/types/medication.interface'

const Medicament: FC<{ medication: IMedication }> = ({ medication }) => {

	return (
		<div className='medicament'>

			{medication.images.map((image, index) => (
				<Image
					key={index}
					src={image}
					alt={`Photo ${index + 1}`}
					width='100'
					height='100'
					className={'bg-contain flex '}
				/>
			))}

			<div className='medicament-content'>
				<div className='medicament-content__title'>
					<h3>
						{medication.name}
					</h3>
				</div>

				<div className='medicament-content__data'>
					<p>
						Годен до {medication.data_storage_}
					</p>
				</div>

				<div className='medicament-content__price'>
					<div className='medicament-content__price-cost'>
						<p>Цена <h3>{medication.price} ₽</h3></p>
					</div>

					<div className='medicament-content__price--button'>
						На карте
					</div>

				</div>
			</div>

		</div>
	)
}

export default Medicament