<template lang="jade">
  h1 hello, this is passage
  h2 {{ 'this is my name:' + name}}
  div(v-for="passag in passages")
    p {{ passag.title}}
    p {{ passag.content }}
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      name: "CJG",
      passages: [
        {
          title: "test",
          content: "content"
        },
        {
          title: "test",
          content: "content"
        },
        {
          title: "test",
          content: "content"
        },
        {
          title: "test",
          content: "content"
        }
      ]
    }
  }
}
</script>