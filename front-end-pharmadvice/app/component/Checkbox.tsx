'use client';

import clsx from 'clsx';
import React from 'react'

interface CheckboxProps {
	children?: React.ReactNode;
}

const Checkbox: React.FC<CheckboxProps & { onChange: (isChecked: boolean) => void }> = ({
	children,
	onChange
}) => {
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange(e.target.checked)
	}

	return (
		<li className="relative flex items-center justify-center gap-2.5 bg-white px-1 py-1 w-[305px]">
			<input
				type="checkbox"
				id="checkbox1"
				className="relative h-5 w-5 shrink-0 rounded-sm border "
				onChange={handleChange}
			/>
			<label
				htmlFor="checkbox1"
				className={clsx(`w-full cursor-pointer font-normal font-['Lato'] text-[#4b5563] text-xs`)}
			>
				{children}
			</label>
		</li>
	);
}

export default Checkbox;