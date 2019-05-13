<template>
  <div>
    <div class='todo-list-item'>
      <input
        type='text'
        v-model.trim='edit'
        v-if='edit != null'
        class='inpu'
        v-focus
        @keyup.enter='submitHandler'
        @keyup.esc='cancelHandler'
        @blur='cancelHandler'
      >
      <template v-else>
        <input type='checkbox' v-model='complete'>
        <label class='ck' @dblclick='editHandler'>{{ todo.content }}</label>
        <!-- <button class="destroy">{{ index }}</button> -->
        <button class='destroy' @click='destroyHandler'>{{ index }}</button>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  name: "destroy",
  data() {
    return { edit: null };
  },
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
    },
    editHandler() {
      this.edit = this.todo.content;
      // this.cache = this.todo.content;
    },
    submitHandler() {
      // if (!this.edit) this.destroyHandler();
      if (!this.edit) return;
      this.$store.commit("Update_Todos", {
        index: this.index,
        data: {
          content: this.edit,
          complete: this.todo.complete
        }
      });
      // this.edit = null;
      this.cancelHandler();
    },
    cancelHandler() {
      this.edit = null;
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
.inpu {
}
</style>
