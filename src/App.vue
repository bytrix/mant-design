<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Button>ll</Button>
    <Card title="ss">a</Card>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'
import Button from '../components/Button'
import Card from '../components/Card'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Button,
    Card
  }
}
</script>

<style lang="scss">
@import url('./app.scss');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
