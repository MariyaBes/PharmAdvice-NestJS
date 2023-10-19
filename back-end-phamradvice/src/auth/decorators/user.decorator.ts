import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { User } from '@prisma/client'

export const CurrentUser = createParamDecorator(
	(data: keyof User, ctx: ExecutionContext) => {
		/*
		-data: keyof User: Этот аргумент позволяет передавать имя поля из модели User
		(например, 'user_id', 'email') и возвращать конкретное значение этого поля пользователя.

    -ctx: ExecutionContext: Этот аргумент предоставляет контекст выполнения запроса,
    включая доступ к запросу (request) и другим данным.
		 */
		const request = ctx.switchToHttp().getRequest()
		const user = request.user

		return data ? user[data] : user /// Здесь будет возвращаться либо весь объект пользователя, либо конкретное поле
	}
)