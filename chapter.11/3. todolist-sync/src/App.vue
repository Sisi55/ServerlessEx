<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <TitleLabel :title.sync="title" />
    <TodoList></TodoList>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import TodoList from './components/TodoList';
import TitleLabel from './components/TitleLabel';

@Component({
  components: {
    TitleLabel,
    TodoList,
  },
})
export default class App extends Vue {
  public title: string = 'Todo List';
}
</script>

<style>
</style>
