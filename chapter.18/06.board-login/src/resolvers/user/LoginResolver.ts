import bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { Arg, Field, Mutation, ObjectType, Resolver } from 'type-graphql';
import config from '../../config';
import { User } from '../../entities/User';
import { LoginInput } from './LoginInput';



@ObjectType()
class LoginResponse extends User {
  @Field()
  public token: string;
}

@Resolver()
export class LoginResolver {
  @Mutation(() => LoginResponse)
  public async login(
    @Arg('data')
    loginInput: LoginInput
  ): Promise<LoginResponse> {
    const user = (await User.findOne({
      where: { email: loginInput.email }
    })) as LoginResponse;

    if (!user) {
      throw new Error('아이디와 암호를 확인해 주세요');
    }

    const valid = await bcrypt.compare(loginInput.password, user.password);

    if (!valid) {
      throw new Error('아이디와 암호를 확인해 주세요');
    }

    user.token = this.makeToken(
      user.id,
      user.nickname,
      user.email
    );

    return user;
  }

  /**
   * JWT 토큰 만들기
   */
  private makeToken(id: number, email: string, nickname: string): string {
    return jwt.sign({ id, email, nickname }, config.jwtSecret, {
      expiresIn: '200d'
    });
  }
}
