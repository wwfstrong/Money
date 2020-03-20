<template>
  <Layout>
    <div class="navBar">
      <span class="back">
        <Icon name="left" @click.native="goBack" />
      </span>
      <span class="title">
        <Icon :name="record.tag" />
        {{record.tag}}
      </span>
      <span></span>
    </div>
    <div class="form-wrapper">
      <label class="notes">
        <span>金额</span>
        <input
          type="number"
          :value="record.amount"
          @change="editAmount($event.target.value)"
          :placeholder="record.amount"
        />
      </label>
    </div>
    <div class="form-wrapper">
      <label class="notes">
        <span>备注</span>
        <input
          type="text"
          :value="record.notes"
          @input="record.notes=$event.target.value"
          :placeholder="record.notes"
        />
      </label>
    </div>
    <div class="button-wrapper">
      <Button class="modifyButton" @click="saveEdit">修改</Button>
      <Button class="deleteButton" @click="remove">删除</Button>
    </div>
  </Layout>
</template>

<script lang='ts'>
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Button from "@/components/Button.vue";
@Component({
  components: { Button }
})
export default class EditRecord extends Vue {
  record?: recordItem = undefined;
  created() {
    const id = this.$route.params.id;
    this.$store.commit("fetchRecords");
    const records = this.$store.state.recordList;

    const record: recordItem = records.filter(
      (item: recordItem) => item.id === id
    )[0];
    if (record) {
      this.record = record;
    } else {
      this.$router.replace("/404");
    }
  }
  goBack() {
    this.$router.back();
  }
  editAmount(value: string) {
    if (parseFloat(value).toString() == "NaN") {
      window.alert("请输入一个数字");
    } else {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      this.record!.amount = parseFloat(value);
    }
  }
  saveEdit() {
    this.$store.commit("updateRecord", {
      id: this.record?.id,
      notes: this.record?.notes,
      amount: this.record?.amount
    });
    this.$router.back();
  }
  remove() {
    this.$store.commit("removeRecord", this.record?.id);
    this.$router.back();
  }
}
</script>

<style lang='scss' scoped>
.navBar {
  font-size: 16px;
  padding: 12px 16px;
  background: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  span {
    width: 33%;
  }
  .back {
    text-align: left;
    .icon {
      width: 30px;
      height: 30px;
    }
  }
  .title {
    display: flex;
    flex-direction: column;
    text-align: center;
    .icon {
      margin: 0 auto;
      width: 30px;
      height: 30px;
    }
  }
}
.form-wrapper {
  background: white;
  margin-top: 1px;
  .notes {
    background: white;
    padding: 0 16px;
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    span {
      padding-right: 16px;
    }
    input {
      text-align: right;
      height: 40px;
      flex-grow: 1;
      background: transparent;
      border: none;
      padding-right: 16px;
    }
  }
}
.button-wrapper {
  text-align: center;
  padding: 16px;
  margin-top: 44px;
  .modifyButton {
    background: green;
  }
  .deleteButton {
    background: red;
    margin-left: 15px;
  }
}
</style>