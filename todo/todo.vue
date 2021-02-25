<template>
  <div id="todo">
    <todo-form @todo-sent="addTodo"></todo-form>
    <transition-group v-if="todos.length > 0" tag="ul" name="list" class="todo-list">
      <todo-item
        v-for="(todo, index) in todos"
        :todo="todo"
        :key="todo.key"
        @remove-todo="removeTodo(index)"
      ></todo-item>
    </transition-group>
  </div>
</template>

<script>
import TodoForm from './components/TodoForm.vue';
import TodoItem from './components/TodoItem';

export default {
  components: { TodoForm, TodoItem },
  data() {
    return {
      todos: [
        { content: 'Wash dishes', date: null, key: 0 },
        { content: 'Check mailbox', date: null, key: 1 },
        { content: 'Learn Vue', date: new Date(), key: 2 },
      ],
      draggingItem: false,
    };
  },
  methods: {
    addTodo(todo) {
      this.todos.push(todo);
    },
    removeTodo(index) {
      if (this.todos.length >= 0) {
        this.todos.splice(index, 1);
      }
    },
  },
};
</script>

<style lang="scss">
@use 'sass:color';
@use '../src/variables' as var;

*,
::after,
::before {
  box-sizing: border-box;
}

#todo {
  width: 100%;
  background-color: var.$color_background;
  border-radius: 5px;
  padding: 15px;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.25);

  @media (max-width: 500px) {
    margin-top: 10px;
  }
}

.todo-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  margin-top: 40px;
}

.list-enter-active,
.list-leave-active {
  transition: opacity 0.3s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
}

.list-move {
  transition: transform 0.8s ease;
}
</style>
