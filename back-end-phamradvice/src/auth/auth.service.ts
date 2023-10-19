import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common'
import { User } from '@prisma/client'
import { PrismaService } from '../prisma.service'
import { AuthDto } from './dto/auth.dto'
import { faker } from '@faker-js/faker'
import { hash, verify } from 'argon2'
import { JwtModuleOptions, JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
	constructor(private prisma: PrismaService,
							private jwtServ: JwtService) {}

	// -------Функция для логина пользователя-------
	async login (dto: AuthDto) {
		const user = await this.validateUser(dto) // Проверка

		// Выдача jwt-токена юзеру
		const tokens = await this.issueTokens(user.user_id);

		//Возвращаем юзера и его токен
		return {
			user: this.returnUserFields(user),
			...tokens
		}
	}

	// -------Функция для получения новыйх JWT-токенов на основе рефрешь токенов-------
	async getNewTokens (refreshToken: string) {
		const resultVerificationTokens = await this.jwtServ.verifyAsync(refreshToken)
		if (!resultVerificationTokens) {
			throw new UnauthorizedException('Invalid refresh token!')
		}

		const user = await this.prisma.user.findUnique({
			where: {
				user_id: resultVerificationTokens.user_id
			}
		})

		const tokens = await this.issueTokens(user.user_id)

		return {
			...tokens,
			user: this.returnUserFields(user)
		}
	}

	// -------Функция для регистрации пользователя-------
	async register (dto: AuthDto) {
		const oldUser = await this.prisma.user.findUnique({
			where: {
				email: dto.email
			}
		});

		if (oldUser) throw new BadRequestException('Пользователь уже существует!');

		const user = await this.prisma.user.create({
			data: {
				email: dto.email,
				name: faker.person.firstName(),
				avatarPath: faker.image.avatar(),
				phone_num: faker.phone.imei(),
				address: faker.location.streetAddress(),
				gender: faker.person.gender(),
				password: await hash(dto.password) //Хешируем пароль
			}
		})

		// Выдача jwt-токена юзеру
		const tokens = await this.issueTokens(user.user_id);

		//Возвращаем юзера и его токен
		return {
			user: this.returnUserFields(user), ...tokens
		}
	}

	// -------Функция для выдачи JWT-токенов пользователя-------
	private async issueTokens(userId: number){
		const data = { user_id: userId }

		const accessToken = this.jwtServ.sign(data, {
			expiresIn: '1h' // Тут время жизни токенов
		})

		const refreshToken = this.jwtServ.sign(data, {
			expiresIn: '7d' // А тут через сколько будет рефрешь токенов
		})

		return {accessToken, refreshToken}
	}

	// -------Функция для возврата выбранных полей пользователя-------
	private returnUserFields(user: User) {
		return {
			user_id: user.user_id,
			email: user.email
		}
	}

	// -------Функция для валидации пользователя при входе-------
	private async validateUser (dto: AuthDto) {
		const user = await this.prisma.user.findUnique({
			where: {
				email: dto.email
			}
		});

		if (!user) throw new NotFoundException('Пользователь не найден');

		const isValid = await verify(user.password, dto.password)

		if (!isValid) throw new UnauthorizedException('Пароль не верный')

		return user
	}

}
