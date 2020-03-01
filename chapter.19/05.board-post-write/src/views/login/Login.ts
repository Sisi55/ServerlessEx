import LOGIN from '@/graphql/mutation/login.gql';
import '@/views/register/Register.scss';
import { Component, Vue } from 'vue-property-decorator';
import WithRender from './Login.html';

@WithRender
@Component({
  props: {},
  components: {},
})
export default class Login extends Vue {
  private form: any = {
    email: '',
    password: '',
  };

  private async login(event: any) {
    event.preventDefault();

    try {
      const result = await this.$apollo.mutate({
        mutation: LOGIN,
        // mutation: gql`mutation Login($data: LoginInput!) {
        //   login(data: $data) {
        //     id
        //     email
        //     nickname
        //     role
        //     token
        //   }
        // }`,
        variables: {
            data: {
              email: this.form.email,
              password: this.form.password,
            },
        },
      });

      if (result.data && result.data.login) {
        this.$store.commit('User/login', result.data.login);
        this.$router.push('/');
        return;
      }

      if (result.errors) {
        for (const e of result.errors) {
          alert(e.message);
        }
      }
    } catch (e) {
      console.error(e);
    }
  }
}
