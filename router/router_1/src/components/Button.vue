<template>
  <button class="g-btn">
    <slot>{{msg}}</slot>
  </button>
</template>

<script>
export default {
  name: 'button',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.g-btn {
  color: #fff;
  border: 0;
  background-color: black;
  border-radius: 30px;
};
</style>
