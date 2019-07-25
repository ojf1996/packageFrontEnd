<template>
  <a-layout style="height:100%;width:100%;">
    <a-layout-sider>
      <Sidebar />
    </a-layout-sider>
    <a-layout-content>
      <router-view></router-view>
    </a-layout-content>
  </a-layout>
</template>

<script>
import Sidebar from '@/components/Home/sidebar'

export default {
  name: 'Home',
  components: {
    Sidebar
  },
  data () {
    return {}
  }
}
</script>
