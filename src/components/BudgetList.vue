<template>
  <div class="budget-list-wrap">
    <el-card :header="header">
      <template v-if="isEmpty">
        <div
            class="list-item"
            v-for="(item, idx) in list"
            :key="idx"
        >
          <span class="budget-comment">{{ item.comment }}</span>
          <span class="budget-value">{{item.value}}</span>
          <ElButton type="danger" size="default" @click="budgetRemove(item.id)">Delete</ElButton>
        </div>
      </template>
      <ElAlert v-else type="info" :title="emptyTitle" :closable="false" show-icon effect="light"/>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "BudgetList",
  props: ['list'],
  data() {
    return {
      header: "Budget  List",
      emptyTitle: 'Empty List'
    }
  },
  methods: {
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
.list-item{
  display: flex;
  align-items: center;
  padding: 10px 15px;
}
.budget-value{
  font-weight: bold;
  margin-left: auto;
  margin-right: 20px;
}
</style>