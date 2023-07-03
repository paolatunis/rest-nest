import { UserService } from './user.service';
import {
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';

@ValidatorConstraint()
export class IsUsernameUniqueConstraint
  implements ValidatorConstraintInterface
{
  constructor(private userService: UserService) {}
  validate(
    username: string,
    validationArguments?: ValidationArguments,
  ): boolean | Promise<boolean> {
    return !!!this.userService.getByUsername(username);
  }
}

export function IsUsernameUnique(validationOptions: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsUsernameUniqueConstraint,
    });
  };
}
