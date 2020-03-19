<template>
  <div class="output">
    <span>{{this.$store.state.output}}</span>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
  computed: {
    selectedTag() {
      return this.$store.state.selectedTag;
    }
  }
})
export default class Output extends Vue {
  beforeCreate() {
    this.$store.state.selected = "其他";
  }
}
</script>

<style lang='scss' scoped>
@import "~@/assets/style/helper.scss";
.output {
  @extend %clearFix;
  font-size: 36px;
  font-family: Consolas, monospace;
  padding: 0px 16px;
  text-align: right;
}
</style>