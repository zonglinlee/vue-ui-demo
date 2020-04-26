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
      <lee-button icon="home1"></lee-button>
      <!-- 组件身上注册了一个 'click' 事件 ，组件内部需要在  用户点击  的时候调用这个 注册的监听函数 -->
      <!-- 组件内部需要调用 emit('eventName',eventObj) -->
      <lee-button type="primary" round @click="alertSth">click-alert</lee-button>
      <lee-button type="primary" round disabled @click="alertSth">click-alert</lee-button>
    </div>
    <div class="dialog-display">
      <lee-button type="primary" @click="showDialog1">dialog1</lee-button>
      <lee-button type="primary" @click="visiable2=true">dialog1</lee-button>
      <lee-dialog
        title="hello"
        width="33%"
        margin_top="100px"
        :visiable.sync="visiable1"
      >hello world!</lee-dialog>
      <!-- v-slot:title表示给组件中name值为title的slot 传入内容 -->
      <lee-dialog :visiable.sync="visiable2">
        <template v-slot:title>
          <h2>FBI warning</h2>
        </template>
        <p>你确定这个不是你的吗？</p>
        <template v-slot:footer>
          <lee-button type="primary">confirm</lee-button>
          <lee-button type="primary" plain>cancle</lee-button>
        </template>
      </lee-dialog>
    </div>
    <div class="input-display">
      <!-- 这相当于给这个组件 :value='value' @input='input1=$event.target.value' -->
      <lee-input v-model="input1" clearable></lee-input>
      <lee-input v-model="input2" type="password" showpassword></lee-input>
      <lee-input placeholder="Hello World!" disabled></lee-input>
    </div>
    <div class="switch-display">
      <lee-switch v-model="activeSwitch"></lee-switch>
      <lee-switch v-model="activeSwitch" activeColor="green" inactiveColor="red"></lee-switch>
    </div>
    <div class="radio-display">
      <!-- label属性必传，v-model绑定一个变量，如果变量的值等于label的值，就选中 -->
      <lee-radio v-model="gender" label="1">男</lee-radio>
      <lee-radio v-model="gender" label="0">女</lee-radio>

      <lee-radio v-model="gender" label="1"></lee-radio>
      <lee-radio v-model="gender" label="0"></lee-radio>

      <lee-radio-group v-model="gender">
        <lee-radio label="1">男</lee-radio>
        <lee-radio label="0">女</lee-radio>
      </lee-radio-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data: () => {
    return {
      visiable1: false,
      visiable2: false,
      input1: "黑客帝国",
      input2: "123456",
      activeSwitch: false,
      gender: "0"
    };
  },
  methods: {
    alertSth: () => {
      alert("button clicked");
    },
    showDialog1() {
      this.visiable1 = true;
    }
  }
};
</script>
<style lang='stylus' scoped>
.button-display, .dialog-display, .input-display, .switch-display, .radio-display {
  margin: 20px auto;

  .lee-button {
    display: inline-block;
    margin-right: 10px;
  }

  .lee-switch {
    margin-right: 10px;
  }

  .lee-radio {
    margin-right: 10px;
  }
}

.input-display {
  .lee-input {
    width: 25%;
    margin-right: 15px;
  }
}
</style>
