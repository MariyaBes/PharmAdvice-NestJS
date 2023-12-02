import Image from 'next/image'


const Medicament = () => {
	return (
		<div className='medicament'>

			<Image
				src='/upload/azit-1.jpg'
				alt='Photo'
				width='100'
				height='100'
				className={'bg-contain flex '}
			/>

			<div className='medicament-content'>
				<div className='medicament-content__title'>
					<h3>
						Азитромицин таблетки п/о плен. 500мг 3шт
					</h3>
				</div>

				<div className='medicament-content__data'>
					<p>
						Годен до 30.06.2026
					</p>
				</div>

				<div className='medicament-content__price'>
					<div className='medicament-content__price-cost'>
						<p>Цена <h3> 149 ₽</h3></p>
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