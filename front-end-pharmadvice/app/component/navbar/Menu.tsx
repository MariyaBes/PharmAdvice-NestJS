'use client';

import React, { FC } from 'react'
import Image from "next/image"
import Link from 'next/link'
import { useAuth } from '@/app/hooks/useAuth'

const Menu = () => {
	const { user } = useAuth()
	return (
		<div className="hidden lg:flex lg:items-center ml-auto mr-auto">
			{user ?
				<>
					<Link href={'/chat'}>
						<p className="text-[14px] font-normal cursor-pointer border-b-2 border-transparent hover:border-[#6B4EE6] tracking-wide transition duration-500 ease-in-out">Мои чаты</p>
					</Link>

					<Image
						alt="Palka"
						className="hidden md:block ml-[30px] mr-[30px]"
						height="15"
						width="1"
						src="/images/palka.svg"
					/>

					<Link href={'/search-map'}>
						<p className="text-[14px] font-normal cursor-pointer border-b-2 border-transparent hover:border-[#6B4EE6] tracking-wide transition duration-500 ease-in-out">Поиск лекарств</p>
					</Link>

					<Image
						alt="Palka"
						className="hidden md:block ml-[30px] mr-[30px]"
						height="15"
						width="1"
						src="/images/palka.svg"
					/>

					<Link href={'/pharmacist'}>
						<p className="text-[14px] cursor-pointer border-b-2 border-transparent hover:border-[#6B4EE6] tracking-wide transition duration-500 ease-in-out">Фармацевты</p>
					</Link>

					<Image
						alt="Palka"
						className="hidden md:block ml-[30px] mr-[30px]"
						height="15"
						width="1"
						src="/images/palka.svg"
					/>

					<Link href={'/'}>
						<p className="text-[14px] cursor-pointer border-b-2 border-transparent hover:border-[#6B4EE6] tracking-wide transition duration-500 ease-in-out">О нас</p>
					</Link>

				</>

				:

				<>
					<Link href={'/search-map'}>
						<p className="text-[14px] font-normal cursor-pointer border-b-2 border-transparent hover:border-[#6B4EE6] tracking-wide transition duration-500 ease-in-out">Поиск лекарств</p>
					</Link>

					<Image
						alt="Palka"
						className="hidden md:block ml-[30px] mr-[30px]"
						height="15"
						width="1"
						src="/images/palka.svg"
					/>

					<Link href={'/pharmacist'}>
						<p className="text-[14px] cursor-pointer border-b-2 border-transparent hover:border-[#6B4EE6] tracking-wide transition duration-500 ease-in-out">Фармацевты</p>
					</Link>

					<Image
						alt="Palka"
						className="hidden md:block ml-[30px] mr-[30px]"
						height="15"
						width="1"
						src="/images/palka.svg"
					/>

					<Link href={'/'}>
						<p className="text-[14px] cursor-pointer border-b-2 border-transparent hover:border-[#6B4EE6] tracking-wide transition duration-500 ease-in-out">О нас</p>
					</Link>

				</>
			}
		</div>
	)
}

export default Menu;