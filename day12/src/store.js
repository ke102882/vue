import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: { //資料儲存的地方
    day: 0,
    header: {
      src: './001.JPG',
      title: 'HelloWorld!!vue.js'
    },
    list: []
  },
  mutations: {
    setDay(state, day){
      state.day = day
    },
    setList(state, list){
      state.list = list
    }
  },
  actions: {
    getList(context, day){
      context.commit('setDay',day)

      return axios.get('/list.json').then(res =>{
        context.commit('setList', res.data)
      })

    }
  }
})
