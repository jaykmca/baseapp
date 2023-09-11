<template>
  <aside class="sidebar">
    <h2>Sidebar Menu</h2>
    <router-link to="/appone">
      <div class="menu-item">Go to App One</div>
    </router-link>
    <router-link to="/apptwo">
      <div class="menu-item">Go to App Two</div>
    </router-link>
  </aside>
</template>

<script>
export default {
  name: 'SideBarMenu',
};
</script>

<style scoped>
/* Add styling for the sidebar here */
.sidebar {
  position: fixed; /* Make the sidebar fixed to the viewport */
  top: 0;
  left: 0;
  bottom: 0;
  width: 200px;
  background-color: #333;
  color: #fff;
  overflow-y: auto; /* Add vertical scroll if content exceeds height */
  padding: 10px; /* Add padding to create space around the content */
}

.menu-title {
  font-weight: bold;
  margin-bottom: 15px; /* Add margin at the bottom of the title */
  margin-top: 15px;
}

.menu-item {
  color: #fff;
  text-decoration: none;
  padding: 10px;
  margin-bottom: 5px; /* Add margin between menu items */
  
}

.menu-item:hover {
  background-color: #555;
}
</style>