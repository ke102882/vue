<script>
export default {
  data() {
    return {
      todo: ""
    };
  },
  computed: {
    todoGo() {
      return this.$store.state.todos[this.index];
    },
    todoIndex() {
      return { id:1,id:2}
    }
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



<template src="./template.html"></template>