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
      todoKey: 0,
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

<style lang="scss">
@use 'sass:color';
@use '../variables.scss' as var;

.todo-form {
  width: 100%;
  display: flex;
  color: white;

  @media (max-width: 500px) {
    flex-direction: column;
  }

  &__field-label {
    width: 100%;
    margin-right: 10px;
    position: relative;

    &:focus .todo-form__label-text {
      display: none;
    }
  }

  &__field {
    width: 100%;
    padding: 10px 15px;
    border-radius: 5px;
    border: none;
    color: white;
    background-color: color.scale(var.$color_background, $lightness: -20%);
    box-shadow: inset 0px 5px 5px 0px rgba(0, 0, 0, 0.2);
  }

  &__label-text {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 15px;
  }

  &__datepicker {
    width: 100%;
    max-width: 150px;
    display: flex;
    align-items: center;
    padding: 10px 15px;
    border-radius: 5px;
    background-color: color.scale(var.$color_background, $lightness: -20%);
    box-shadow: inset 0px 5px 5px 0px rgba(0, 0, 0, 0.2);

    @media (max-width: 500px) {
      max-width: unset;
      margin-top: 15px;
    }
  }

  &__date {
    height: 20px;
    background-color: grey;
    position: relative;
  }

  &__button {
    width: auto;
    margin-left: 10px;

    @media (max-width: 500px) {
      margin-left: unset;
      margin-top: 15px;
    }
  }
}
</style>
