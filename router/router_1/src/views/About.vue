<template>
  <div class="About">
    <router-link to="/">{{datas.title}}</router-link>
    <div>{{getDataTime.Morning}}</div>
    <div>{{getDataTime.afternoon}}</div>
    <div>{{getDataTime.OverAfternoon}}</div>
    <table>
      <tr>
        <td>縣市</td>
        <td>早</td>
        <td>中</td>
        <td>晚</td>
        <td class="btn-wrap">Look</td>
      </tr>
      <tr v-for="item in datas.list" :key="item.locationName">
        <td>{{item.locationName}}</td>
        <td v-for="list in item.weatherElement[0].time" :key="list.startTime">
          {{list.parameter.parameterName}}
        </td>
        <td class="btn-wrap" @click="changeHref(item)"><Button>go in</Button></td>
      </tr>
    </table>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'
export default {
  name: 'About',
  components: {
    Button
  },
  data() {
    return {
      datas: {
        title: '',
        list: [],
      },
    }
  },
  computed: {
    getDataTime() {
      let Morning = '';
      let afternoon = '';
      let OverAfternoon = '';
      if(this.datas.list[0]) {
        Morning = this.datas.list[0].weatherElement[0].time[0].startTime
        afternoon = this.datas.list[0].weatherElement[0].time[1].startTime
        OverAfternoon = this.datas.list[0].weatherElement[0].time[2].startTime
      }
      return {
        Morning : Morning,
        afternoon: afternoon,
        OverAfternoon: OverAfternoon
      }
    },
  },
  methods: {
    async callApi() {
      await this.$axios({
        method:'get',
        url: 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=rdec-key-123-45678-011121314'
      }).then((response) => {
        // Wx(天氣現象)、MaxT(最高溫度)、MinT(最低溫度)、CI(舒適度)、PoP(降雨機率)
        this.datas.title = response.data.records.datasetDescription;
        this.datas.list = response.data.records.location;
        // console.log(this.datas);

      }).catch(() => { })
    },
    changeHref(item) {
      this.$router.push({
        name: 'userInfo',
        params: { 
          id: item.id,
          name: item.name,
        }
      });
    },
  },
  created() {
    this.callApi();
  }
}

// const date = Data;
// console.log(Data);
</script>

<style lang="scss">
* {
  outline: 1px solid #f00;
}
table {
  width: 100%;
}
tr td{
  // width: 0px;
  padding: 15px 0;
}
.btn-wrap {
  text-align: center;
}
</style>

