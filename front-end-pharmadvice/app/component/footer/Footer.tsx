'use client';

import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
	return (
		<div className="flex flex-col max-w-[1920px] mx-auto bg-[#EEEEEE] min-h-min">
			<div className="xl:px-[365px] md:px-10 sm:px-2 border-b-[1px] border-b-[#B8B8B8]">
				<Image
					alt='logo'
					className='flex m-auto mt-[21px] mb-[21px]'
					height='38'
					width='240'
					src='/images/LOGO.png'
				/>
			</div>

			<div className="flex flex-row m-auto mt-[42px] mb-11">
				<Link href='/'>
					<span className="font-semibold font-['Lato'] tracking-wider text-xl text-[#9A9A9A] mr-[43px] cursor-pointer hover:text-[#444752]">О НАС</span>
				</Link>

				<span className="font-semibold font-['Lato'] tracking-wider text-xl text-[#9A9A9A] mr-[43px] cursor-pointer hover:text-[#444752]">КОНТАКТЫ</span>
				<span className="font-semibold font-['Lato'] tracking-wider text-xl text-[#9A9A9A] cursor-pointer hover:text-[#444752]">FAQ</span>
			</div>

			<div className="m-auto text-center font-['Lato'] text-[#9A9A9A] font-semibold tracking-wide text-sm">
				<p className="mb-[11px]">ГБОУВО РК КИПУ имени Февзи Якубова</p>

				<p className="mb-[28px]">ИНИЦИАТИВНАЯ РАЗРАБОТКА В РАМКАХ КУРСОВОГО ПРОЕКТА</p>
			</div>

		</div>
	)
}

export default Footer;