<template>
<div>
  <input v-model="message" placeholder="입력해 주세요."/><br/>
  <p>메시지 : {{ message }}</p>
  <input @input="message = $event.target.value" placeholder="입력해 주세요." v-model="message"/><br/>
  <p>메시지 : {{ message }}</p>
  <textarea v-model="message" placeholder="여러줄 입력"/><br/>
  <p style="white-space: pre-line">메시지 : {{ message }}</p>
  <p>메시지 : <span v-html="multiLineMessage"/></p>
  <input @input="message = $event.target.value" placeholder="입력해 주세요." v-model="message"/><br/>
  <p>메시지 : {{ message }}</p>
  <hr/>

  <div>
    <input type="checkbox" v-model="checkBox"/>
    {{ checkBox }}
  </div>
  <hr/>
  <div>
    <label v-for="(name, index) in names" :key="index">
      <input type="checkbox" v-model="selectedNames" :value="name"/>
      {{ name }}
    </label>
    <p>{{ selectedNames }}</p>
  </div>
  <hr/>

  <div>
    <label v-for="(name, index) in names" :key="index">
      <input type="radio" v-model="selectedName" :value="name"/>
      {{ name }}
    </label>
    <p>{{ selectedName }}</p>
  </div>
  <hr/>

  <select v-model="selectedName">
    <option v-for="(name, index) in names" :key="index" :value="name">{{name}}</option>
  </select>
  <p>{{ selectedName }}</p>
  <hr/>

  <select v-model="selectedNames" multiple>
    <option v-for="(name, index) in names" :key="index" :value="name">{{name}}</option>
  </select>
  <p>{{ selectedNames }}</p>
  <h1/>

  <select v-model="selectedOption">
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{option.text}}
    </option>
  </select>
  <p>{{ selectedOption }}</p>
  <hr/>
</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

interface IOption {
  text: string;
  value: number;
}

@Component
export default class FormComponent extends Vue {
  private message: string = '';
  private checkBox: boolean = false;
  private names: string[] = ['홍길동', '김철수', '김영희'];
  private selectedNames: string[] = ['홍길동'];
  private selectedName: string = '홍길동';

  private options: IOption[] = [
    {text: '일', value: 1},
    {text: '이', value: 2},
    {text: '삼', value: 3},
  ];
  private selectedOption: number = 1;

  private get multiLineMessage(): string {
    return this.message.replace(/\n/g, '</br>');
  }

}
</script>

