<template>
  <div class="About">
    <router-link to="/">About</router-link>
    <table>
      <tr>

      </tr>
    </table>
    {{datas}}
    <!-- <Button></Button> -->
  </div>
</template>

<script>
import axios from 'axios';
import featData from './featData.js';
// import Button from '@/components/Button.vue'
export default {
  name: 'About',
  // components: {
  //   Button
  // },
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
        this.datas = response
      }).catch(() => {
      })
    }
  },
  mounted() {
    this.fn();
  }
}

// const date = Data;
// console.log(Data);
</script>
