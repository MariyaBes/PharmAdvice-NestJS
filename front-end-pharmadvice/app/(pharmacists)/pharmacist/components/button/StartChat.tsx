import Link from 'next/link'
import '@/app/assets/style/globals.css'

const StartChat = () => {
	return (
		<div>
			<Link href={'/chat'} >
				<button className='cart-container-information__down-event__action--button'>
					Начать чат
				</button>
			</Link>
		</div>
	)
}

export default StartChat