import axios from "axios";

export default {
  namespaced: true, //將這份包起來，變成區域性JS
  state: {
    //資料儲存的地方
    day: 0,
    header: {
      src: "./001.JPG",
      title: "HelloWorld!!vue.js"
    },
    list: []
  },
  getters:{
    currentDay(state){
      return state.list[state.day]
    }
  },
  mutations: {
    setDay(state, day) {
      state.day = day;
    },
    setList(state, list) {
      state.list = list;
    }
  },
  actions: {
    getList(context, day) {
      context.commit("setDay", day);

      return axios.get("/list.json").then(res => {
        context.commit("setList", res.data);
      });
    }
  }
};
