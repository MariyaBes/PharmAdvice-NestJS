import '@/app/assets/style/globals.css'
import Image from 'next/image'

const CommentIcon = () => {
	return (
		<div className='cart-container-information__down-event__raiting-comment'>
			<Image
				src={'/images/messagetext1.svg'}
				alt='Comment'
				width={'20'}
				height={'20'}
				className={'cart-container-information__down-event__raiting-comment--image'}
			/>

			<span className='cart-container-information__down-event__raiting-likes--number'>158 Отзыв</span>
		</div>
	)
}

export default CommentIcon