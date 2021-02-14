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
    }
  },
  mounted() {
    // Set current Month / Year
    this.setDate(this.today);
  },
};
</script>

<style lang="scss">
@use 'sass:color';
@use '../variables.scss' as var;

.datepicker {
  position: relative;

  &__picker {
    position: absolute;
    top: calc(100% + 10px);
    right: 0;
    z-index: 5;
    background-color: var.$color_background;
    max-width: 300px;
    border-radius: 5px;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.5);
  }

  &__header,
  &__footer {
    padding: 15px;
  }

  &__header {
    display: flex;
  }

  &__footer {
    display: flex;
    justify-content: center;
  }
}

.button {
  padding: 8px 20px 10px;
  margin-top: 2px;
  border-radius: 5px;
  border: none;
  position: relative;
  top: -2px;
  background-color: var.$color_primary--shading;
  z-index: 1;
  color: white;
  box-shadow: 0px 4px 4px 0px rgba(50, 50, 50, 0.75);
  margin-left: 20px;
  font-weight: 600;
  width: 100%;
  white-space: nowrap;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 2px;
    left: 0;
    border-radius: 5px;
    z-index: -1;
    background-color: var.$color_primary;
  }

  &:hover,
  &:focus {
    background-color: color.scale(var.$color_primary--shading, $lightness: 20%);

    &::after {
      background-color: color.scale(var.$color_primary, $lightness: 20%);
    }
  }

  &--secondary {
    @extend .button;
    margin-left: unset;
    background-color: var.$color_grey--shading;

    &::after {
      background-color: var.$color_grey;
    }

    &:hover,
    &:focus {
      background-color: color.scale(var.$color_grey--shading, $lightness: 20%);

      &::after {
        background-color: color.scale(var.$color_grey, $lightness: 20%);
      }
    }
  }
}

.calendar {
  top: 100%;
  padding: 0 15px;

  &__inner {
    display: grid;
    grid-template: repeat(6, 1fr) / repeat(7, 1fr);
    width: 100%;
    height: 300px / 7 * 6;
    justify-items: center;
    align-items: center;
    color: rgb(255, 255, 255);
  }

  &__date {
    user-select: none;
    height: 2em;
    width: 2em;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;

    &--today {
      border: var.$color_grey 3px solid;
    }

    &--selected {
      border: var.$color_primary 3px solid;
    }

    &--otherMonth {
      color: #969696;
    }

    &--title {
      font-weight: 600;
      color: #ffffff;
    }
  }
}
</style>
