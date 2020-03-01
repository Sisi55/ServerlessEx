<template>
  <li 
    :class="{complete: this.item.complete}"
    @click="this.toggle"
    >
    {{ this.item.title }}
   </li>

</template>

<script>
export default {
  name: "item",
  props: ['item', "index"],
  methods: {
    toggle() {
      this.$emit("toggle", this.index);
    }
  }
}
</script>