import React from 'react'
import Image from "next/image";
import ActiveMessage from '@/app/chat/components/ActiveMessage'

const Sidebar = () => {
	return(
		<div className='sidebar'>
			<div className='sidebar-profile'>
				<div className='sidebar-profile__avatar'>
					<Image
						alt='Аватар'
						src={'/images/placeholder.jpg'}
						width={'140'}
						height={'140'}
						className='rounded-full'
					/>
				</div>

				<div className='sidebar-profile__name'>
					<h3 className='sidebar-profile__name--text'>
						Александрова Александра Александровна
					</h3>
				</div>

				<div className='sidebar-profile__edit'>
					<button className='sidebar-profile__edit--button'>
						Редактировать
						<Image
							src={'/images/useredit.svg'}
							alt={'Редактировать'}
							width={'24'}
							height={'24'}
							/>
					</button>
				</div>

			</div>

			<div className='sidebar-chats'>
				<h2 className='sidebar-chats__title'>
					Активные диалоги
				</h2>

				<ActiveMessage />
				<ActiveMessage />
				<ActiveMessage />

			</div>
		</div>
	)
}

export default Sidebar