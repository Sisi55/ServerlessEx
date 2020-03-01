import Vue from 'vue';
import Vuetify from 'vuetify';
import { VuetifyPreset } from 'vuetify/types/presets';
import colors from 'vuetify/es5/util/colors';

import '@mdi/font/css/materialdesignicons.min.css';
import 'vuetify/dist/vuetify.min.css';
import '@/sass/main.scss';

const opts: VuetifyPreset = {
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    dark: true,
    themes: {
      light: {
        primary: colors.green.base,
      },
      dark: {
        primary: colors.red.lighten1,
      },
    },
  },
};
Vue.use(Vuetify);

export default new Vuetify(opts);
