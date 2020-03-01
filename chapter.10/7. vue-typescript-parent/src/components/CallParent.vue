<template>
<p>
  Call Parent : {{ name }}
  <input type="button" value="update" @click="updateName('call direct')"/>
</p>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component
export default class CallEmit extends Vue {
  @Prop(String)
  private name!: string;

  private updateName(value: string) {
    // @ts-ignore
    this.$parent.callMe(value);
  }
}
</script>