<template>
  <div class="todo-page">
    <h2>Vue Todo App</h2>
    <todo/>
  </div>
</template>

<script>
import todo from '../../todo/todo';
export default {
  components: { todo },
  emits: ['emitBackgroundPosition'],
  props: {
    heading: String,
    backgroundColor: String,
  },
  mounted() {
    this.$emit('emitBackgroundPosition', '100% 100%');
  }
};
</script>

<style lang="scss">
</style>
