import Image from 'next/image'

const Search = ({
									valueSearch,
									sortPriceDown,
									sortPriceUp,
									searchQueryInput,
									searchQuery
								}) => {

	console.log(valueSearch, searchQueryInput, searchQuery)
	return (
		<div className='conteiner-search'>

			<div className='conteiner-search__title'>
				<p className='conteiner-search__title--text'>Найдите лучших фармацевтов своего города</p>
			</div>

			<div className='conteiner-search__search-field'>
				<div className='conteiner-search__search-field--icon'>
					<Image
						src='/images/searchnormal1.svg'
						alt={'Search'}
						width={'20'}
						height={'20'}

					/>
				</div>
				<input
					className={'conteiner-search__search-field--input'}
					placeholder={'Поиск фармацевта... '}
					onChange={searchQueryInput}
					value={searchQuery}
				/>

				<button className='conteiner-search__search-field--button' onClick={valueSearch}>
					Поиск
				</button>

			</div>

			<div className='conteiner-search__filters'>
				<div className='conteiner-search__filters-star' onClick={sortPriceDown}>
					<Image
						className='conteiner-search__filters-star--icon'
						src='/images/arrangevertical.svg'
						width={'16'}
						height={'16'}
						alt='Сортировка'
					/>
					<span className='conteiner-search__filters-star--text'>
						По рейтингу
					</span>

				</div>

				<div className='conteiner-search__filters-star' onClick={sortPriceUp}>
					<Image
						className='conteiner-search__filters-star--icon'
						src='/images/candle2.svg'
						width={'16'}
						height={'16'}
						alt='По отзывам'
					/>
					<span className='conteiner-search__filters-star--text'>
						По отзывам
					</span>
				</div>
			</div>

		</div>
	)
}

export default Search