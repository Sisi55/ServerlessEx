<template>
  <div id="app">
    <h1>{{ title }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import getConfig from '@/_config';

@Component({
  components: {
  },
})
export default class App extends Vue {
  public title: string = process.env.VUE_APP_TITLE;
}
</script>

<style>
</style>
