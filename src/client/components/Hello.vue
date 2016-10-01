<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
  <a v-link="{name: 'nav'}">this is test</a>  
  <button @click="goto()">click here</button>
  <router-view></router-view>
</template>

<script>
export default {
  data () {
    return {
      // Note: modifying `msg` below will not cause changes to occur with
      // hot-reload. As reloaded components preserve their initial state,
      // modifying these values will have no effect.
      msg: 'Hello World!'
    }
  },
  methods: {
    goto: function() {
      alert("hello");
      console.log(this.$route);
      this.$route.router.go({"name":"passage"});
    }
  }
}
</script>
