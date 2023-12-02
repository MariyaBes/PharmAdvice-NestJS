import Image from 'next/image'
import SendMessage from '@/app/chat/components/messages/SendMessage'
import ResponseMessage from '@/app/chat/components/messages/ResponseMessage'

const ChatForm = () => {
	return (
		<div className='chat'>
			<div className='chat-top-header'>

				<Image
					src={'/upload/photo-men1.png'}
					alt={'MEn'}
					width={'95'}
					height={'95'}
					className='rounded-full'
				/>

				<div className='chat-top-header__title'>
					<div className='chat-top-header__title--text'>
						<span>Чат с формацевтом:</span>
					</div>
					<div className='chat-top-header__title-name'>
						<span>Михаил Сергеевич С.</span>
					</div>
				</div>

			</div>

			<div className='chat-message'>

				<SendMessage/>
				<ResponseMessage />

				<SendMessage/>
				<ResponseMessage />

				<SendMessage/>
				<ResponseMessage />

				<SendMessage/>
				<ResponseMessage />

				<SendMessage/>
				<ResponseMessage />

				<SendMessage/>
				<ResponseMessage />

				<SendMessage/>
				<ResponseMessage />
			</div>

			<div className='chat-push'>
				<input
					placeholder={'Напишите сообщение...'}
					type={'text'}
				/>

				<button>
					<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
						<path d="M7.91667 19L6.96034 10.3914C6.68642 7.92774 9.22292 6.11799 11.4633 7.18041L30.3747 16.1389C32.7893 17.2821 32.7893 20.7179 30.3747 21.8611L11.4633 30.8212C9.22292 31.882 6.68642 30.0738 6.96034 27.6102L7.91667 19ZM7.91667 19H19" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					</svg>
				</button>

			</div>
		</div>
	)
}

export default ChatForm