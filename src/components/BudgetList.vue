<template>
  <div class="budget-list-wrap">
    <el-card :header="header">
      <template v-if="isEmpty">
        <BudgetListItem :list="list" @budget-item-remove="budgetRemove"/>
      </template>
      <ElAlert v-else type="info" :title="emptyTitle" :closable="false" show-icon effect="light"/>
    </el-card>
  </div>
</template>

<script>
import BudgetListItem from "@/components/BudgetListItem.vue";

export default {
  name: "BudgetList",
  components: {BudgetListItem},
  emits: ['budgetRemove'],
  props: ['list'],
  data() {
    return {
      header: "Budget  List",
      emptyTitle: 'Empty List'
    }
  },
  methods:{
    budgetRemove(id){
      this.$emit('budgetRemove', id)
    }
  }
  ,
  computed: {
    isEmpty(){
      return Boolean(Object.keys(this.list).length)
    }
  }
}
</script>

<style scoped>
.budget-list-wrap {
  margin: 20px auto 0;
  max-width: 500px;
}
</style>