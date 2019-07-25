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
      <a-form-item v-bind="formItemLayout" label="收件人">
        <a-input
         v-decorator="['user']"
        />
      </a-form-item>
      <a-form-item v-bind="formItemLayout" label="电话">
        <a-input
         v-decorator="['phone']"
        />
      </a-form-item>
      <a-form-item v-bind="formItemLayout" label="重量">
        <a-input
         v-decorator="['weight']"
        />
      </a-form-item>
      <a-form-item
        :wrapper-col="{
          xs: { span: 24, offset: 0 },
          sm: { span: 16, offset: 8 },
        }"
      >
        <a-button type="primary" html-type="submit">
          Submit
        </a-button>
        <a-button type="danger" html-type="reset" style="margin-left: 5px;">
          cancel
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  name: 'NewPackageAdder',
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
          'userName': fieldsValue['user'],
          'userPhone': fieldsValue['phone'],
          'status': 'NotFetched',
          'wight': parseFloat(fieldsValue['weight'])
        }
        this.$store.dispatch('addNewPackage', values)
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
