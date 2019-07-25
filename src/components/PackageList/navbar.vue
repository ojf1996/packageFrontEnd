<template>
  <a-layout-header style="display: flex; justify-content: space-between; background-color : transparent;">
    <span>菜鸟包裹</span>
    <div class="button-wrapper">
      <div class="buttons">
        <a-button v-on:click="filterPackages('')">All</a-button>
        <a-button v-on:click="filterPackages('Reserved')">已预约</a-button>
        <a-button v-on:click="filterPackages('Fetched')">已取件</a-button>
        <a-button v-on:click="filterPackages('NotFetched')">未取件</a-button>
      </div>
    </div>
  </a-layout-header>
</template>

<script>
export default {
  name: 'PackageListNavbar',
  data () {
    return {}
  },
  methods: {
    async filterPackages (status) {
      if (status !== '') {
        await this.$store.dispatch('filterPackage', status)
      } else {
        await this.$store.dispatch('loadAllPackages')
      }
    }
  }
}
</script>

<style>
.button-wrapper {
  display: flex;
  justify-content: space-between;
}
</style>
