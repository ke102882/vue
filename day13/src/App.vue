<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/Ke">Ke</router-link> |
      <router-link to="/iron">iron</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>

import Iron from './views/Iron/index.vue'

export default {
  name: 'app',
  components: { 
    Iron,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router-link-exact-active{
  color: #f00;
} 

</style>
