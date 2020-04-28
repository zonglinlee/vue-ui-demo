<template>
  <div class="lee-switch" :class="{'lee-switch-is-checked':value}" @click="handleSwitch">
    <span class="lee-switch-outer" ref="box">
      <span class="lee-switch-inner"></span>
    </span>
    <!-- 因为switch本身还是一个表单控件，需要收集数据，所以这里内嵌一个input，关联value值 -->
    <input type="checkbox" name="switch" ref="switch" class="lee-switch-control" />
  </div>
</template>

<script>
export default {
  name: "lee-switch",
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ""
    },
    inactiveColor: {
      type: String,
      default: ""
    }
  },
  methods: {
    async handleSwitch() {
      //这里父组件中v-model值立即得到改变，但是dom还没有更新渲染
      //$nextTick:Defer the callback to be executed after the next DOM update cycle
      //返回一个promise  或者 传回调函数也可以  也可以 async await
      this.$emit("input", !this.value); //触发父组件修改value值
      console.log(this.value); //false 这里的value值依然没有改变
      await this.$nextTick();
      console.log(this.value); // true 这里父组件中的value值改变了  并传递到了子组件
      this.changeBg(); //然后就可以调用changBg函数了
      this.$refs.switch.checked = this.value;
    },
    changeBg() {
      let color = this.value ? this.activeColor : this.inactiveColor;
      this.$refs.box.style.backgroundColor = color;
      this.$refs.box.style.borderColor = color;
    }
  },
  mounted() {
    this.changeBg();
    this.$refs.switch.checked = this.value;
  }
};
</script>

<style lang='stylus' scoped>
.lee-switch {
  display: inline-block;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  vertical-align: middle;

  .lee-switch-outer {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;

    .lee-switch-inner {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 50%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }

  .lee-switch-control {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
}

.lee-switch-is-checked {
  .lee-switch-outer {
    border-color: #409eff;
    background-color: #409eff;

    .lee-switch-inner {
      transform: translateX(20px);
    }
  }
}
</style>