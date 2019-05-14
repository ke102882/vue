<template>
  <div class="About">
    <router-link to="/">About</router-link>
    <table>
      <tr>
        <td>id</td>
        <td>name</td>
        <td>age</td>
        <td>date</td>
        <td>email</td>
        <td>ip</td>
        <td>isChecked</td>
        <td class="btn-wrap">Look</td>
      </tr>
      <tr v-for="item in datas" :key="item.id">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.age}}</td>
        <td>{{item.date}}</td>
        <td>{{item.email}}</td>
        <td>{{item.ip}}</td>
        <td>{{item.isChecked}}</td>
        <td class="btn-wrap"><Button @click="changeHref">go in</Button></td>
      </tr>
    </table>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'
export default {
  name: 'UserInfo',
  components: {
    Button
  },
  data() {
    return {
      datas: {},
    }
  },
  methods: {
    fn() {
      this.$axios({
        method:'get',
        url: 'testapi'
      }).then((response) => {
        console.log(this.$route.params);
        const arry = this.filtArry(response.data.list, this.$route.params);
        // const filet = response.data.list
        this.datas = arry
        // console.log(this.datas)
      }).catch(() => {
      })
    },
    filtArry(arry, filtValue){
      return arry.filter((item)=>{
        const islistId = +item.id
        const isParamsId = +filtValue.id
        console.log(islistId)
        console.log(isParamsId)
        return islistId === isParamsId;
      })
    },
    changeHref() {
      this.$router.push('/')
    }
  },
  mounted() {
    this.fn();
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

