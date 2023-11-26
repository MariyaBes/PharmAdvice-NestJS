import { InputHTMLAttributes } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
	type?: string;
	placeholder: string,
	error?: string
}