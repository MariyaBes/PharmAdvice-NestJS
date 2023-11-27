'use client';

import React from 'react'
import Image from "next/image"
import Link from 'next/link'

const Logo = () => {
	return(
		<div>
			<Link href={'/'}>
				<Image
					alt="Logo"
					className="hidden md:block cursor-pointer mr-[260px]"
					height="100"
					width="240"
					src="/images/LOGO.png"
				/>
			</Link>
		</div>
	)
}

export default Logo;