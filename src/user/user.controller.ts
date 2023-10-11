import { Body, Controller, Get, HttpCode, Param, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common'
import { UserService } from './user.service';
import { AuthDecorator } from 'src/auth/decorators/auth.decorator'
import { CurrentUser } from '../auth/decorators/user.decorator'
import { UserDto } from './user.dto'

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('profile')
  @AuthDecorator()
  async getProfile(@CurrentUser('user_id') user_id: number) {
    return this.userService.byId(user_id);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @AuthDecorator()
  @Post('profile')
  async updateProfile(
    @CurrentUser('user_id') user_id: number,
    @Body() dto: UserDto
  ){
    return this.userService.updateProfile(user_id, dto);
  }

  @HttpCode(200)
  @AuthDecorator()
  @Patch('profile/favorite/:medication_id_')
  async toggleFavorite(
    @CurrentUser('user_id') user_id: number,
    @Param('medication_id_') medication_id_: string
  ) {
    return this.userService.toggleFavorite(user_id, +medication_id_);
  }

}
