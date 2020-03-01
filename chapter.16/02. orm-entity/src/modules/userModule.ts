import * as bcrypt from 'bcrypt';
import { User } from '../entity/User';

export class UserModule {
  static readonly salt = 'qeifmgi482j9gj34782jfr9';

  static async register(email: string, password: string, name: string, age: number): Promise<User>
    {
      const user = new User();
      user.email = email;
      user.password = await bcrypt.hash(password, 10);
      user.name = name;
      user.age = age;
      // return await getRepository(User).save(user);
      return await user.save()
  }

  static async login(email: string, password: string): Promise<User | null>
  {
    const user = await User.findOne({ where: { email }});
    if (!user) {
      return null;
    }
    if (!await bcrypt.compare(password, user.password)) {
      return null;
    };
    return user;
  }
}