import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { IsUsernameUniqueConstraint } from './is-username-unique.validator';

@Module({
  controllers: [UserController],
  providers: [UserService, IsUsernameUniqueConstraint],
})
export class UserModule {}
