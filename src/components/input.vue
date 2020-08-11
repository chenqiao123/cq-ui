<template>
<div class="cq-input">
    <input :type="type" class="cq-input-inner" :class="{'is-disabled':disabled}"
     :placeholder="placeholder"
     :name="name"
     :disabled="disabled"
     :value="value"
     @input="handleInput"
     />
</div>
</template>

<script>
export default {
  name: 'CqInput',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    }

  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style lang="less" >
.cq-input{
        display: inline-block;
    width: 100%;
    position: relative;
    .cq-input-inner{
        height: 32px;
    line-height: 1.5;
    padding: 4px 7px;
    font-size: 12px;
    border: 1px solid #d7dde4;
    border-radius: 4px;
    color: #657180;
    background-color: #fff;
    background-image: none;
    cursor: text;
    -webkit-transition: border .2s ease-in-out,background .2s ease-in-out,box-shadow .2s ease-in-out;
    transition: border .2s ease-in-out,background .2s ease-in-out,box-shadow .2s ease-in-out;
       &.is-disabled{
      cursor: not-allowed;
          color: #c3cbd6;
    background-color: #f7f7f7;
    border-color: #d7dde4;
}
   }

}
</style>
