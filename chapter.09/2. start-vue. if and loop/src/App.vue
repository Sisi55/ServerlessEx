<template>
<div>
  <h1>{{ title }}</h1>
  <ol>
    <li v-for="(item, index) in todoItems" 
      :key="index"
      :class="{complete: item.complete}"
      @click="toggle(index)"
    > 
      {{ item.title }}
    </li>
  </ol>
  <h2 v-if="remaining == 0">모두 완료</h2>
  <h3 v-else>{{remaining}}개 남음</h3>
</div>
</template>

<script lang="js">
export default {
  name: 'app',
  data: () => {
    return {
      title: '오늘의 할일',
      todoItems: [
        { title: "운동하기", complete: false},
        { title: "물마시기", complete: true},
        { title: "잠자기", complete: false},
      ]
    };
  },
  methods: {
    toggle(index) {
      console.log(index + " : " + this.todoItems[index].title);
      this.todoItems[index].complete = !this.todoItems[index].complete 
    }
  },
  computed: {
    remaining() {
      return this.todoItems.filter((i) => {
        return i.complete == false;
      }).length
    }
  }
};
</script>

<style scoped>
.complete {
  text-decoration: line-through;
}
</style>
