import Image from 'next/image'
import React from 'react'

const ActiveMessage = () => {
	return (
		<div className='sidebar-chats__list'>
			<div className='sidebar-chats__list-user'>
				<Image
					src='/imgPharmacist/photo-woman.jpg'
					alt={'Женщина'}
					width={'40'}
					height={'40'}
					className='rounded-full flex justify-center items-center w-[40px] h-[40px] object-cover'
				/>

				<div className='sidebar-chats__list-user__content'>
					<div className='sidebar-chats__list-user__content-name'>
						<span className='sidebar-chats__list-user__content-name--text'>Лебедева Наталья Андреевна</span>
					</div>

					<div className='sidebar-chats__list-user__content-message'>
						<span className='sidebar-chats__list-user__content-message--text'>Как сильно болит?</span>
					</div>

				</div>

				<div className='sidebar-chats__list-user__date'>
					<span className='sidebar-chats__list-user__date--text'>18:44</span>
				</div>
			</div>
		</div>
	)
}

export default ActiveMessage