<template>
  <label class="lee-checkbox" :class="{'is-checked':isChecked}">
    <span class="lee-checkbox-input">
      <span class="lee-checkbox-inner"></span>
      <input
        class="lee-checkbox-original"
        type="checkbox"
        :name="name"
        :value="label"
        v-model="model"
      />
    </span>
    <span class="lee-checkbox-label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: "lee-checkbox",
  props: {
    value: {
      type: Boolean,
      default: false
    },
    label: {
      type: [String, Boolean, Number],
      default: ""
    },
    name: {
      type: String,
      default: ""
    }
  },
  computed: {
    model: {
      get() {
        return this.isGroup ? this.checkboxGroup.value : this.value;
      },
      // vue本身已经实现了传入数组，就绑定数组的功能，所以set时候 传入的就是数组
      set(value) {
        this.isGroup
          ? this.checkboxGroup.$emit("input", value)
          : this.$emit("input", value);
      }
    },
    isChecked() {
      return this.isGroup
        ? !!this.checkboxGroup.value.includes(this.label)
        : this.value;
    },
    isGroup() {
      return !!this.checkboxGroup;
    }
  },

  inject: {
    checkboxGroup: {
      type: Array,
      default: ""
    }
  }
};
</script>

<style lang="stylus" scoped>
.lee-checkbox {
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: none;
  margin-right: 30px;

  .lee-checkbox-input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;

    .lee-checkbox-inner {
      display: inline-block;
      position: relative;
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      box-sizing: border-box;
      width: 14px;
      height: 14px;
      background-color: #fff;
      z-index: 1;
      transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46), background-color 0.25s, cubic-bezier(0.71, -0.46, 0.29, 1.46);

      &:after {
        box-sizing: content-box;
        content: '';
        border: 1px solid #ffffff;
        border-left: 0;
        border-top: 0;
        position: absolute;
        height: 7px;
        width: 3px;
        left: 4px;
        top: 1px;
        transform: rotate(45deg) scaleY(0);
        transition: transform 0.15s ease-in 0.05s;
        transform-origin: center;
      }
    }

    .lee-checkbox-original {
      opacity: 0;
      outline: none;
      position: absolute;
      left: 10px;
      margin: 0;
      width: 0;
      height: 0;
      z-index: -1;
    }
  }

  .lee-checkbox-label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
  }
}

// 选中的样式
.lee-checkbox.is-checked {
  .lee-checkbox-input {
    .lee-checkbox-inner {
      background-color: #409eff;
      border-color: #409eff;

      &:after {
        transform: rotate(45deg) scaleY(1.3);
      }
    }
  }

  .lee-checkbox-label {
    color: #409eff;
  }
}
</style>