import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { returnUserObject } from './return-user.object'
import { Prisma } from '@prisma/client'
import { UserDto } from './user.dto'
import { hash } from 'argon2'

@Injectable()
export class UserService {
	constructor(private prisma: PrismaService) {}

	async byId(user_id: number, selectObject: Prisma.UserSelect = {}) {
		const user = await this.prisma.user.findUnique({
			where: {
				user_id
			},
			select: {
				...returnUserObject,
				favorite: {
					select: {
						medication_id_:true,
						images: true,
						price: true,
						name: true,
						status: true
					}
				},
				...selectObject
			}
		})

		if (!user) {
			throw new NotFoundException("Пользователь не найден!")
		}

		return user;
	}

	async updateProfile(user_id: number, dto: UserDto) {
		const isSameUser = await this.prisma.user.findUnique({
			where: {
				email: dto.email
			}
		})

		if(isSameUser && user_id !== isSameUser.user_id) {
			throw new BadRequestException("Email занят!")
		}

		const user = await this.byId(user_id)

		return this.prisma.user.update({
			where: {
				user_id
			},
			data: {
				email: dto.email,
				name: dto.name,
				phone_num: dto.phone_num,
				avatarPath: dto.avatarPath,
				password: dto.password ? await hash(dto.password) : user.password
			}
		});
	}

	async toggleFavorite(user_id: number, medication_id_: number) {
		const user = await this.byId(user_id)

		if(!user) {
			throw new NotFoundException("Пользователь не найден!")
		}

		const isExists = user.favorite.some(medication => medication.medication_id_ == medication_id_)

		await this.prisma.user.update({
			where: {
				user_id: user.user_id
			},
			data: {
				favorite: {
					[isExists ? 'disconnect' : 'connect']: {
						medication_id_: medication_id_
					}
				}
			}
		})

		return 'Success'
	}
}
