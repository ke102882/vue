<template>
  <div id="app">
    <Hi :Title="Title"/>
    <!-- <InputC :text="Title" @textchange="InputChange"/> -->
    <InputC :text.sync="Title"/>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Hi from './components/Hi.vue'
import InputC from './components/input_C/index.vue'

export default {
  name: 'app',
  data(){ //建立資料，把值綁定在進口標籤
    return{
      Title:'Hi!K'
    }
  },
  components: { //進口商
    HelloWorld, //來自./components/HelloWorld.vue
    Hi,//來自./components/Hi.vue
    InputC//來自./components/input_C/index.vue
  },
  // methods: {
  //   InputChange(val){
  //     return this.Title = val;
  //   }
  // }
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
</style>
