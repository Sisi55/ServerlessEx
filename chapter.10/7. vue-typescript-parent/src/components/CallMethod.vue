<template>
<p>
  Call Method : {{ name }}
  <input type="button" value="update" @click="CallMethod('call method')"/>
</p>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
@Component
export default class CallMethod extends Vue {
  @Prop(String)
  private name!: string;

  @Prop(Function)
  private CallMethod!: object;
}
</script>