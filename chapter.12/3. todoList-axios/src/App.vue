<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <TodoList></TodoList>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TodoList from './components/TodoList';
import getConfig from '@/_config';

@Component({
  components: {
    TodoList,
  },
})
export default class App extends Vue {
  public title: string = getConfig().title;

  private created() {
    console.log(process.env);
  }
}
</script>

<style>
</style>
