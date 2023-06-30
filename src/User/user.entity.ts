import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class User {
  id: number;

  @IsNotEmpty({ message: 'O nome é obrigatório.' })
  @IsString()
  name: string;

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
