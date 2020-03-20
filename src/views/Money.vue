<template>
  <Layout>
    <Types />
    <Tags />
    <Notes />
    <Output />
    <NumberPad @submit="saveRecord" />
  </Layout>
</template>

<script lang='ts'>
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Types from "@/components/Money/Types.vue";
import Tags from "@/components/Money/Tags.vue";
import Notes from "@/components/Money/Notes.vue";
import Output from "@/components/Money/Output.vue";
import NumberPad from "@/components/Money/NumberPad.vue";

@Component({
  components: { NumberPad, Output, Notes, Tags, Types }
})
export default class Money extends Vue {
  record: recordItem = {
    id: null,
    type: "-",
    tag: "",
    notes: "",
    amount: 0
  };

  saveRecord() {
    this.$store.commit("createRecord");
  }
}
</script>

<style lang='scss' scoped>
::v-deep .content {
  display: flex;
  flex-direction: column;
}
</style>