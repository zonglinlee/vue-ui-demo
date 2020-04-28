<template>
  <div class="lee-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "lee-radio-group",
  //父组件提供一个 provide 属性，它可以给整个后代组件中注入这个 provide 对象中的值
  //我们可以在后代组件中 通过 inject属性接受，这两个属性通常用于组件开发
  props: {
    value: null
  },
  provide() {
    return {
      radioGroup: this
    };
  }
};
</script>

<style lang='stylus' scoped></style>