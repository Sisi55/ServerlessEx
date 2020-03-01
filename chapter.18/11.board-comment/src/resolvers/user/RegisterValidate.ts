import { registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';
import { User } from '../../entities/User';

@ValidatorConstraint({ async: true })
class IsEmailAlreadyExistConstraint implements ValidatorConstraintInterface {
  public async validate(email: string) {
    const user = await User.findOne({ where: { email } });
    if (user) {
      return false;
    }
    return true;
  }
}

export function IsEmailExist(validationOptions?: ValidationOptions) {
  return (object: Object, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsEmailAlreadyExistConstraint
    });
  };
}

@ValidatorConstraint({ async: true })
class IsNicknameAlreadyExistConstraint implements ValidatorConstraintInterface {
  public async validate(nickname: string) {
    const user = await User.findOne({ where: { nickname } });
    if (user) {
      return false;
    }
    return true;
  }
}

export function IsNicknameExist(validationOptions?: ValidationOptions) {
  return (object: Object, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsNicknameAlreadyExistConstraint
    });
  };
}
