<template>
  <section>
    <div class='container'>
      <router-link :to='{name:"all"}'>全部</router-link>|
      <router-link :to='{name:"active"}'>未完成</router-link>|
      <router-link :to='{name:"complete"}'>已完成</router-link>
      <TodoInput/>
      <div class='todo-List'>
        <TodoListItem v-for='index in todoIndex' :key='index' :index='index' class='stle'/>
      </div>
    </div>
  </section>
</template>

<script>
import TodoListItem from "../components/todoList.vue";
import TodoInput from "../components/input.vue";
export default {
  components: {
    TodoListItem,
    TodoInput
  },
  computed: {
    todoIndex() {
      return this.$store.getters["todoIndex"];
    }
  },
  mounted() {
    this.$store.dispatch("INIT_TODOS");
  }
};
</script>

<style scoped>
* {
  outline: 1px solid #f00;
}
.stle {
  display: flex;
  justify-content: flex-start;
  margin: 50px auto;
}
</style>
