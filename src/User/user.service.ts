import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {
  private users: Array<User> = [
    {
      id: 1,
      name: 'Paola',
      email: 'paolatunis@gmail.com',
      password: 'password',
      fullName: 'Paola Tunis',
      registerDate: new Date(),
    },
  ];

  public create(user: User): User {
    this.users.push(user);
    return user;
  }

  public getByName(name: string) {
    return this.users.find((user) => user.name === name);
  }

  getHello(): string {
    return 'Hello user!';
  }
}
