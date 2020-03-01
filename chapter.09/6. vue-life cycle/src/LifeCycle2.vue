<template>
<div>
  <h1>{{ title }} {{ num }}</h1>
</div>
</template>

<script lang="js">
export default {
  name: 'app',
  props: [
    'num'
  ],
  data: () => {
    return {
      title: ''
    };
  },
  methods: {
    addNum() {
      this.num++;
    }
  },
  computed: {
    titleAndNum() {
      return this.title + this.num;
    }
  },
  beforeCreate: function() {
    console.warn("2 =================================");
    console.warn("2 " + this.titleAndNum + " beforeCreate");
  },
  created: function() {
    console.warn("2 " + this.titleAndNum + " created");
    this.title = "Vue 라이프 사이클"
  },
  beforeMount: function() {
    console.warn("2 " + this.titleAndNum + " beforeMount");
  },
  mounted: function() {
    console.warn("2 " + this.titleAndNum + " mounted");
  },
  beforeUpdate: function() {
    console.warn("2 " + this.titleAndNum + " beforeUpdate");
  },
  updated: function() {
    console.warn("2 " + this.titleAndNum + " updated");
  },
  beforeDestroy: function() {
    console.warn("2 " + this.titleAndNum + " beforeDestory");
  },
  destroyed: function() {
    console.warn("2 " + this.titleAndNum + " destoryed");
    console.warn("2 ================================")
  }
};
</script>
