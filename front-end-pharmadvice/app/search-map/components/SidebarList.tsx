import Image from 'next/image'
import Medicament from '@/app/search-map/components/Medicament'


const SidebarList = () => {
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
				<Medicament />
				<Medicament />
				<Medicament />
				<Medicament />
				<Medicament />
				<Medicament />

			</div>

		</div>
	)
}

export default SidebarList