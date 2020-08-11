import CqButton from './button.vue'
import CqDialog from './dialog.vue'
import CqInput from './input.vue'
import CqChartsLine from './my-charts.vue'
import CqChartsFunnel from './my-charts-funnel.vue'
import CqChartsPie from './my-charts-pie.vue'
const components = [
  CqButton,
  CqInput,
  CqDialog,
  CqChartsLine,
  CqChartsFunnel,
  CqChartsPie
]
const install = function (Vue) {
  // 全局注册所有的组件
  components.forEach((item) => {
    Vue.component(item.name, item)
  })
}
// 判断是否直接引入js，不是模块化开发的时候，可以直接引用如果是就不用Vue.use（）
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default install
