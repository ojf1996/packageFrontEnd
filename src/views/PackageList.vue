<template>
  <div class="package-page">
    <PackageListNavbar />
    <div class="package-list">
      <a-table :dataSource="packages" :columns="columns" :loading="loading" rowKey="id">
        <template slot="operation" slot-scope="text, record">
          <a-button v-if="record.status == 'Fetched'" v-on:click="fetchPackage(record)">确认收货</a-button>
        </template>
      </a-table>
    </div>
  </div>
</template>

<script>
import PackageListNavbar from '@/components/PackageList/navbar'
import { mapGetters } from 'vuex'

const columns = [
  {
    title: '运单号',
    dataIndex: 'id'
  },
  {
    title: '收件人',
    dataIndex: 'userName'
  },
  {
    title: '电话',
    dataIndex: 'userPhone'
  },
  {
    title: '状态',
    dataIndex: 'status'
  },
  {
    title: '预约时间',
    dataIndex: 'fetchTime'
  },
  {
    title: '',
    dataIndex: 'operation',
    scopedSlots: { customRender: 'operation' }
  }
]

export default {
  name: 'PackageList',
  data () {
    return {
      columns: columns,
      loading: false
    }
  },
  components: {
    PackageListNavbar
  },
  computed: {
    ...mapGetters(['packages'])
  },
  async mounted () {
    await this.loadAllPackage()
  },
  methods: {
    async loadAllPackage () {
      this.loading = true
      await this.$store.dispatch('loadAllPackages')
      this.loading = false
    },
    async fetchPackage (item) {
      item.status = 'Fetched'
      await this.$store.dispatch('updatePackage', {
        id: item.id,
        data: item
      })
      await this.loadAllPackage()
    }
  }
}
</script>

<style>
.package-page {
  height: inherit;
  width: 100%;
}
.package-list {
  height:100%;
  display: flex;
  align-items:center;
  justify-content: center;
}
</style>
