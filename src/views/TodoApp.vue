<template>
  <div class="todo-page">
    <h2>Vue Todo App</h2>
    <todo />
  </div>
</template>

<script>
import todo from '../../todo/todo';
export default {
  components: { todo },
  emits: ['emitBackgroundPosition'],
  mounted() {
    this.$emit('emitBackgroundPosition', '25% 25%');
  },
};
</script>
