<template>
  <!-- 
v-model原理 : 数据中绑定一个value值，并绑定input事件改变此值，实现双向数据绑定，如下
<input type='text' :value='username' @input='username=$event.target.value'>
但是这个只能绑定到原生dom表单上，封装组件要重新写 
      <lee-input v-model="input1" ></lee-input>
这相当于给这个组件 :value='input1' @input='fn'

                    fn(value){
                        this.input1 = value
                    } 

                子组件中传入value值  即e.target.value

                    handleInput(e) {
                    this.$emit("input",e.target.value);
                    }
所以我们在组件封装中要接受 value 这个属性，并且要处理input这个注册的事件
  -->

  <div class="lee-input" :class="{'lee-input-suffix':showSuffix}" >
      <!-- 通过计算属性控制小图标以及span标签的显示与否 -->
    <input
      class="lee-input-inner"
      :class="{'is-disabled':disabled}"
      :placeholder="placeholder"
      :type="type"
      :disabled="disabled"
      :name="name"
      :clearable='clearable'
      :showpassword="showpassword"
      :value="value"
      @input="handleInput"
    />
    <span v-if="showSuffix" class="lee-input-suffix-span" >
        <i class="iconfont icon-eye" v-if="showpassword" ></i>
        <!-- 文本框不为空且clearable为true才能显示清空图标 -->
        <i class="iconfont icon-clear" v-if="clearable && value" @click="clear"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: "lee-input",
  computed:{
      showSuffix(){
          return this.clearable || this.showpassword
      }
  },
  props: {
    placeholder: {
      type: String,
      default: "placeholder"
    },
    type: {
      type: String,
      default: "text"
    },
    name: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    showpassword: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    // 处理v-model传入的value prop
    value: {
      type: String,
      default: ""
    }
  },
  methods: {
    handleInput(e) {
      this.$emit("input",e.target.value);
    },
    clear(){
        // 这里不能直接修改value还是要触发父组件事件
        this.$emit('input','')
    }
  }
};
</script>

<style lang='stylus' scoped>
.lee-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;

  .lee-input-inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 45, 0.355, 1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #409eff;
    }
  }

  // input禁用样式
  .is-disabled {
    background-color: #f5f7fa;
    border-color: #e4e7ed;
    color: #c0c4cc;
    cursor: not-allowed;
  }
}

// 下面的样式是为了 显示input框中后面的小图标
.lee-input-suffix {
  .lee-input-inner {
    padding-right: 30px;
  }

  .lee-input-suffix-span {
    position: absolute;
    right: 10px;
    height: 100%;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    z-index: 900;

    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  }
}
</style>