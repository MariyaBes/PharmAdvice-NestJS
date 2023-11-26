'use client';

import Image from "next/image";
import React from 'react';
import { IUser } from './types/user.interface';

interface AvatarProps {
	user?: IUser;
}

const Avatar: React.FC<AvatarProps> = ({ user }) => {
	return (
		<>
			<div className="flex image">
				<div className="h-[30px] w-[30px] md:block ml-auto mr-auto">
					<Image
						fill
						src={user?.avatarPath || '/images/placeholder.jpg'}
						alt="Avatar"
						className="rounded-full"
					/>
				</div>
			</div>
		</>
	);
}

export default Avatar;