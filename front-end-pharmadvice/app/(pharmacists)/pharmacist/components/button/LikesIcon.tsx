import Image from 'next/image'
import '@/app/assets/style/globals.css'

const LikesIcon = () => {
	return (
		<div className='cart-container-information__down-event__raiting-likes'>
			<Image
				src={'/images/icon-park-outline_like.svg'}
				alt='Likes'
				width={'20'}
				height={'20'}
				className={'cart-container-information__down-event__raiting-likes--image'}
			/>

			<span className='cart-container-information__down-event__raiting-likes--number'>569</span>
		</div>
	)
}

export default LikesIcon