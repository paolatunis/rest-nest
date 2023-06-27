import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserController } from './User/user.controller';
import { AppService } from './app.service';
import { UserService } from './User/user.service';

@Module({
  imports: [],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
