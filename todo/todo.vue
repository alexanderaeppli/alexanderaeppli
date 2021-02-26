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

</style>
