<template>
  <div class="main">
      <app-header />
      <router-view></router-view>    
  </div>
</template>

<script>
import AppHeader from './Header'

export default {
  components: { AppHeader },
}
</script>

<style lang="scss" scoped>
.main{
    width: 100%;
    min-height: 100vh;
    background: #D7D7D7;
    display: flex;
    flex-direction: column;
}
</style>
