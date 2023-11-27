import Image from 'next/image'

const CartPharmacist = () => {
	return (
		<div className='cart-container'>

			<div className='cart-container-photo'>

			</div>

			<div className='cart-container-information'>
				<div className='cart-container-information__name'>
					<span className='cart-container-information__name--text'>Лебедева Наталья Андреевна</span>
				</div>

				<div className='cart-container-information__info'>
					<span className='cart-container-information__info--text'><span className='cart-container-information__info--text-purple'>Стаж:</span> 7 лет</span>
					<span className='cart-container-information__info--text'><span className='cart-container-information__info--text-purple'>Email:</span> natali.l@gmail.com</span>
					<span className='cart-container-information__info--text'><span className='cart-container-information__info--text-purple'>Адрес:</span> ул.Кирова. 63</span>
				</div>

				<div className='cart-container-information__location'>
					<button className='cart-container-information__location--button'>
						<svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g id="map-pin" clip-path="url(#clip0_100_255)">
								<path id="Vector" d="M17.5 8.83331C17.5 14.6666 10 19.6666 10 19.6666C10 19.6666 2.5 14.6666 2.5 8.83331C2.5 6.84419 3.29018 4.93654 4.6967 3.53001C6.10322 2.12349 8.01088 1.33331 10 1.33331C11.9891 1.33331 13.8968 2.12349 15.3033 3.53001C16.7098 4.93654 17.5 6.84419 17.5 8.83331Z" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
								<path id="Vector_2" d="M10 11.3333C11.3807 11.3333 12.5 10.214 12.5 8.83331C12.5 7.4526 11.3807 6.33331 10 6.33331C8.61929 6.33331 7.5 7.4526 7.5 8.83331C7.5 10.214 8.61929 11.3333 10 11.3333Z"  stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
							</g>
							<defs>
								<clipPath id="clip0_100_255">
									<rect width="20" height="20" fill="white" transform="translate(0 0.5)"/>
								</clipPath>
							</defs>
						</svg>
						Симферополь
					</button>
				</div>

				<div className='cart-container-information__down-event'>

					<div className='cart-container-information__down-event__raiting'>

						<div className='cart-container-information__down-event__raiting-likes'>
							<Image
								src={'/images/icon-park-outline_like.svg'}
								alt='Likes'
								width={'20'}
								height={'20'}
							/>

							<span className='cart-container-information__down-event__raiting-likes--number'>569</span>
						</div>
						<div className='cart-container-information__down-event__raiting-comment'>
							<Image
								src={'/images/messagetext1.svg'}
								alt='Comment'
								width={'20'}
								height={'20'}
							/>

							<span className='cart-container-information__down-event__raiting-likes--number'>158 Отзыв</span>
						</div>

					</div>

					<div className='cart-container-information__down-event__action'>

						<button className='cart-container-information__down-event__action--button'>
							Начать чат
						</button>


						<div className='cart-container-information__down-event__action-more'>
							<span className='cart-container-information__down-event__action-more--text'>Узнать больше</span>
							<Image
								src={'/images/arrowcircler.svg'}
								alt='Arrow'
								width={'20'}
								height={'20'}
							/>
						</div>

					</div>

				</div>
			</div>

		</div>
	)
}

export default CartPharmacist