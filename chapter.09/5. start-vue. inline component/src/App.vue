<template>
<div>
  <h1>{{ title }}</h1>
  <ol>
    <Item v-for="(item, index) in todoItems"
      :key="index"
      :item="item"
      :index="index"
      @toggle="toggle"
    > </Item>
  </ol>
  <h2 v-if="remaining == 0">모두 완료</h2>
  <h3 v-else>{{remaining}}개 남음</h3>
</div>
</template>

<script lang="js">
const Item = {
  name: "item",
  props: ['item', "index"],
  methods: {
    toggle() {
      this.$emit("toggle", this.index);
    }
  },
  // render() {
  //   return  <li class={{complete: this.item.complete}}
  //     onClick={this.toggle}
  //   >{this.item.title}</li>
  // }
  template: `
   <li 
    :class="{complete: item.complete}"
    @click="toggle()"
    >
    {{ item.title }}
   </li>
 `
};

export default {
  name: 'app',
  components: {
    Item
  },
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
