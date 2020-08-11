<template>
  <div class="DatePicker_wrapper">
    <Row>
      <i-col span="12">
        <Row>
          <i-col span="8">
            <span class="timebtn" @click="handleToday">今日</span>
          </i-col>
          <i-col span="8">
            <span class="timebtn" @click="handleWeek">过去7天</span>
          </i-col>
          <i-col span="8">
            <span class="timebtn" @click="handleMoth">过去一个月</span>
          </i-col>
        </Row>
      </i-col>
      <i-col span="10" offset="2">
        <DatePicker
          type="daterange"
          placement="bottom-end"
          placeholder="Select date"
          style="width: 100%"
          :value="value"
          @on-change="onChange"
        ></DatePicker>
      </i-col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'MyDatePicker',
  props: {
    value: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    onChange (value, date) {
      console.log('value,date===', value, date)
      this.$emit('update:value', value)
    },
    formatTimer: function (value) {
      const date = new Date(value)
      const y = date.getFullYear()
      let MM = date.getMonth() + 1
      MM = MM < 10 ? '0' + MM : MM
      let d = date.getDate()
      d = d < 10 ? '0' + d : d

      return y + '-' + MM + '-' + d
    },
    handleToday () {
      const date = new Date()
      const showvalue = [this.formatTimer(date), this.formatTimer(date)]
      this.$emit('update:value', showvalue)
    },
    handleWeek () {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      const showvalue = [this.formatTimer(start), this.formatTimer(end)]
      this.$emit('update:value', showvalue)
    },
    handleMoth () {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      const showvalue = [this.formatTimer(start), this.formatTimer(end)]
      this.$emit('update:value', showvalue)
    }
  }
}
</script>

<style lang="less" scoped>
.timebtn {
  cursor: pointer;
  display: inline-block;
  line-height: 34px;
  height: 34px;
  color: #626d91;
  display: inline-block;
  width: 100%;
  text-align: center;
}
</style>
