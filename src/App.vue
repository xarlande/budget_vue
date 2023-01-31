<template>
  <TotalBalance :total="totalBalance"/>
  <Form @submit-form="onFormSubmit"/>
  <BudgetList :list="list" @budget-remove="onDeleteItem"/>
</template>

<script>
import {defineComponent} from "vue";
import BudgetList from "@/components/BudgetList.vue";
import TotalBalance from "@/components/TotalBalance.vue";
import Form from "@/components/Form.vue";

export default defineComponent({
  components: {Form, TotalBalance, BudgetList},
  data() {
    return {
      list: [
        {
          type: 'INCOME',
          value: 100,
          comment: 'Some comment',
          id: 1
        },
        {
          type: 'INCOME',
          value: -62,
          comment: 'Some comment',
          id: 2
        }],
    }
  },
  computed: {
    totalBalance() {
      return Object.values(this.list).reduce((acc, item) => acc + item.value, 0)
    }
  },
  methods: {
    onDeleteItem(i) {
      this.list = this.list.filter(item => item.id !== i)
    },
    onFormSubmit(data){
      const newObj = {
        ...data,
        id: String(Math.random())
      }
      this.list.push(newObj)
    }
  }
})
</script>

<style scoped>

</style>
