<template>
  <Layout>
    <div class="title">本月明细</div>
    <div class="month">
      <div class="expense">
        本月支出
        <span>
          <Icon name="money" />
          {{result('-','month')}}
        </span>
      </div>
      <div class="income">
        本月收入
        <span>
          <Icon name="money" />
          {{result('+','month')}}
        </span>
      </div>
      <div class="chart">
        <router-link to="/charts">
          <Icon name="charts" />查看图表分析
        </router-link>
      </div>
    </div>
    <div class="today">
      <div class="expense">
        今日支出
        <span>
          <Icon name="money" />
          {{result('-','day')}}
        </span>
      </div>
      <div class="income">
        今日收入
        <span>
          <Icon name="money" />
          {{result('+','day')}}
        </span>
      </div>
    </div>
    <div class="tags">
      <router-link class="tag" v-for="item in recordList" :key="item.id" :to="`/detailed/edit/${item.id}`">
          <span>
            <Icon :name="item.tag" />
            {{item.tag}}
          </span>
          <span class="icon-span">
            <span class="notes">{{item.notes}}</span>
          </span>
          <span class="amount">
            <span>￥{{item.type}}{{item.amount}}</span>
            {{beautify(item.createAt)}}
          </span>
      </router-link>
    </div>
  </Layout>
</template>

<script lang='ts'>
import Vue from "vue";
import { Component } from "vue-property-decorator";
import clone from "@/lib/clone";
import dayjs from "dayjs";
import Button from "@/components/Button.vue";

@Component({
  components: { Button }
})
export default class General extends Vue {
  get recordList() {
    return (this.$store.state as RootState).recordList;
  }
  result(type: string, time: string) {
    let daily = 0;
    let monthly = 0;
    const now = dayjs();
    const { recordList } = this;
    const newList = clone(recordList).filter(r => r.type === type);
    for (let i = 0; i < newList.length; i++) {
      if (now.isSame(dayjs(newList[i].createAt), "day")) {
        daily += newList[i].amount;
      }
      if (now.isSame(dayjs(newList[i].createAt), "month")) {
        monthly += newList[i].amount;
      }
    }
    if (time === "day") {
      return daily;
    }
    if (time === "month") {
      return monthly;
    }
  }
  beautify(string: string) {
    const day = dayjs(string);
    const now = dayjs();
    if (day.isSame(now, "day")) {
      return "今天  " + day.format("HH:mm");
    } else if (day.isSame(now.subtract(1, "day"), "day")) {
      return "昨天  " + day.format("HH:mm");
    } else if (day.isSame(now.subtract(2, "day"), "day")) {
      return "前天  " + day.format("HH:mm");
    } else if (day.isSame(now, "year")) {
      return day.format("M月D日  HH:mm");
    } else {
      return day.format("YYYY年M月D日  HH:mm");
    }
  }
  beforeCreate() {
    this.$store.commit("fetchRecords");
  }
}
</script>

<style lang='scss' scoped>
.title {
  background: #e8e8e8;
  font-size: 18px;
  font-weight: 500;
  padding: 10px;
}
.month {
  margin: 10px 12px;
  background: #ffffff;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  color: #737373;
  border: 2px solid #2598bb;
  border-radius: 5px;
  font-size: 18px;
  span {
    font-weight: bold;
    color: #000000;
  }
  .expense {
    padding-top: 10px;
    width: 50%;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .income {
    padding-top: 10px;
    width: 50%;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .chart {
    width: 100%;
    display: flex;
    justify-content: center;
    color: #007acc;
    padding: 15px 0;
  }
}

.today {
  margin: 10px 12px;
  display: flex;
  flex-direction: row;
  font-size: 18px;
  border: 2px solid #2598bb;
  border-radius: 5px;
  padding: 10px 0;
  span {
    font-weight: bold;
    color: #000000;
  }
  .expense {
    width: 50%;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .income {
    width: 50%;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
}
.tags {
  display: flex;
  flex-direction: column-reverse;
  flex-grow: 1;
  overflow-y: auto;
  .tag {
    background: #ffffff;
    margin: 4px 12px;
    padding: 10px 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & span {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }
    .icon {
      font-size: 28px;
    }
    .icon-span {
      align-items: center;
      font-size: 14px;
      font-weight: normal;
    }
    .notes {
      font-size: 20px;
      color: #007acc;
    }
    .amount {
      color: #c5c5c5;
      font-size: 12px;
      & span {
        font-size: 16px;
        font-weight: bold;
        color: black;
      }
    }
  }
}
</style>