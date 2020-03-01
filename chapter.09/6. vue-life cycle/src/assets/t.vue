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
    console.log("beforeCreate");
  },
  created: function() {
    console.log("created");
    this.title = "Vue 라이프 사이클"
  },
  beforeMount: function() {
    console.log("beforeMount");
  },
  mounted: function() {
    console.log("mounted");
  },
  beforeUpdate: function() {
    console.log("beforeUpdate");
  },
  updated: function() {
    console.log("updated");
  },
  beforeDestroy: function() {
    console.log("beforeDestory");
  },
  destroyed: function() {
    console.log("destoryed");
  }
};
</script>
