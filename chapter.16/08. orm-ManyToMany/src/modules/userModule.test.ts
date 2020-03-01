import * as faker from 'faker/locale/ko';
import { UserModule } from './userModule';

describe('UserModules', () => {
  let email: string;
  let password: string;
  test('회원가입', async () => {
    email = faker.internet.userName() + faker.internet.email();
    password = faker.internet.password()
    const name = faker.internet.userAgent();
    const age = faker.random.number({min: 10, max: 100});
    const user = await UserModule.register( email, password, name, age);
    expect(user).toHaveProperty('id');
    expect(user.id).toBeGreaterThan(0);
  })

  test('로그인', async () => {
    const userModule = new UserModule();
    const user = await UserModule.login(email, password);
    expect(user).not.toBeNull();
  })
})