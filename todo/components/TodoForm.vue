<template>
  <form @submit.prevent="sendTodo(newTodoField)" class="todo-form">
    <label class="todo-form__field-label">
      <span class="todo-form__label-text" @click="toggleDatepicker" v-if="newTodoField === ''"
        >Todo Title</span
      >
      <input class="todo-form__field" type="text" name="" v-model="newTodoField" />
    </label>
    <calendar-date-picker
      @clearDate="newTodoDate = null"
      @pickDate="setDate"
      :date="newTodoDate"
      class="todo-form__datepicker"
    ></calendar-date-picker>
    <button class="button todo-form__button">Add Todo</button>
  </form>
</template>

<script>
import CalendarDatePicker from './CalendarDatePicker.vue';

export default {
  components: { CalendarDatePicker },
  data() {
    return {
      newTodoField: '',
      newTodoDate: null,
      todoKey: 3, // for demonstation purposes there are 3 initial todo items
      listVisible: true,
    };
  },
  emits: ['todoSent'],
  methods: {
    setDate(day) {
      this.newTodoDate = day;
    },
    sendTodo() {
      if (this.newTodoField.length === 0) {
        alert('You cant add empty entries');
        return false;
      }
      this.$emit('todoSent', this.todo);
      this.newTodoField = '';
      this.newTodoDate = null;
      this.todoKey++;
    },
  },
  computed: {
    todo() {
      return {
        content: this.newTodoField,
        date: this.newTodoDate,
        key: this.todoKey,
      };
    },
  },
};
</script>
