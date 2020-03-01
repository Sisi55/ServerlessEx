<template>
<div>
  {{ name }} <br/>
  <b>{{ userName }}</b>
</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class PropsSample extends Vue {
  @Prop(String)
  private readonly name: string | undefined;

  get userName() {
    return this.name;
  }
}
</script>
