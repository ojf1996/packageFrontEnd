<template>
  <a-layout-header style="display: flex; justify-content: space-between; background-color : transparent;">
    <span>菜鸟包裹</span>
    <div class="button-wrapper">
      <div class="buttons">
        <a-button>All</a-button>
        <a-button>已预约</a-button>
        <a-button>已取件</a-button>
        <a-button>未取件</a-button>
      </div>
    </div>
  </a-layout-header>
</template>

<script>
export default {
  name: 'PackageListNavbar',
  data () {
    return {}
  }
}
</script>

<style>
.button-wrapper {
  display: flex;
  justify-content: space-between;
}
</style>
