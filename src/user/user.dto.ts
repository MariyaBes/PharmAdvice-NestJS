import { IsOptional, IsString } from 'class-validator'

export class UserDto {
	@IsString()
	email: string

	@IsOptional()
	@IsString()
	password:string

	@IsOptional()
	@IsString()
	name: string

	@IsOptional()
	@IsString()
	avatarPath: string

	@IsOptional()
	@IsString()
	phone_num?: string
}