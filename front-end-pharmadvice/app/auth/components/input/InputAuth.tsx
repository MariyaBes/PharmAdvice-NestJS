'use client';

import React, { forwardRef } from 'react'
import { InputProps } from '@/app/auth/components/input/input.interface'
import cn from 'clsx'


const Input = forwardRef<HTMLInputElement, InputProps>(
	({
		 placeholder,
		 error,
		 className,
		 type = 'text',
		 style,
		 ...rest
	 }, ref
) => {
	return (
		<div className={cn('', className)} style={style}>
			<input className={cn('block text-sm w-[305px] pl-5 py-2.5 px-3 outline-none border-2 border-gray-300 border-solid text-slate-500 rounded-lg font-["Lato"] focus:border-purple-500 transition-all', {
				'border-red' : !!error
			})} placeholder={placeholder} type={type} ref={ref} {...rest}/>

			{error && <div className='text-red-500 mt-1 text-[11px] flex-wrap w-[305px]'> {error} </div>}
		</div>
	);
}
)

Input.displayName = 'Input'

export default Input;