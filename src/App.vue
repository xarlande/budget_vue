<script>
import {defineComponent} from "vue";
import BudgetList from "@/components/BudgetList.vue";
import TotalBalance from "@/components/TotalBalance.vue";

export default defineComponent({
  components: {TotalBalance, BudgetList},
  data() {
    return {
      list: {
        1: {
          type: 'INCOME',
          value: 100,
          comment: 'Some comment',
          id: 1
        },
        2: {
          type: 'INCOME',
          value: -60,
          comment: 'Some comment',
          id: 2
        }
      }
    }
  },
  computed: {
    totalBalance(){
      return Object.values(this.list).reduce((acc,item) => acc+item.value, 0)
    }
  },
  methods: {
    removeChild(item){
      this.list = this.list.filter(newList => newList !== item )
    }
  }
})
</script>

<template>
  <TotalBalance :total="totalBalance" :key="list" @budgetRemove="removeChild"/>
  <BudgetList :list="list"/>
</template>

<style scoped>

</style>
