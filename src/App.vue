<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <SideBarMenu/> -->
  <!-- <h1>Base appliation</h1> -->
  <!-- <router-view/> -->

  <div class="app-container">
    <aside class="sidebar">
      <SideBarMenu/>
    </aside>
    <main class="content">
      <!-- Content displayed here based on the route -->
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import SideBarMenu from './components/SideBarMenu.vue'

export default {
  name: 'App',
  components: {
    //HelloWorld,
    SideBarMenu
  }
}
</script>

<style>

.app-container {
  display: flex;
}
.content {
  margin-left: 220px; /* Adjust to match the sidebar width + spacing */
  padding: 20px; /* Add padding to create space around the content */
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
