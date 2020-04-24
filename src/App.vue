<template>
  <div id="app">
    <div class="button-display">
      <!-- 
        .native - listen for a native event on the root element of component. 
      就是说自定义组件也可以监听原生dom事件，有.native修饰符说明就是监听原生dom事件
      如果么有native修饰符，就监听的是$emit()方法分发的事件原生dom元素只能监听原生事件
      -->
      <lee-button @click.native="alertSth">hello</lee-button>
      <lee-button type="primary">hello</lee-button>
      <lee-button type="primary" plain>hello</lee-button>
      <lee-button type="primary" plain round>hello</lee-button>
      <lee-button icon="fail">失败</lee-button>
      <lee-button icon="home"></lee-button>
      <!-- 组件身上注册了一个 'click' 事件 ，组件内部需要在  用户点击  的时候调用这个 注册的监听函数 -->
      <!-- 组件内部需要调用 emit('eventName',eventObj) -->
      <lee-button type="primary" round @click="alertSth">click-alert</lee-button>
      <lee-button type="primary" round disabled @click="alertSth">click-alert</lee-button>
    </div>
    <div class="dialog-display">

      <lee-dialog title="hello" width="33%" margin_top="10px"></lee-dialog>

      <!-- v-slot:title表示给组件中name值为title的slot 传入内容 -->
      <!-- <lee-dialog>
        <template v-slot:title>
          <h2>标题2</h2>
        </template>
      </lee-dialog> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  methods: {
    alertSth: () => {
      alert("button clicked");
    }
  }
};
</script>
<style lang='stylus' scoped>
.button-display {
  margin: 20px auto;
  text-align: center;

  .lee-button {
    display: inline-block;
    margin-right: 10px;
  }
}

.dialog-display {
  margin: 20px auto;
}
</style>
