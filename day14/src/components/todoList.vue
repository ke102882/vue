<template>
  <div class="todo-list-item">
    <input type="checkbox">
    <label>{{ todo.content }}</label>
    <button class="destroy">{{ index }}</button>
  </div>
</template>
<script>
export default {
  name: 'destroy',
  props: {
    index: {
      type: Number,
      required: true
    }
  },
  computed: {
    todo() {
      // return this.$store.state.todos[this.index];
      return this.$store.state.todos[this.index];
    }
  }
}
</script>
      <!-- <div class="todo-list-item" v-for="index in todoIndex" :key="index" :index="index">
        <input type="checkbox" v-model="">
        <label for="">{{ todo.content }}</label>
        <button class="destroy" @click="destroyHandler"></button>
      </div> -->