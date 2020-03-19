<template>
  <label class="notes">
    <span>备注：</span>
    <input type="text" v-model="$store.state.notes" placeholder="输入备注" />
  </label>
</template>

<script lang='ts'>
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Notes extends Vue {}
</script>

<style lang='scss' scoped>
@import "~@/assets/style/helper.scss";
.notes {
  @extend %innerShadow;
  min-height: 48px;
  background: white;
  padding: 4px 16px;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  span {
    padding-right: 16px;
  }
  input {
    text-align: left;
    height: 40px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
  }
}
</style>