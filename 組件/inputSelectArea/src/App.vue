<template>
  <div id="app">
    <InputSelect :value="selectNumber"
                 :label="selectNumber"
                 :data="areaNumbers"
                 @select="selectAutocomplete"></InputSelect>
  </div>
</template>

<script>
import InputSelect from './components/InputSelect.vue'
import areaNumber from './areaNumber.js'

export default {
  name: 'app',
  data(){
    return{
      selectNumber: 'abc',
      areaNumber: areaNumber,
      areaNumbers: [],
    }
  },
  components: {
    InputSelect
  },
  created () {
    this.areaNumbers = this.mapAreaNumber();
  },
  methods: {
    selectAutocomplete(values) {
      this.selectNumber = values.value;
    },
    mapAreaNumber() {
      const arr = [];
      for (const item of this.areaNumber) {
        const arrlist = [];
        for (const list of item.list) {
          arrlist.push({
            label: list[0],
            value: list.join('|'),
          });
        }
        arr.push({ title: item.title || '' , list: [...arrlist]});
      }
      /*
      [
        {
          title: '', // 組名
          list: []   // 顯示項目label，存值value
            { label: '', value: '' },
            { label: '', value: '' },
          ],
        },
        {
          title: '', // 組名
          list: [
            { label: '', value: '' },
            { label: '', value: '' },
          ],
        },
      }
      */
      return arr;
    }
  }
}
</script>

<style lang="less">
@import 'styles/index';

</style>
