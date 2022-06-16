<template>
  <div>
    <MenuContainer></MenuContainer>
    <MenuOptionsVue></MenuOptionsVue>
  </div>
  
</template>

<script>
import MenuContainer from './components/MenuContainer.vue'
import MenuOptionsVue from './components/MenuOptions.vue'

export default {
  name: 'App',
  components: { MenuContainer,MenuOptionsVue },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
