<template>
  <div class="input_form">
    <el-card>
      <el-form :model="formData" ref="addItemForm" :rules="rules" label-position="top">
        <!--        <el-form-item label="Type" prop="type">-->
        <!--          <el-select v-model="formData.type" placeholder="Choose type...">-->
        <!--            <el-option label="Income" value="Income"/>-->
        <!--            <el-option label="Outcome" value="Outcome"/>-->
        <!--          </el-select>-->
        <!--        </el-form-item>-->
        <el-form-item label="Comment" prop="comment">
          <el-input v-model="formData.comment"/>
        </el-form-item>
        <el-form-item label="Value" prop="value">
          <el-input v-model.number="formData.value" @keyup.enter="onSubmit"/>
        </el-form-item>
        <el-button type="primary" @click="onSubmit">Submit</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "Form",
  emits: ['submitForm'],
  data() {
    return {
      formData: {
        type: 'Income',
        comment: '',
        value: null
      },
      rules: {
        type: [{required: true, message: 'Please select type', trigger: 'blur'}],
        comment: [{required: true, message: 'Please select comment', trigger: 'change'}],
        value: [{required: true, type: 'number', message: 'Value must be a number', trigger: 'change'}]
      }
    }
  },
  methods: {
    onSubmit() {
      this.$refs.addItemForm.validate((valid) => {
        if (valid) {
          if (this.formData.value > 0) {
            this.formData.type = 'Income'
          } else {
            this.formData.type = 'Outcome'
          }
          this.$emit('submitForm', {...this.formData})
          this.$refs.addItemForm.resetFields()
        }
      })
    }
  }
}
</script>

<style scoped>
.input_form {
  max-width: 500px;
  margin: 0 auto;
}
</style>