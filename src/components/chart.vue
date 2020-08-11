<template>
  <div :id="id" class="charts_wrapper"></div>
</template>

<script>
import Charts from "@jiaminghi/charts";

export default {
  name: "CqChart",
  props: {
    id: {
      type: String,
      default: ""
    },
    option: {
      type: Object,
      default() {
        return {};
      }
    }
  },

  methods: {
    drawChart() {
      const container = document.getElementById(this.id);
      const myChart = new Charts(container);
      myChart.setOption(this.option);
    }
  },
  mounted() {
    this.drawChart();
  }
};
</script>

<style lang="less" scoped>
.charts_wrapper {
  width: 100%;
  height: 100%;
}
</style>
