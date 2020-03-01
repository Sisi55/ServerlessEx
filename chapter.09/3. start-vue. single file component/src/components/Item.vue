<template>
  <li 
    :class="{complete: item.complete}"
    @click="toggle()"
    >
    {{ item.title }}
   </li>

</template>

<script>
export default {
  name: "item",
  props: ['item', "index"],
  methods: {
    toggle() {
//      this.$emit("toggle", this.index);
        this.item.complete = !this.item.complete;
    }
  }
}
</script>