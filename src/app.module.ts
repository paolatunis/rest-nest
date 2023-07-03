import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './User/user.module';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { ExceptionFilterHttp } from './common/filters/exception-filter-http.filter';

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR, //interceptador que já é dado pelo próprio Nest
      useClass: ClassSerializerInterceptor, //classe que vai representar o interceptador criado
    },
    {
      provide: APP_FILTER,
      useClass: ExceptionFilterHttp,
    },
  ],
})
export class AppModule {}
