<template>
  <!-- 这个label标签包裹了一个input控件，点击label的时候就会触发Vue在原生表单元素身上实现的v-model
双向绑定，即会触发radio元素的input事件，即会触发 computed 属性中的set函数 
  所以radio组件的封装外层必须嵌套一个label标签，换成div就不可以-->
  <label class="lee-radio" :class="{'is-checked': label == model}">
    <span class="lee-radio-input">
      <!-- 将span作为radio控件展现出来，隐藏原生radio控件(原生的太丑) -->
      <span class="lee-radio-inner"></span>
      <!-- label属性必传，外层v-model绑定一个变量，如果变量的值等于label的值，就选中 -->

      <!-- 传入的label值就是原生radio元素的value值，它和外层v-model绑定的value值
      等于同一个基本类型的值，但label是写死的，外层v-model传入的value值是动态的
      内层radio的v-model绑定一个计算属性model，因为不能直接修改外层v-model传入的value值
      当计算属性model和传入的label值一致时，控制span元素样式表现为选中形态-->
      <input class="lee-radio-original" type="radio" :name="name" :value="label" v-model="model" />
    </span>
    <span class="lee-radio-label">
      <slot></slot>
      <!-- 如果没有传值，就把label作为文本显示 -->
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: "lee-radio",
  props: {
    label: {
      type: [String, Boolean, Number],
      default: "",
      required: true
    },
    //value不做校验
    value: null,
    //   为表单提供一个name
    name: {
      type: String,
      default: ""
    }
  },
  //接受radiogroup组件提供的属性
  inject: {
    radioGroup: {
      default: ""
    }
  },
  computed: {
    model: {
      get() {
        return this.isGroup ? this.radioGroup.value : this.value
      },
      set(value) {
        // 触发父组件给当前组件注册的input事件
        //这里传入的value值不是组件中传入的value属性，而是原生input按钮上的value值
        //它和传入的 label 是一样的
        //还要判断是否外层有radiogroup包裹
        this.isGroup
          ? this.radioGroup.$emit("input", value)
          : this.$emit("input", value);
      }
    },
    // 用于判断radio是否被radioGroup包裹
    isGroup() {
      return !!this.radioGroup;
    }
  }
};
</script>

<style lang='stylus' scoped>
.lee-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;

  .lee-radio-input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;

    .lee-radio-inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;

      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.15s ease-in;
      }
    }

    .lee-radio-original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0px;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }

  .lee-radio-label {
    font-size: 14px;
    padding-left: 10px;
  }
}

// 选中的样式
.lee-radio.is-checked {
  .lee-radio-input {
    .lee-radio-inner {
      border-color: #409eff;
      background-color: #409eff;

      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }

  .lee-radio-label {
    color: #409eff;
  }
}
</style>