<template>
  <div class="package-list">
    <a-table :dataSource="data" :columns="columns" :loading="loading">
      <template slot="operation" slot-scope="text, record, index">
        {{text + recode + index}}
        <a-button />
      </template>
    </a-table>
  </div>
</template>

<script>
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
      data: [],
      columns: columns,
      loading: false
    }
  }
}
</script>

<style>
.package-list {
  height:100%;
  display: flex;
  align-items:center;
  justify-content: center;
}
</style>
