<template>
  <div>
    <MenuContainer></MenuContainer>
    <MenuOptionsVue></MenuOptionsVue>
    <SinopsisContainerVue></SinopsisContainerVue>
    <SearchSectionVue PlaceHolder="Search Characters, Islands or Objects"></SearchSectionVue >
  </div>
  
</template>

<script>
import MenuContainer from './components/MenuContainer.vue'
import MenuOptionsVue from './components/MenuOptions.vue'
import SinopsisContainerVue from './components/SinopsisContainer.vue'
import SearchSectionVue from './components/SearchSection.vue'

export default {
  name: 'App',
  components: { MenuContainer,MenuOptionsVue,SinopsisContainerVue, SearchSectionVue  },

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
