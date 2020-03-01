<template>
<p>
  Call Emit : {{ name }}
  <input type="button" value="update" @click="updateName('call emit')"/>
</p>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component
export default class CallEmit extends Vue {
  @Prop(String)
  private name!: string;

  private updateName(value: string) {
    this.$emit('CallEmit', value);
  }
}
</script>