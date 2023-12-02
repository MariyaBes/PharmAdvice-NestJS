import Image from 'next/image'
import { FC } from 'react'
import { IPharmacist } from '@/app/types/pharmacist.interface'
import Link from 'next/link'
import StartChat from '@/app/(pharmacists)/pharmacist/components/button/StartChat'
import LikesIcon from '@/app/(pharmacists)/pharmacist/components/button/LikesIcon'
import CommentIcon from '@/app/(pharmacists)/pharmacist/components/button/CommentIcon'
import GPS from '@/app/(pharmacists)/pharmacist/components/button/GPS'

const CartPharmacist: FC<IPharmacist> = ({
																								full_name,
																								email,
																								pharmacist_id,
																								qualification,
																								contact,
																					 password,
																								raiting
																							}) => {

	return (
		<div className='cart-container'>

			<div className='cart-container-photo'>

			</div>

			<div className='cart-container-information'>
				<div className='cart-container-information__name'>
					<span className='cart-container-information__name--text'>{ full_name }</span>
				</div>

				<div className='cart-container-information__info'>
					<span className='cart-container-information__info--text'><span className='cart-container-information__info--text-purple'>Стаж:</span> 7 лет</span>
					<span className='cart-container-information__info--text'><span className='cart-container-information__info--text-purple'>Email:</span> natali.l@gmail.com</span>
					<span className='cart-container-information__info--text'><span className='cart-container-information__info--text-purple'>Адрес:</span> ул.Кирова. 63</span>
				</div>

				<GPS />

				<div className='cart-container-information__down-event'>

					<div className='cart-container-information__down-event__raiting'>

						<LikesIcon />

						<CommentIcon />

					</div>

					<div className='cart-container-information__down-event__action'>

						<StartChat />

						<div className='cart-container-information__down-event__action-more'>
							<Link href={'/pharmacist/1'} >
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