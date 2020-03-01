<template>
  <div>
    Computed COUNT : {{ currentCount }}<br/>
    <input type="button" @click="add()" value="더하기"/>
    <input type="button" @click="currentCount = 0" value="리셋"/>
  </div>
</template>


<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class App extends Vue {
  private count: number = 0;

  private add() {
    this.count++;
  }

  private get currentCount() {
    return this.count;
  }

  private set currentCount(value: number) {
    this.count = value;
  }
}
</script>
