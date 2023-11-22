'use client';

import React from 'react'

interface InputProps {
	id: string;
	type?: string;
	placeholder?: string,
}

const Input: React.FC<InputProps> = ({
	id,
	type = 'text' ,
	placeholder = 'text',
}) => {
	return (
		<div>
			<input className={'block text-sm w-[305px] pl-5 py-2.5 px-3 ring-1 ring-[#9A9A9A] text-slate-500 rounded-lg font-["Lato"]'} placeholder={placeholder} type={type} id={id}/>
		</div>
	);
}

export default Input;