<template>
  <div class="hello">
    <p>{{ $store.state.Foo.text }}</p>
    <p>{{ $store.state.Foo.text2 }}</p>
    <p>{{ $store.getters['Foo/textUpper'] }}</p>
    <input type="button" @click="$store.commit('Foo/setText', 'hello')" value="mutation" />
    <input type="button" @click="$store.dispatch('Foo/updateText', 'world')" value="action" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

}
</script>
