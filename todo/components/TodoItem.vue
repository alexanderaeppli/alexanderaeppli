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

<style lang="scss">
@use 'sass:color';
@use '../variables.scss' as var;

.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 10px 0;
  flex-grow: 0;
  position: relative;
  color: white;
  border-top: 2px solid color.scale(var.$color_background, $lightness: -20%);
  border-bottom: 2px solid transparent;

  @media (max-width: 500px) {
    flex-direction: column;
  }

  &:first-of-type {
    border-top: none;
  }

  &__title {
    @media (max-width: 500px) {
      margin-bottom: 15px;
    }
  }

  &__attr {
    display: flex;
    align-items: center;

    @media (max-width: 500px) {
      justify-content: space-between;
      width: 100%;
    }
  }

  &__date {
    margin-right: 10px;
  }

  .button {
    width: auto;
  }
}
</style>
