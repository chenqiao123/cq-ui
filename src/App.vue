<template>
  <div id="app">
    <cq-input>ddd</cq-input>
    <cq-chart></cq-chart>
  </div>
</template>

<script>
import CqInput from "./components/input";
import CqChart from "./components/my-charts";
export default {
  name: "App",
  components: {
    CqInput,
    CqChart
  }
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
