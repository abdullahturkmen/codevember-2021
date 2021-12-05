<template>
  <div class="home">
    <div class="container">
      <form class="form-inline mt-3 mb-4 alert alert-info pt-4">
        <div class="col-12 col-md-6 pr-md-4 pb-3">
          <div class="row justify-content-center float-md-right">
            <div class="form-group">
              <input
                class="form-control"
                type="text"
                @change="exchange($event)"
                v-on:input="exchange($event)"
                ref="inputValue"
                :value="inputValue"
              />
            </div>
            <div class="form-group">
              <select
                class="form-control"
                @change="exchange($event)"
                ref="inputCurrentValue"
              >
                <option
                  v-for="(currentFullName, currentCode) in selectList"
                  :key="currentCode"
                  :selected="currentCode == inputSelected"
                >
                  {{ currentCode }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 pl-md-4 pb-3">
          <div class="row justify-content-center float-md-left">
            <div class="form-group">
              <input
                class="form-control"
                type="text"
                @change="exchange($event)"
                v-on:input="exchange($event)"
                ref="outputValue"
                :value="outputValue"
              />
            </div>
            <div class="form-group">
              <select
                class="form-control"
                @change="exchange($event)"
                ref="outputCurrentValue"
                v-model="outputSelected"
              >
                <option
                  v-for="(currentFullName, currentCode) in selectList"
                  :key="currentCode"
                  :selected="currentCode == outputSelected"
                >
                  {{ currentCode }}
                </option>
              </select>
            </div>
          </div>
        </div>
      </form>

      <div style="height: 50px">{{ chartDetails }}</div>
      <div class="chart d-inline-flex justify-content-between align-items-end w-100">
        <div
          v-on:mouseover="mouseover(index['TRY'], date)"
          v-on:mouseleave="mouseleave"
          v-for="(index, date) in chartList"
          :key="date"
          class="bg-info flex-grow-1"
          v-bind:style="{ height: `${index['TRY'] * 2}vh` }"
        ></div>
      </div>

      <table class="table table-striped">
        <thead>
          <th>Türk Lirası</th>
          <th>Döviz</th>
          <th>Grafik</th>
        </thead>
        <tbody>
          <tr
            v-for="(currentPrice, latestCurrentCode) in latestList"
            :key="latestCurrentCode"
          >
            <th scope="row">1 TRY =</th>
            <td>{{ currentPrice }} {{ latestCurrentCode }}</td>
            <td>
              <button class="btn btn-sm btn-success mr-1 mb-1" v-on:click="chart(latestCurrentCode, 'month')">1 Ay</button>
              <button class="btn btn-sm btn-success mr-1 mb-1" v-on:click="chart(latestCurrentCode, 'year')">1 Yıl</button>
              <button class="btn btn-sm btn-success mb-1" v-on:click="chart(latestCurrentCode, 'decade')">10 Yıl</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.chart div:hover{
  background-color: #06763d !important;
}
</style>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  name: "Home",

  data() {
    return {
      inputSelected: "TRY",
      outputSelected: "USD",
      inputValue: "",
      outputValue: "",
      inputCurrentValue: "",
      outputCurrentValue: "",
      selectList: null,
      latestList: null,
      latestChangeList: null,
      chartList: null,
      chartDetails: null,
      chartDetailsCode: null,
      host: "http://api.frankfurter.app",
    };
  },
  mounted() {
    axios
      .get(this.host + "/currencies")
      .then((response) => (this.selectList = response.data));

    axios
      .get(this.host + "/latest?from=TRY")
      .then((response) => (this.latestList = response.data.rates));
  },
  methods: {
    exchange: function () {
      this.inputValue = this.$refs.inputValue.value;
      this.outputValue = this.$refs.outputValue.value;
      this.inputCurrentValue = this.$refs.inputCurrentValue.value;
      this.outputCurrentValue = this.$refs.outputCurrentValue.value;

      axios
        .get(
          this.host +
            `/latest?from=${this.inputCurrentValue}&to=${this.outputCurrentValue}`
        )
        .then((response) => {
          this.latestChangeList = response.data.rates;

          this.outputValue =
            this.latestChangeList[this.outputCurrentValue] * this.inputValue;
        });
    },
    chart: function (currentCode, time) {
      window.scroll({
    top: 120,
    left: 0,
    behavior: 'smooth'
  });
      let dates;
      if(time == 'month'){
         let setDateFormat = new Date();
          dates = new Date(
        setDateFormat.getFullYear(),
        setDateFormat.getMonth(),
        setDateFormat.getDate() - 30
      ).toISOString().substring(0,10);
      }
      else if(time == 'year'){
         let setDateFormat = new Date();
          dates = new Date(
        setDateFormat.getFullYear(),
        setDateFormat.getMonth(),
        setDateFormat.getDate() - 365
      ).toISOString().substring(0,10);
      }
      else if(time == 'decade'){
         let setDateFormat = new Date();
          dates = new Date(
        setDateFormat.getFullYear(),
        setDateFormat.getMonth(),
        setDateFormat.getDate() - 3650
      ).toISOString().substring(0,10);
      }
      this.chartDetailsCode = currentCode;
      axios
        .get(this.host + `/${dates}..?from=${currentCode}&to=TRY`)
        .then((response) => {
          this.chartList = response.data.rates;
        });
    },
    mouseover: function (price, date) {
      this.chartDetails = `${date} tarihinde 1 ${this.chartDetailsCode} = ${price} TRY`;
    },
    mouseleave: function () {
      this.chartDetails = null;
    },
  },
};
</script>
