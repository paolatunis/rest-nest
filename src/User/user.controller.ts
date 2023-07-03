import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':name')
  public getByUsername(@Param('name') name: string) {
    const user = this.userService.getByUsername(name);
    return user;
  }

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
