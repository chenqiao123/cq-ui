<template>
  <div class="wapper">
    <div class="content">
      <div class="title">{{ title }}</div>
      <div class="number">{{ number }}</div>
      <div class="data">
        <slot name="charts"></slot>
      </div>
      <div class="footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cards",
  props: {
    title: {
      type: String,
      default: ""
    },
    number: {
      type: [Number, String],
      default: 0
    }
  }
};
</script>

<style lang="less">
.wapper {
  width: 100%;
  height: 100%;
  border: 1px solid #efefef;
  padding: 4% 2%;
  .content {
    width: 90%;
    margin: 0 auto;
    font-size: 14px;
    // color: #1f1f1f;

    .number {
      font-size: 48px;
      //   color: #000;
    }
    .footer {
      border-top: 1px solid #efefef;
      padding-top: 4%;
    }
    .data {
      height: 60px;
      .charts_wrapper {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
