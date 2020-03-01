import REGISTER from '@/graphql/mutation/register.gql';
import { Component, Vue } from 'vue-property-decorator';
import '../register/Register.scss';
import WithRender from './Register.html';

@WithRender
@Component({
  props: {},
  components: {},
})
export default class Register extends Vue {
  private form = {
    nickname: '',
    email: '',
    password: '',
    repassword: '',
  };

  private async register(event: any) {
    event.preventDefault();

    try {
      const result = await this.$apollo.mutate({
        mutation: REGISTER,
        variables: {
            data: {
              nickname: this.form.nickname,
              email: this.form.email,
              password: this.form.password,
            },
        },
      });

      if (result.data && result.data.register) {
        this.$router.push('/login');
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
