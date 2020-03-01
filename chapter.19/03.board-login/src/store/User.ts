import { gql } from 'apollo-boost';
import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import apolloClient from '../utils/graphql';

@Module({
  namespaced: true,
})
class User extends VuexModule {
  public user: IUser|null = null;

  @Mutation
  public login(data: IAuth | null) {
    if (data === null) { return; }
    this.user = {
      email: data.email,
      id: data.id,
      nickname: data.nickname,
      role: data.role,
    } as IUser;
    localStorage.setItem('user', JSON.stringify(this.user));
    localStorage.setItem('token', data.token);
  }

  @Mutation
  public logout() {
    this.user = null;
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }

  @Mutation
  public startLogin() {
    const token: string | null = localStorage.getItem('token');
    if (token === null) {
      return;
    }
    const user = localStorage.getItem('user');
    if (user !== null) {
      this.user = JSON.parse(user);
    }
  }

  @Action({commit: 'login'})
  public async loginAction(form: any) {
    const client = apolloClient();
    const result: any = await client.mutate({
        mutation: gql`mutation Login($data: LoginInput!) {
          login(data: $data) {
            id
            email
            nickname
            token
          }
        }`,
        variables: {
            data: {
              email: form.email,
              password: form.password,
            },
        },
      });
    if (!result.data) {
      return null;
    }

    return result.data.login;
  }


  get isLogin(): boolean {
    return !!this.user;
  }

  get userInfo(): IUser|null {
    return this.user;
  }
}

export default User;
