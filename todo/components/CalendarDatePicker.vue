<template>
  <div class="datepicker" @click.self="toggleDatepicker">
    <span @click="toggleDatepicker">{{ label }}</span>
    <div v-if="datepickerVisible" class="datepicker__picker">
      <div class="datepicker__header">
        <dropdown :items="months" :selectedItemIndex="selectedMonth" @select="setMonth"></dropdown>
        <dropdown
          :items="years"
          :selectedItemIndex="years.indexOf(selectedYear)"
          @select="setYear"
        ></dropdown>
      </div>
      <div class="calendar">
        <div class="calendar__inner">
          <div class="calendar__date--title" v-for="(dayString, index) in dayStrings" :key="index">
            <span>{{ dayString }}</span>
          </div>
          <div
            class="calendar__date"
            :class="{
              'calendar__date--selected': day.valueOf() === selectedDay.valueOf(),
              'calendar__date--today': day.valueOf() === today.valueOf(),
              'calendar__date--otherMonth': day.getMonth() !== selectedMonth,
            }"
            @click="
              selectDay(day);
              setDate(day);
              toggleDatepicker();
            "
            v-for="day in daysOfMonth"
            :key="day.valueOf()"
          >
            <span>{{ day.getDate() }}</span>
          </div>
        </div>
      </div>
      <div class="datepicker__footer">
        <button @click.prevent="clearDate" class="button--secondary">Cancel</button>
        <button @click.prevent="toggleDatepicker" class="button">Done</button>
      </div>
    </div>
  </div>
</template>

<script>
import Dropdown from './Dropdown';

export default {
  components: { Dropdown },
  emits: ['pickDate', 'clearDate'],
  props: {
    date: Object,
    String,
  },
  data() {
    return {
      months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      dayStrings: ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'],
      startingYear: 2010,
      numberOfYears: 20,
      selectedDay: '',
      selectedMonth: 0,
      selectedYear: 2021,
      datepickerVisible: false,
      listVisible: true,
    };
  },
  methods: {
    clearTime(date) {
      date.setHours(0);
      date.setMinutes(0);
      date.setSeconds(0);
      date.setMilliseconds(0);
    },
    setMonth(index) {
      this.selectedMonth = index;
    },
    setYear(index) {
      this.selectedYear = this.years[index];
    },
    setDate(day) {
      this.selectedMonth = day.getMonth();
      this.selectedYear = day.getFullYear();
    },
    selectDay(day) {
      this.selectedDay = day;
      this.$emit('pickDate', this.selectedDay);
    },
    toggleDatepicker() {
      this.datepickerVisible = !this.datepickerVisible;
    },
    clearDate() {
      this.$emit('clearDate');
      this.toggleDatepicker();
    },
  },
  computed: {
    daysOfMonth() {
      let days = [];
      let startDate = new Date(this.selectedYear, this.selectedMonth, 1); // Get the first day of the selected month
      let offsetArray = [6, 0, 1, 2, 3, 4, 5]; // Array with offset values for every day (Mo -> So)
      let dateOffset = startDate.getDate() - offsetArray[startDate.getDay()]; // calculate offset to last monday
      startDate.setDate(dateOffset); // add offset to startDate
      let startDateString = startDate.valueOf(); // Make startDate immutable by converting it into a string

      for (let i = 0; i < 35; i++) {
        let newStartDate = new Date(startDateString);
        let date = new Date(newStartDate.setDate(newStartDate.getDate() + i));
        days[i] = date;
      }

      return days;
    },
    today() {
      let today = new Date();
      this.clearTime(today);
      return today;
    },
    years() {
      let years = [];
      for (let i = 0; i < this.numberOfYears; i++) {
        years[i] = this.startingYear + (i - 1);
      }
      return years;
    },
    label() {
      if (this.date === null) {
        return 'Date';
      } else {
        return this.date.toLocaleDateString();
      }
    },
  },
  watch: {
    date() {
      if (this.date === null) {
        this.selectedDay = '';
      }
    },
  },
  mounted() {
    // Set current Month / Year
    this.setDate(this.today);
  },
};
</script>