<template>
  <div>
    <h2>Vue Todo App</h2>
    <todo/>
  </div>
</template>

<script>
import todo from '../../todo/todo';
export default {
  components: { todo },
  props: {
    heading: String,
    backgroundColor: String,
  },
};
</script>

<style lang="scss"></style>
