<template>
  <button
    class="cq-button"
    :class="[
      `cq-button-${type}`,
      { 'is-plain': plain },
      { 'is-round': round },
      { 'is-circle': circle },
      { 'is-disabled': disabled }
    ]"
    @click="handleClick"
    :disabled="disabled"
  >
    <i v-if="icon" :class="icon"></i>
    <span v-if="$slots.default"> <slot></slot></span>
  </button>
</template>

<script>
export default {
  name: "CqButton",
  // 封装通用类型，需要校验props
  props: {
    type: {
      // 约束传的类型值 ,支持类型
      type: String,
      default: "default"
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    }
  }
};
</script>

<style lang="less" scoped>
.cq-button {
  display: inline-block;
  margin-bottom: 0;
  font-weight: 400;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid #d7dde4;
  white-space: nowrap;
  line-height: 1.5;
  -webkit-user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
  user-select: none;
  padding: 6px 15px;
  font-size: 12px;
  border-radius: 4px;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-transition: color 0.2s linear, background-color 0.2s linear,
    border 0.2s linear;
  transition: color 0.2s linear, background-color 0.2s linear,
    border 0.2s linear;
  color: #657180;
  background-color: #f7f7f7;
  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}
.cq-button-primary {
  color: #fff;
  background-color: #39f;
  border-color: #39f;
}
.cq-button-info {
  color: #fff;
  background-color: #2db7f5;
  border-color: #2db7f5;
}
.cq-button-success {
  color: #fff;
  background-color: #0c6;
  border-color: #0c6;
}
.cq-button-warning {
  color: #fff;
  background-color: #f90;
  border-color: #f90;
}
.cq-button-danger {
  color: #fff;
  background-color: #f30;
  border-color: #f30;
  &:hover {
    background-color: #f23000;
    border-color: #f23000;
  }
}
.cq-button-primary.is-plain {
  color: #a2a8a2;
  background-color: #ecf5ff;
  border-color: #b3d8ff;
  &:hover,
  &:focus {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
  }
}
.cq-button.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}
.cq-button.is-circle {
  border-radius: 50%;
  padding: 16px 15px;
}
.cq-button [class*="cq-icon-"] + span {
  margin-left: 5px;
}
.cq-button.is-disabled {
  cursor: not-allowed;
  color: #c3cbd6;
  background-color: #f7f7f7;
  border-color: #d7dde4;
}</style
>>
