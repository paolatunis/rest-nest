import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './User/user.module';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR, //interceptador que já é dado pelo próprio Nest
      useClass: ClassSerializerInterceptor, //classe que vai representar o interceptador criado
    },
  ],
})
export class AppModule {}
