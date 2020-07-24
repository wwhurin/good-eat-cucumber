<template>
  <div class="mainPage">
    <h1>{{ msg }}</h1>
    <Info></Info>
    <DayStatus></DayStatus>
    <button><router-link to="/chat">챗봇하기</router-link></button>
  </div>
</template>

<script>
import Info from './_Info'
import DayStatus from './_DayStatus'

export default {
  name: 'mainPage'
  , components: {
    Info: Info
    , DayStatus: DayStatus
  }
  , data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
