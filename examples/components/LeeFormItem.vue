<template>
  <div class="lee-form-item">
    <label :style="labelStyle" class="lee-form-item-label">{{label}}</label>
    <div class="lee-form-item-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "lee-form-item",
  props: {
    label: {
      type: String,
      default: ""
    }
  },
  inject: ["form"],
  computed: {
    labelStyle() {
      return {
        width: this.form.labelWidth
      };
    }
  }
};
</script>

<style lang="stylus" scoped>
.lee-form-item {
  margin-bottom: 25px;

  .lee-form-item-label {
    text-align: left;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }

  .lee-form-item-content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    overflow: hidde;
  }
}
</style>