<template>
<div>
  <span>{{ message }}</span><br/>
  <span v-html="message"></span>
</div>
</template>

<script lang="js">
export default {
  name: 'HelloWorld',
  data: () => {
    return {
      message: '안녕하세요. <span style="color:red">Vue</span>입니다.',
    };
  },
};
</script>