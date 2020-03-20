<template>
  <div class="tags">
    <span
      v-for="tag in currentTags"
      :key="tag"
      :class="{selected: selectedTags.indexOf(tag)>=0}"
      @click="toggle(tag)"
    >
      <Icon :name="tag"></Icon>
      {{tag}}
    </span>
  </div>
</template>

<script lang='ts'>
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class Tags extends Vue {
  selectedTags: string[] = [];
  get type() {
    return this.$store.state.type;
  }
  get currentTags() {
    if (this.type === "-") {
      return this.$store.state.payTags;
    } else {
      return this.$store.state.incomeTags;
    }
  }
  toggle(tag: string) {
    this.selectedTags.length = 0;
    this.selectedTags.push(tag);
  }
  beforeMount() {
    this.toggle("其他");
  }
}
</script>

<style lang='scss' scoped>
.tags {
  display: flex;
  flex-direction: row;
  font-size: 16px;
  padding: 16px;
  flex-wrap: wrap;
  align-content: flex-start;
  background: #fff;
  flex-grow: 1;
  overflow-y: auto;
  span {
    width: 25%;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 10px 0;
    .icon {
      width: 24px;
      height: 24px;
      margin: 0 auto;
    }
    &.selected {
      color: blue;
    }
  }
}
</style>