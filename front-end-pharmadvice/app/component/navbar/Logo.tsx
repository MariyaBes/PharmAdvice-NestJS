'use client';

import React from 'react'
import Image from "next/image"

const Logo = () => {
	return(
		<div>
			<Image
				alt="Logo"
				className="hidden md:block cursor-pointer mr-[260px]"
				height="100"
				width="240"
				src="/images/LOGO.png"
			/>
		</div>
	)
}

export default Logo;