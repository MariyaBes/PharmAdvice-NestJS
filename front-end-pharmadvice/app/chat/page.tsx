import { Metadata } from 'next'
import React, { FC } from 'react'
import Navbar from '@/app/component/navbar/Navbar'
import Sidebar from '@/app/chat/components/Sidebar'
import ChatForm from '@/app/chat/components/ChatForm'

export const metadata: Metadata = ({
	title: 'Чат | PharmAdvice',
	description: 'Чат-консультация с фармацевтов',
} as const);

const Chat = () => {
	return (
		<>
			<Navbar/>

			<div className='flex flex-col max-w-full mx-auto xl:px-[365px] md:px-10 sm:px-2 px-4 min-h-full mb-14'>

				<div className='flex flex-row'>
					<Sidebar />
					<ChatForm />
				</div>

			</div>

		</>
	)
}

export default Chat;