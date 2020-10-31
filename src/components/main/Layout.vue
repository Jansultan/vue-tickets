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
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
}
</style>
