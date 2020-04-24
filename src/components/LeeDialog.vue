<template>
  <div class="lee-dialog-mask">
    <div class="lee-dialog-main" :style="{width,'marginTop':margin_top}">
      <div class="lee-dialog-header">

        <slot name="title">
          <span class="dialog-header-title">{{title}}</span>
        </slot>

        <button class="dialog-header-btn">
          <i class="iconfont icon-fail"></i>
        </button>
      </div>
      <div class="lee-dialog-body">
        <span>information</span>
      </div>
      <div class="lee-dialog-footer">
        <lee-button type="primary">取消</lee-button>
        <lee-button type="primary">确定</lee-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "lee-dialog",
  props: {
    title: {
      type: String,
      default: "对话框"
    },
    width:{
        type:String,
        default:'50%'
    },
    margin_top:{
        type:String,
        default:'20vh'
    }
  }
};
</script>

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
    }
  }
}
</style>