<template>
  <div class="package-adder">
    <a-form
      :form="form"
      @submit="handleSubmit"
    >
      <a-form-item v-bind="formItemLayout" label="运单号">
        <a-input
         v-decorator="['id']"
        />
      </a-form-item>
      <a-form-item v-bind="formItemLayout" label="取件时间">
        <a-date-picker
          v-decorator="['time']"
          show-time
          format="YYYY-MM-DD HH:mm:ss"
        />
      </a-form-item>
      <a-form-item
        :wrapper-col="{
          xs: { span: 24, offset: 0 },
          sm: { span: 16, offset: 8 },
        }"
      >
        <a-button type="primary" html-type="submit">
          预约
        </a-button>
        <a-button type="danger" html-type="reset" style="margin-left: 5px;">
          取消
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  name: 'ReservePackage',
  data () {
    return {
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 }
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 }
        }
      }
    }
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, fieldsValue) => {
        if (err) {
          return
        }
        const values = {
          'id': parseInt(fieldsValue['id']),
          'fetchTime': new Date(fieldsValue['time']).valueOf(),
          'status': 'Reserved'
        }
        this.$store.dispatch('updatePackage', { id: values.id, data: values })
      })
    }
  },
  beforeCreate () {
    this.form = this.$form.createForm(this)
  }
}
</script>

<style>
.package-adder {
  height:100%;
  display: flex;
  align-items:center;
  justify-content: center;
}
</style>
