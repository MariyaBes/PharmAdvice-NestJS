import Image from 'next/image'
import { FC } from 'react'
import Link from 'next/link'
import StartChat from '@/app/(pharmacists)/pharmacist/components/button/StartChat'
import LikesIcon from '@/app/(pharmacists)/pharmacist/components/button/LikesIcon'
import CommentIcon from '@/app/(pharmacists)/pharmacist/components/button/CommentIcon'
import GPS from '@/app/(pharmacists)/pharmacist/components/button/GPS'
import { IPharmacist } from '@/app/types/pharmacist.interface'

// @ts-ignore
const CartPharmacist: FC<{ pharmacist: IPharmacist }> = ({ pharmacist }) => {


	return (
		<div className='cart-container'>

			<div className='cart-container-photo'>
				<img src={pharmacist.images} alt='Your Image' />
			</div>

			<div className='cart-container-information'>
				<div className='cart-container-information__name'>
					<span className='cart-container-information__name--text'>{ pharmacist.full_name }</span>
				</div>

				<div className='cart-container-information__info'>
					<span className='cart-container-information__info--text'><span className='cart-container-information__info--text-purple'>Стаж:</span> {pharmacist.stage} лет</span>
					<span className='cart-container-information__info--text'><span className='cart-container-information__info--text-purple'>Email:</span> {pharmacist.email}</span>
					<span className='cart-container-information__info--text'><span className='cart-container-information__info--text-purple'>Контакты:</span> { pharmacist.contact }</span>
				</div>

				<GPS />

				<div className='cart-container-information__down-event'>

					<div className='cart-container-information__down-event__raiting'>

						<LikesIcon raiting={pharmacist.raiting}/>

						<CommentIcon 	reviews={pharmacist.reviews}/>

					</div>

					<div className='cart-container-information__down-event__action'>

						<StartChat />

						<div className='cart-container-information__down-event__action-more'>
							<Link
								href={{
									pathname: `/pharmacist/${pharmacist.pharmacist_id}`,
									query: {
										full_name: pharmacist.full_name,
										email: pharmacist.email,
										contact: pharmacist.contact,
										raiting: pharmacist.raiting,
										reviews: pharmacist.reviews,
										stage: pharmacist.stage,
										qualification: pharmacist.qualification,
										images: pharmacist.images
									}
								}}
							>
								<span className='cart-container-information__down-event__action-more--text'>Узнать больше</span>
							</Link>
						</div>

					</div>

				</div>
			</div>

		</div>
	)
}

export default CartPharmacist