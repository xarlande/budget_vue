<template>
  <div class="total-value green" v-if="total>0">
    Balance: {{ total }}
  </div>
  <div class="total-value red" v-else-if="total<0">
    Balance: {{ total }}
  </div>
  <div class="total-value null" v-else>
    Balance: {{ total }}
  </div>
</template>

<script>
export default {
  name: "TotalBalance",
  emits: ['TotalValue'],
  props: {
    total: {
      type: Number,
      default: 0
    }
  },
  computed: {}
}
</script>

<style scoped>
.total-value {
  font-size: 26px;
  text-transform: uppercase;
  padding: 20px;
  text-align: center;
}

.green {
  color: #096c09;
}

.null {
  color: black;
}

.red {
  color: red;
}
</style>