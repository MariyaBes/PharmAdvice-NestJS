
import Image from 'next/image'
import Medicament from '@/app/search-map/components/Medicament'
import { IMedication } from '@/app/types/medication.interface'
import { FC } from 'react'

const medicationData: IMedication[] = [
	{
		medication_id_: 1,
		name: 'Азитромицин таблетки п/о плен. 500мг 3шт',
		data_storage_: '2026-06-30',
		price: 149,
		images: ['/upload/azit-1.jpg'],
	},
	{
		medication_id_: 2,
		name: 'Эссенциале Форте Н капсулы 300мг 90шт',
		data_storage_: '2026-07-31',
		price: 1677,
		images: ['/upload/ess-1.jpg'],
	},
	{
		medication_id_: 3,
		name: 'Коллаген Herbs/Хербc капсулы 0,51г 400мг 60шт',
		data_storage_: '14.07.2025',
		price: 963,
		images: ['/upload/herb.jpg'],
	},
	{
		medication_id_: 4,
		name: 'Весаноид капсулы 10мг 100шт',
		data_storage_: '2026-01-15',
		price: 1222,
		images: ['/upload/vesanoid.jpg'],
	},
	{
		medication_id_: 5,
		name: 'Фосфалюгель гель для приема внутрь пак. 16г 20шт',
		data_storage_: '31.08.2026',
		price: 559,
		images: ['/upload/fos-1.jpg'],
	},
	{
		medication_id_: 6,
		name: 'Магне В6 (Магний + витамин В6) таблетки п/о 180шт',
		data_storage_: '31.07.2025',
		price: 1303,
		images: ['/upload/img.png'],
	},
	{
		medication_id_: 7,
		name: 'Нурофен таблетки п/о плен. 200мг 20шт',
		data_storage_: '01.08.2026',
		price: 199,
		images: ['/upload/nuro-1.jpg'],
	},
	{
		medication_id_: 8,
		name: 'Но-шпа таблетки 40мг 64шт',
		data_storage_: '31.07.2028',
		price: 276,
		images: ['/upload/no-shpa-1.jpg'],
	}
];

const SidebarList: FC = () => {
	console.log(medicationData)

	return (
		<div className='sidebar-left'>
			<div className='sidebar-left-conteiner-search'>

				<div className='sidebar-left-conteiner-search__search'>
					<div className='sidebar-left-conteiner-search__search-field'>

						<div className='sidebar-left-conteiner-search__search-field--img'>
							<Image
								src='/images/searchnormal1.svg'
								alt='Поиск'
								width={'16'}
								height={'16'}
							/>
						</div>

						<input
							type='text'
							placeholder='Поиск лекарств...'
							className='sidebar-left-conteiner-search__search-field--input'
						/>

						<button className='sidebar-left-conteiner-search__search-field--button'>Поиск</button>
					</div>
				</div>

				<div className='sidebar-left-conteiner-search__filter'>
					<div className='sidebar-left-conteiner-search__filter-star'>
						<Image
							className='sidebar-left-conteiner-search__filter-star--icon'
							src='/images/arrangevertical.svg'
							width={'12'}
							height={'12'}
							alt='Сортировка'
						/>
						<span className='sidebar-left-conteiner-search__filter-star--text'>
						По цене
					</span>

					</div>
				</div>

			</div>

			<div className={'overflow-y-auto flex gap-4 flex-col'}>
				{medicationData.map((medication) => (
					<Medicament key={medication.medication_id_} medication={medication} />
				))}

			</div>

		</div>
	)
}

export default SidebarList