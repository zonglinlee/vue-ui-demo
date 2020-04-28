<template>
  <!-- 组件身上注册了一个 'click' 事件 ，组件内部需要在适当的时机 比如这里的  
  用户点击  的时候调用这个 绑定在组件上的监听函数  它的监听事件名称是 'click'，这里的 click 名称
  和原生click 事件名称一样，但意义不一样，理解成自定义事件 当然你也可以自定义其他名称-->

  <!-- 组件内部需要调用 $emit('eventName',eventObj) 触发组件上绑定的回调函数 -->
  <button class="lee-button" 
  :class="[`lee-button-${type}`,{'is-plain':plain,'is-round':round,'is-disabled':disabled}]"
  :disabled="disabled"
  @click="handleClick"
  >
    <!-- 如果不传入icon  就不显示i标签 -->
    <i v-if="icon" :class="`iconfont icon-${icon}`"></i>
    <!-- 如果不传入文字，之传入图标，就需要对span做处理，否则span元素有margin-left样式存在 -->
    <!-- 如果传入了默认slot，就显示span，否则不显示 -->
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "leeButton",
  methods:{
    handleClick(e){
      //通过原生click事件触发handleClick回调，进而调用$emit()函数，触发组件上绑定的'click'自定义事件
      //Trigger an event on the current instance.
      // Any additional arguments will be passed into the listener’s callback function.
      this.$emit('click',e)
    }
  },
  props: {
    type: {
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
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped lang='stylus'>
.lee-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #ffffff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  // 禁止元素的文字被选中
  -moz-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;

  &:hover, &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}

.lee-button-primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;

  &:hover, &:focus {
    background: #66b1ff;
    background-color: #66b1ff;
    color: #fff;
  }
}

// 朴素按钮样式
.lee-button.is-plain {
  &:hover, &:focus {
    background: #fff;
    border-color: #489eff;
    color: #409eff;
  }
}

.lee-button-primary.is-plain {
  color: #409eff;
  background: #ecf5ff;

  &:hover, &:focus {
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
}

// round属性
.lee-button.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}

// circle属性
.lee-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}

// icon配套样式 class中包含iconfont的元素的后面的兄弟元素 span 设置margin-left属性
.lee-button [class*=iconfont]+span {
  margin-left: 5px;
}

// disabled属性
.lee-button.is-disabled {
  cursor: no-drop;
  background-color:#ccc;
}
</style>
