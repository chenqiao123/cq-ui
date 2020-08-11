<template>
<!-- self 只有点击自己出发 -->
<transition name="dialog-fade">
  <div class="cq-dialog-wrapper" v-show="visible" @click.self="handleClose">
      <div class="cq-dialog" :style="{width,top}">
          <div class="cq-dialog-header">
              <!-- 居名插槽 -->
              <slot name="title">
                   <span class="cq-dialog-title">{{title}}</span>
              </slot>

              <cq-button @click="handleClose">
                  <i class="cq-icon-message"></i>
              </cq-button>
          </div>
          <div class="cq-dialog-body">
              <slot></slot>
          </div>
          <div class="cq-dialog-footer">
              <slot name="footer"></slot>
          </div>
      </div>
  </div>
</transition>
</template>

<script>
export default {
  name: 'CqDialog',
  props: {
    title: {
      type: String,
      default: '标题'
    },
    width: {
      type: String,
      default: '50%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose () {
      this.$emit('update:visible', false)
    }
  }

}
</script>

<style lang="less" scoped>
.cq-dialog-wrapper{
     position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 1000;
    left: 0;
        background-color: rgba(55,55,55,.6);
    height: 100%;
    .cq-dialog{
            width: auto;
    margin: 0 auto;
    position: relative;
    outline: 0;
    top: 100px;
        position: relative;
    background-color: #fff;
    border: 0;
    border-radius: 6px;
    background-clip: padding-box;
    }
    .cq-dialog-header{
            border-bottom: 1px solid #e3e8ee;
    padding: 14px 16px;
    line-height: 1;
    }
    .cq-dialog-body{    padding: 16px;
    font-size: 12px;
    line-height: 1.5;}
    .cq-dialog-footer{
    border-top: 1px solid #e3e8ee;
    padding: 12px 18px;
    text-align: right;
    }
}
.dialog-fade-enter-active{
animation: fade 0.5s
}
.dialog-fade-leave-active{
    // 动画效果反向执行
animation: fade 0.5s  reverse
}
@keyframes fade {
    0%{
        opacity: 0;
        transform: translateY(-20px)
    }
    100%{
        opacity: 1;
          transform: translateY(0)
    }
}
</style>
