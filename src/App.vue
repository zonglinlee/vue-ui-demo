<template>
  <div id="app">
    <lee-button >hello</lee-button>
    <lee-button  type='primary'>hello</lee-button>
    <lee-button  type='primary' plain>hello</lee-button>
    <lee-button  type='primary' plain round>hello</lee-button>

  </div>
</template>

<script>
import Vue from 'vue'
import LeeButton from "./components/LeeButton.vue";
Vue.component(LeeButton.name, LeeButton);
export default {
  name: "App",
  components: {}
};
</script>
<style>
</style>
