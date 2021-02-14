<template>
  <component class="component" :is="currentTabComponent" />
  <div class="tabs">
  </div>
</template>

<script>
import Home from './components/home.vue';
import VueTodo from './components/vue-todo.vue';
export default {
  name: 'App',
  components: { Home, VueTodo },
  data() {
    return {
      currentTab: 'Home',
      tabs: ['Home', 'Vue Todo', 'Oscarfaeh', 'Kontakt'],
    };
  },
  computed: {
    currentTabComponent() {
      return this.currentTab.toLowerCase().replace(' ', '-');
    },
  },
};
</script>

<style>
*,
*:after,
*:before {
  box-sizing: border-box;
}

body {
  margin: 0;
}

#app {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
  background-color: #ff5858;
  background-image: linear-gradient(-60deg, #ff5858 0%, #f09819 100%);
}

.component {
  width: 100%;
}
</style>
