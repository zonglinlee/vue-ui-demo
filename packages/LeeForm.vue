<template>
  <div class="lee-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "lee-form",
  props: {
    model: {
      type: Object,
      required: true
    },
    labelWidth: {
      type: String,
      default: "80px"
    }
  },
  provide() {
    return {
      form: this
    };
  }
};
</script>

<style>
</style>