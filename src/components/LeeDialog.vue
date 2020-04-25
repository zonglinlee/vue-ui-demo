<template>
  <transition name="lee-dialog">
    <!-- 这里需要添加一个.self修饰符，否则点击事件冒泡会导致无论点击组件内部哪里都会关闭对话框 -->
    <div class="lee-dialog-mask" v-show="visiable" @click.self="closeDialog">
      <div class="lee-dialog-main" :style="{width,'marginTop':margin_top}">
        <div class="lee-dialog-header">
          <slot name="title">
            <span class="dialog-header-title">{{title}}</span>
          </slot>

          <button class="dialog-header-btn" @click="closeDialog">
            <i class="iconfont icon-fail"></i>
          </button>
        </div>
        <div class="lee-dialog-body">
          <slot></slot>
        </div>
        <div class="lee-dialog-footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "lee-dialog",
  props: {
    title: {
      type: String,
      default: "对话框"
    },
    width: {
      type: String,
      default: "50%"
    },
    margin_top: {
      type: String,
      default: "20vh"
    },
    visiable: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    //要修改visiable的值控制对话框的显示和隐藏，不能直接在子组件中修改，数据必须单向的从父组件中修改
    //在父组件中注册一个监听事件，子组件中触发事件，调用回调函数修改父组件中数据
    //不过这么使用起来不方便，vue提供了 .sync修饰符来简化操作
    //写法比较怪异，父组件中如果想要修改某个传入子组件的 prop，
    //传入参数的时候  :visiable.sync='visiable1'  ,这样就可以改变visiable属性中绑定的visiable1变量的值了
    //这个相当于在父组件中注册了一个 update:visiable 事件，
    //子组件中通过$emit('update:visiable',value)触发就可以了，然后
    //将需要修改的值传进去即可
    //这种写法只是方便了使用而已，本质还是没有改变
    closeDialog() {
      this.$emit("update:visiable", false);
    }
  }
};
</script>
// scope作用 1.scope会给当前组件模板中所有的标签添加一个随机的属性 比如 "data-v-5f167074"
//同一个组件，这个属性值是一样的，在控制台中可以看到渲染的样式中会有对应的属性选择器 
//这保证了样式的唯一性，但同时也造成 两个组件中的样式隔离  
//解决办法一  去掉 scoped 属性，因为一般组件库的类名都不会重复，影响不大
//解决办法二   深度选择器  在 vue-loader 文档中有个scoped css 中可以参考
//比如这里在app.vue中引入了dialog组件，并传入了v-slot:footer插槽，此时插槽中的内容隶属于app.vue,
//它会被添加app.vue中的随机属性，LeeDialog.vue中的样式无法对其产生影响
//这里我们用深度选择器，提前给slot中定义一些样式，使用者就不必自己添加样式了，所以组件库插槽内一般都
//会涉及到深度选择器的问题,
//它的原理就是，如果前面带有深度选择器，它最终被解析成css的时候后面就不会带有随机属性，比如下面
//.lee-dialog-mask .lee-dialog-main .lee-dialog-footer[data-v-5f167074] .lee-button:first-child

<style lang='stylus' scoped>
.lee-dialog-mask {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(50, 50, 50, 0.5);
  z-index: 9999;

  .lee-dialog-main {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;

    .lee-dialog-header {
      padding: 20px 20px 10px;

      .dialog-header-title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }

      .dialog-header-btn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
      }
    }

    .lee-dialog-body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }

    .lee-dialog-footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
//深度选择器效果
//.lee-dialog-mask .lee-dialog-main .lee-dialog-footer[data-v-5f167074] .lee-button:first-child
      ::v-deep .lee-button:first-child{
        margin-right :15px;
      }
    }
  }
}

// 添加动画效果，在vue中可以实现transition动画和 animation动画
// 第一步 给需要实现动画效果的标签 外层包裹一个 transition 标签 定义一个name值(name值默认为'v')，
// 这个name值用来在css中定义类名，添加transition后会自动添加 6 个classname
// .v-enter .v-enter-active .v-enter-to .v-leave .v-leave-active .v-leave-to
// 这六个类名分别代表了动画从开始到进入再到离开的六个阶段
// 如果用transition做动画，用前三个(进入动画)或后三个(离开动画)类名 或者6个都用
// 如果用animation做动画，只需要过程之中的两个类名，因为动画中开始帧和结束帧都已经存在了
.lee-dialog-enter-active {
  animation: dialog-in-out .6s;
}

.lee-dialog-leave-active {
  animation: dialog-in-out .8s reverse;
}

@keyframes dialog-in-out {
  from {
    opacity: 0;
    transform:translateY(-30px)
  }

  to {
    opacity: 1;
    transform:translateY(0)
  }
}
</style>