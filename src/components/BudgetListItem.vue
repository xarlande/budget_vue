<template>
  <div
      class="list-item"
      v-for="(item, idx) in list"
      :key="idx"
  >
    <span class="budget-comment">{{ item.comment }}</span>
    <span class="budget-value">{{ item.value }}</span>
    <div class="plus-and-minus">
      <el-icon v-if="item.type === 'Income'">
        <Plus/>
      </el-icon>
      <el-icon v-else>
        <Minus/>
      </el-icon>
    </div>
    <ElButton type="danger" size="default" @click="budgetItemRemove(item.id)">Delete</ElButton>
  </div>
</template>

<script>
export default {
  name: "BudgetListItem",
  props: ['list'],
  emits: ['budgetItemRemove'],
  methods: {
    budgetItemRemove(id) {
      this.$emit('budgetItemRemove', id)
    }
  }
}
</script>

<style scoped>
.list-item {
  display: flex;
  align-items: center;
  padding: 10px 15px;
}

.budget-value {
  font-weight: bold;
  margin-left: auto;
  margin-right: 20px;
}

.plus-and-minus {
  margin-right: 20px;
}
</style>