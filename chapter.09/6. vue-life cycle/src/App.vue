<template>
  <div>
    <LifeCycle1 num="1" v-if="flag == true"></LifeCycle1>
    <LifeCycle2 num="2" v-else></LifeCycle2>

    <input type="button" @click="toggle()" value="전환하기"/>
  </div>
</template>

<script lang="js">
import LifeCycle1 from "./LifeCycle1.vue";
import LifeCycle2 from "./LifeCycle2.vue";

export default {
  components: {
    LifeCycle1,
    LifeCycle2
  },
  data: () => {
    return {
      flag: true 
    };
  },
  methods: {
    toggle() {
      console.log("============= Click Toggle ===============")
      this.flag = !this.flag;
    }
  }
};
</script>