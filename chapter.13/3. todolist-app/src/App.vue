<template>
  <div id="app">
    <v-app id="inspire">
      <v-card min-width="400" max-width="800" class="mx-auto">

        <v-system-bar color="indigo">
          <v-spacer></v-spacer>
          <v-icon>wifi</v-icon>
          <v-icon>signal_cellular_off</v-icon>
          <v-icon>battery_full</v-icon>
          <span>12:30</span>
        </v-system-bar>

        <v-toolbar color="indigo" dark >
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
          <v-toolbar-title>Todo List</v-toolbar-title>
        </v-toolbar>

        <TodoList></TodoList>

      </v-card>
    </v-app>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import TodoList from './components/TodoList';

@Component({
  components: {
    TodoList,
  },
})
export default class App extends Vue {
}
</script>

<style>
</style>
