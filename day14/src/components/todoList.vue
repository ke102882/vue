<template>
  <div>
    <div class='todo-list-item'>
      <input :id='index' type='checkbox' v-model='complete'>
      <label :for='index' class='ck'>{{ todo.content }}</label>
      <!-- <button class="destroy">{{ index }}</button> -->
      <button class='destroy' @click='destroyHandler'>{{ index }}</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "destroy",
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
    },
    complete: {
      get() {
        return this.todo.complete;
      },
      set(val) {
        this.$store.commit("Update_Todos", {
          index: this.index,
          data: {
            content: this.todo.content,
            complete: val
          }
        });
      }
    }
  },
  methods: {
    destroyHandler() {
      if (confirm(`是否確認刪除${this.todo.content}?`))
        this.$store.commit("Remove_Todos", this.index);
    }
  }
};
</script>

<style scoped>
.todo-list-item {
  display: flex;
  position: relative;
  width: 500px;
  margin: auto;
  justify-content: space-between;
}
label {
  display: inline-block;
}
.ck {
  display: flex;
  flex-grow: 2;
  padding-left: 50px;
}
* {
  outline: 1px solid #f00;
}
</style>
