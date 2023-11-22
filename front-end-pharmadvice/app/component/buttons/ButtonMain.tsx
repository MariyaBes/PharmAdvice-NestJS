import React from 'react'

interface buttonProps {
	title: string
}

const ButtonMain: React.FC<buttonProps> = ({ title }) => {
	return (
		<button className='font-extrabold font-["Lato"] text-base rounded-[10px] text-white p-3 m-auto tracking-wider hover:bg-[#F19090] bg-[#ED6C6C] transition duration-300'>{title}</button>
	)
}

export default ButtonMain;