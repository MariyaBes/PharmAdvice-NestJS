'use client';

import Image from "next/image";
import React from 'react';
import { IUser } from './types/user.interface';
import { useAuth } from '@/app/hooks/useAuth'
import { useActions } from '@/app/hooks/useActions'

interface AvatarProps {
	userAvatar?: IUser;
}

const Avatar: React.FC<AvatarProps> = ({
	userAvatar,
}) => {
	const { user } = useAuth()

	const { logout } = useActions()

	return (
		<div className="flex items-center">
			{user ? (
				<div className='flex gap-4'>
					<Image
						height={'30'}
						width={'30'}
						src={userAvatar?.avatarPath || '/images/placeholder.jpg'}
						alt="Avatar"
						className=" rounded-full"
					/>
					<Image
						src={'/images/logout.svg'}
						alt="Logout"
						height={'30'}
						width={'30'}
						className="rounded-full cursor-pointer"
						onClick={logout}
					/>
				</div>
			) : (
				<Image
					src={'/images/usersquare.svg'}
					height={'30'}
					width={'30'}
					alt="Placeholder"
					className="rounded-full"
				/>
			)}
		</div>
	);
}

export default Avatar;