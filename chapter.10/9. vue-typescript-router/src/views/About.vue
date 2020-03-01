
<template>
  <div class="about">
    <h1>This is an about page : {{ id }}</h1>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component({
  props: {
    id: String,
  },
})
export default class About extends Vue { }
</script>