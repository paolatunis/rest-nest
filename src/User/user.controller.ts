import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  public create(@Body() user: User) {
    const createdUser = this.userService.create(user);
    return createdUser;
  }

  @Get()
  getHello(): string {
    return this.userService.getHello();
  }
}
