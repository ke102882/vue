<template>
  <section>
    <div class="container">
      <router-link :to="{name:'all'}">全部</router-link> |
      <router-link :to="{name:'active'}">未完成</router-link> |
      <router-link :to="{name:'complete'}">已完成</router-link> |
      <div class="todo-input">
        <input
          type="text"
          placeholder="請輸入"
          v-model.trim="todo"
          @keyup.enter="submitHanlder"
          v-focus
        />
      </div>
      <div class="todo-List">
        <TODOListItem v-for="index in todoIndex" :key="index" :index="index"/>
      </div>
    </div>
  </section>
</template>

<script>
import TODOListItem from '@/components/todoList.vue';

export default {
  data() {
    return {
      todo: ""
    };
  },
  computed: {
    todoIndex(){
      return this.$store.getters['todoIndex'];
    }
  },
  components:{
    TODOListItem
  },
  methods: {
      
      submitHanlder() {
      if (!this.todo) return;
      this.$store.commit("Add_Todos", {
        content: this.todo,
        complete: false
      });
      this.todo = "";
    }
  }
};
</script>