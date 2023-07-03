import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { IsUsernameUnique } from './is-username-unique.validator';
import { Exclude } from 'class-transformer';

export class User {
  id: number;

  @IsNotEmpty({ message: 'O nome é obrigatório.' })
  @IsString()
  @IsUsernameUnique({ message: 'Username deve ser único.' })
  username: string;

  @IsEmail(
    {},
    {
      message: 'Email inválido!',
    },
  )
  @IsString()
  email: string;

  @Exclude({
    toPlainOnly: true,
  })
  @IsNotEmpty({ message: 'A senha é obrigatória.' })
  @IsString()
  password: string;

  @IsNotEmpty({ message: 'O nome comppleto é obrigatório.' })
  @IsString()
  fullName: string;
  registerDate: Date;
}
