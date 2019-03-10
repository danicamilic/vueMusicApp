<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import unirest from 'unirest';
export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data() {
    return {
     apiKey: '24e2ae9d1ef903d06d2a13408b988016'
    }
  },
  created() {

  }
}
</script>
