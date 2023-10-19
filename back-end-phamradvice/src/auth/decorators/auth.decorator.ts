import { UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

// Создаем декоратор для применения аутентификации JWT
export const AuthDecorator = () => UseGuards(AuthGuard('jwt'))

/*
Когда этот декоратор применяется к методу или контроллеру в Nest.js с помощью @AuthDecorator(),
это означает, что этот метод или контроллер требует наличие действительного токена JWT для доступа.
Внутренний AuthGuard('jwt') использует JWT-стратегию аутентификации Passport для проверки токена и,
если токен действителен, позволяет доступ к соответствующему методу или контроллеру.
 */