import Vue from 'vue';
import Vuetify from 'vuetify';
import { VuetifyPreset } from 'vuetify/types/presets';
// import colors from 'vuetify/es5/util/colors';

import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';

const opts: VuetifyPreset = {
  icons: {
    iconfont: 'mdi',
  },
  // theme: {
  //   dark: false,
  //   themes: {
  //     light: {
  //       primary: colors.green.base,
  //     },
  //     dark: {
  //       primary: colors.red.lighten1,
  //     },
  //   },
  // },
};
Vue.use(Vuetify);

export default new Vuetify(opts);
