'use client';

import { Metadata } from 'next'
import React, { FC } from 'react'
import Footer from '@/app/component/footer/Footer'
import Navbar from '@/app/component/navbar/Navbar'
import StartChat from '@/app/(pharmacists)/pharmacist/components/button/StartChat'
import GPS from '@/app/(pharmacists)/pharmacist/components/button/GPS'
import LikesIcon from '@/app/(pharmacists)/pharmacist/components/button/LikesIcon'
import CommentIcon from '@/app/(pharmacists)/pharmacist/components/button/CommentIcon'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'

const DynamicPharmacist = () => {
	const searchParams = useSearchParams();

	const pharmacist_id = searchParams.get('pharmacist_id');
	const full_name = searchParams.get('full_name');
	const email = searchParams.get('email');
	const contact = searchParams.get('contact');
	const raiting = searchParams.get('raiting');
	const qualification = searchParams.get('qualification');
	const images = searchParams.get('images');
	const reviews = searchParams.get('reviews');
	const stage = searchParams.get('stage')

	// @ts-ignore
	return (
		<>
			<Navbar/>

			<div className='flex flex-col max-w-full mx-auto xl:px-[365px] md:px-10 sm:px-2 px-4 min-h-full mb-14'>

				<div className='phamr-content'>
					<div className='phamr-content__photo'>
						<img src={images} alt='Your Image' className='object-cover w-full h-full rounded-2xl'/>
					</div>

					<div className='phamr-content__cart-info'>

						<div className='phamr-content__cart-info__information'>

							<div className='phamr-content__cart-info__information-name'>
								<p className='phamr-content__cart-info__information-name--text'>{ full_name }</p>
							</div>

							<span className='phamr-content__cart-info__information--line'></span>

							<div className='phamr-content__cart-info__information-speciality'>
								<p className='phamr-content__cart-info__information-speciality--text'>{ qualification } </p>
								<p className='phamr-content__cart-info__information-speciality--text'>Стаж работы: {stage} лет</p>
							</div>

							<span className='phamr-content__cart-info__information--line'></span>

							<div className='phamr-content__cart-info__information-contact'>
								<p className='phamr-content__cart-info__information-contact--text'><span className='phamr-content__cart-info__information-contact--text-purp'>Рабочий телефон: </span> { contact }</p>
								<p className='phamr-content__cart-info__information-contact--text'><span className='phamr-content__cart-info__information-contact--text-purp'>Email:</span> {email}</p>
							</div>

							<GPS />

						</div>

						<div className='phamr-content__cart-info__active'>
							<div className='phamr-content__cart-info__active-event'>

								<div className='phamr-content__cart-info__active-event--icons'>
									<LikesIcon raiting={raiting}/>
									<CommentIcon reviews={reviews}/>
								</div>

								<StartChat />

							</div>
						</div>

					</div>

				</div>

				<div className='pharm-information'>
					<div className='pharm-information__text'>

						<div className='pharm-information__text-decs'>
							<Image
								src={'/images/check-circle.svg'}
								alt={'Checkbox'}
								width={'24'}
								height={'24'}
								/>
							<p className='pharm-information__text-decs--text'>Помогу с подбором медикаментов или заменю их на аналогичную продукцию</p>
						</div>

						<div className='pharm-information__text-decs'>
							<Image
								src={'/images/check-circle.svg'}
								alt={'Checkbox'}
								width={'24'}
								height={'24'}
							/>
							<p className='pharm-information__text-decs--text'>Расскажу о механизме действия препарата и нюансов при его применении</p>
						</div>

						<div className='pharm-information__text-decs'>
							<Image
								src={'/images/check-circle.svg'}
								alt={'Checkbox'}
								width={'24'}
								height={'24'}
							/>
							<p className='pharm-information__text-decs--text'>Рассчитаю корректную дозировки лекарства и подберу способы его использования</p>
						</div>

					</div>
					<div className='pharm-information__about'>
						<div className='pharm-information__about-scinse'>

							<p className='pharm-information__about-scinse--title'>Образование:</p>

						</div>
						<div className='pharm-information__about-basic'>
							<p className='pharm-information__about-scinse--text'>Базовое</p>
						</div>
						<div className='pharm-information__about-select'>
							<p className='pharm-information__about-select--list'>2010г. — Медицинская академия имени Георгиевского (лечебное дело)</p>
						</div>
					</div>
				</div>
			</div>


			<Footer />
		</>
	)
}

export default DynamicPharmacist;