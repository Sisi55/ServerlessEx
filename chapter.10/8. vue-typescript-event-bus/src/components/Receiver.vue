<template>
<div>
  {{ message }}
</div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { EventBus } from '@/EventBus';
@Component
export default class Receiver extends Vue {
  private message: string = '';

  private onReceive(msg: string) {
    this.message = msg;
  }

  private created() {
    EventBus.$on('MESSAGE', this.onReceive);
  }
}
</script>
