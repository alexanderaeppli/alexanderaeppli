<template>
  <li class="todo-item" :class="{ dragged: todo.isdragged }">
    <span class="todo-item__title">{{ todo.content }}</span>
    <div class="todo-item__attr">
      <span class="todo-item__date" v-if="todo.date">{{ todo.date.toLocaleDateString() }}</span>
      <button class="button button--secondary" @click="$emit('removeTodo')">Remove</button>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    todo: Object,
  },
  emits: ['removeTodo'],
  methods: {},
};
</script>
