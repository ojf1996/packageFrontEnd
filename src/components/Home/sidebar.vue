<template>
  <a-menu class="sidebar">
    <a-menu-item key="1">
      <router-link to="/" >home</router-link>
    </a-menu-item>
    <a-menu-item key="2">
      <router-link to="/">add package</router-link>
    </a-menu-item>
    <a-menu-item key="3">
      <router-link to="/">reserve package</router-link>
    </a-menu-item>
  </a-menu>
</template>

<script>
export default {
  name: 'Sidebar',
  data () {
    return {}
  }
}
</script>

<style>
.sidebar {
  height: 100%;
}
</style>
