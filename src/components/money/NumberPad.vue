<template>
  <div class="numberPad">
    <div class="buttons">
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <button @click="remove">
        <Icon name="backspace" />
      </button>
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button @click="clear">清零</button>
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <router-link to="/">
        <button @click="ok" class="ok">OK</button>
      </router-link>
      <button @click="inputContent" class="zero">0</button>
      <button @click="inputContent">.</button>
    </div>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class NumberPad extends Vue {
  inputContent(event: MouseEvent) {
    this.$store.commit("inputContent", event);
  }
  remove() {
    this.$store.commit("removeInput");
  }
  clear() {
    this.$store.commit("clearInput");
  }
  ok() {
    this.$emit("submit");
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";
.numberPad {
  .buttons {
    @extend %clearFix;
    button {
      color: #ffffff;
      width: 25%;
      height: 50px;
      float: left;
      font-size: 20px;
      background: transparent;
      border: none;
      $bg: #43b7da;
      
      &.zero {
        width: 50%;
      }
      &:nth-child(1) {
        background: $bg;
      }
      &:nth-child(2),
      &:nth-child(5) {
        background: darken($bg, 4%);
      }
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        background: darken($bg, 4 * 2%);
      }
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10) {
        background: darken($bg, 4 * 3%);
      }
      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13) {
        background: darken($bg, 4 * 4%);
      }
      &:nth-child(14) {
        background: darken($bg, 4 * 5%);
      }
      &.ok {
        height: 100px;
        float: right;
        background: darken($bg, 4 * 6%);
      }
    }
  }
}
</style>