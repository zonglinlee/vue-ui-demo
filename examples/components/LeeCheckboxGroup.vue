<template>
  <div class="lee-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "lee-checkbox-group",
  props: {
    value: {
      type: Array
    }
  },
  provide() {
    return {
      checkboxGroup: this
    };
  }
};
</script>

<style lang="stylus" scoped></style>