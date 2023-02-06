<template>
  <div :class="totalValue" class="total-value">
    Balance: {{ total }}
  </div>
</template>

<script>
export default {
  name: "TotalBalance",
  props: {
    total: {
      type: Number,
      default: 0
    }
  },
  computed: {
    totalValue(){
      return {
        'green': this.total>0,
        'red': this.total<0
      }
    }
  }
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

.red {
  color: red;
}
</style>