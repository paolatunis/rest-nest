import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { isUsernameUnique } from './is-username-unique.validator';

export class User {
  id: number;

  @IsNotEmpty({ message: 'O nome é obrigatório.' })
  @IsString()
  @isUsernameUnique({ message: 'Username deve ser único.' })
  username: string;

  @IsEmail(
    {},
    {
      message: 'Email inválido!',
    },
  )
  @IsString()
  email: string;

  @IsNotEmpty({ message: 'A senha é obrigatória.' })
  @IsString()
  password: string;

  @IsNotEmpty({ message: 'O nome comppleto é obrigatório.' })
  @IsString()
  fullName: string;
  registerDate: Date;
}
