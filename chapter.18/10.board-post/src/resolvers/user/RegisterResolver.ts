import bcrypt from 'bcryptjs';
import { Arg, Mutation, Resolver } from 'type-graphql';
import { User } from '../../entities/User';
import { RegisterInput } from './RegisterInput';

@Resolver()
export class RegisterResolver {
  @Mutation(() => User)
  public async register(
    @Arg('data')
    registerInput: RegisterInput
  ): Promise<User> {
    const hashedPassword = await bcrypt.hash(registerInput.password, 10);

    const user = await User.create({
      ...registerInput,
      password: hashedPassword
    }).save();

    return user;
  }
}
