import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const LS = {
  load() {
    return JSON.parse(localStorage.getItem('vue-todos') || '[]');
  },
  save(data) {
    localStorage.setItem('vue-todos', JSON.stringify(data));
  },
};
const filter = {
  all(todos) {
    return todos;
  },
  active(todos) {
    return todos.filter(todo => {
      return !todo.complete;
    });
  },
  complete(todos) {
    return todos.filter(todo => {
      return todo.complete;
    });
  },
};

export default new Vuex.Store({
  strict: true,
  state: {
    todos: [
      { content: 'todo-content', complete: false },
      { content: 'todo-content', complete: false },
      { content: 'todo-content', complete: true },
    ],
  },
  getters: {
    todoIndex(state) {
      if (
        state.route.path != '/todoList/all' &&
        state.route.path != '/todoList/active' &&
        state.route.path != '/todoList/complete'
      )
        return;
      return filter[state.route.name](state.todos).map(todo =>
        state.todos.indexOf(todo),
      );
    },
  },
  mutations: {
    Set_Todos(state, data) {
      state.todos = data;
      //(儲存)save local暫存
      LS.save(state.todos);
    },
    Add_Todos(state, data) {
      state.todos.push(data);
      LS.save(state.todos);
    },
    Update_Todos(state, { index, data }) {
      // state.todos[index] = data;
      state.todos[index].complete = data.complete;
      state.todos[index].content = data.content;
      LS.save(state.todos);
    },
    Remove_Todos(state, index) {
      state.todos.splice(index, 1);
      LS.save(state.todos);
    },
  },
  actions: {
    INIT_TODOS({ commit }) {
      //(讀取)load local暫存
      commit('Set_Todos', LS.load());
    },
  },
});
