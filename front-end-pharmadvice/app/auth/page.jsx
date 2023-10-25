import Logo from './components/Logo'
import Image from './components/Image'
import React from 'react'


export default function Register() {
	return (
		<div>
			<div className='flex flex-col min-h-full max-w-[1920px] bg-[#E1DCFA] overflow-hidden'>
				<Logo/>

				<Image
					alt='Back'
					className='absolute ml-[630px] float-right h-[927px] z-0'
					height='1080'
					width='1290'
					src='/images/Background.svg'
				/>


				<AuthForm />
			</div>
		</div>
	)
}