import Image from 'next/image'
import '@/app/assets/style/globals.css'
import { FC } from 'react'
import { IPharmacist } from '@/app/types/pharmacist.interface'

const LikesIcon: FC<{raiting: number | undefined}> = ({raiting}) => {
	return (
		<div className='cart-container-information__down-event__raiting-likes'>
			<Image
				src={'/images/icon-park-outline_like.svg'}
				alt='Likes'
				width={'20'}
				height={'20'}
				className={'cart-container-information__down-event__raiting-likes--image'}
			/>

			<span className='cart-container-information__down-event__raiting-likes--number'>{raiting}</span>
		</div>
	)
}

export default LikesIcon