<template>
  <div id="app">
    <h1>this is test</h1>
    <div class="list-group">
          <!--使用指令v-link进行导航-->
          <a class="list-group-item" v-link="{ path: '/hello'}">Home</a>
          <a class="list-group-item" v-link="{ path: '/passage'}">About</a>
    </div>
    <router-view></router-view>
  </div>
</template>
<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
