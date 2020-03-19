<template>
  <div class="types">
    <span :class="type ==='-' && 'selected'" @click="selectType('-')">支出</span>
    <span :class="type ==='+' && 'selected'" @click="selectType('+')">收入</span>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Types extends Vue {
  get type() {
    return this.$store.state.type;
  }
  selectType(type: string) {
    if (type !== "-" && type !== "+") {
      throw new Error("type is unknown");
    }
    this.$store.commit("selectType", type);
  }
}
</script>

<style lang='scss' scoped>
.types {
  background: #c4c4c4;
  display: flex;
  text-align: center;
  font-size: 24px;
  min-height: 52px;
  span{
    width: 50%;
    padding: 8px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    &.selected{
      background: #43b7da;
      color: #ffffff;
    }
    &.selected::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: #007acc;
    }
  }
}
</style>