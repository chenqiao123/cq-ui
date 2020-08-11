<template>
  <div id="app">
    <div class="content">
      <!-- sync 修饰符 是一个语法糖 使用方便  -->
      <!-- 使用sync 子组件要用到$emit("update:sync修饰的属性名") -->
      <cq-button @click="visible = true"> 显示</cq-button>
      <cq-dialog width="20%" top="200px" :visible.sync="visible">
        <template v-slot:footer>
          <cq-button @click="visible = false">取消</cq-button>
          <cq-button type="primary" @click="visible = false">确认</cq-button>
        </template>
      </cq-dialog>
      <!-- <cq-input placeholder="请入内容" v-model="username"></cq-input> -->
      <div class="char_wrapper">
        <!-- <cq-chart id="tempchart" :option="options"></cq-chart> -->
        <CqChartsLine
          id="visitorVolume"
          :data="visitorVolumeData"
          v-if="visitorVolumeData.length > 0"
        ></CqChartsLine>
        <CqChartsLine
          id="visitorVolume22"
          :data="visitorVolumeData"
          chartType="bar"
          v-if="visitorVolumeData.length > 0"
        ></CqChartsLine>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      visible: false,
      username: "ddd",
      options: {
        title: {
          text: "周销售额趋势"
        },
        xAxis: {
          name: "第一周",
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        },
        yAxis: {
          name: "销售额",
          data: "value"
        },
        series: [
          {
            data: [1200, 2230, 1900, 2100, 3500, 4200, 3985],
            type: "line"
          }
        ]
      },
      visitorVolumeData: [
        {
          name: "ddd",
          data: [
            { name: "周一", value: 2 },
            { name: "周3", value: 5 },
            { name: "周5", value: 7 }
          ]
        }
      ]
    };
  },
  methods: {
    fn(e) {
      console.log("dddd", e);
    }
  }
};
</script>

<style lang="less" scoped>
.row {
  .cq-button {
    margin-bottom: 20px;
    margin-right: 20px;
  }
}
.content {
  width: 1920px;
  height: 1080px;
  .char_wrapper {
    width: 600px;
    height: 600px;
  }
}
</style>
