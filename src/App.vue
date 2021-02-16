<template>
  <router-view class="component"/>
  <nav class="nav">
    <router-link class="nav__item" :to="{ name: 'Home' }">Home</router-link>
    <router-link class="nav__item" :to="{ name: 'TodoApp' }">Todo App</router-link>
  </nav>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
    };
  },
  computed: {
    currentTabComponent() {
      return this.currentTab.toLowerCase().replace(' ', '-');
    },
  },
};
</script>

<style lang="scss">
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
  flex-flow: column wrap;
  min-height: 100vh;
}

.component {
  width: 100%;
  flex: 4 0 0;
}

.nav {
  display: flex;
  width: 100%;
  justify-content: stretch;
  flex: 0 1 100px;
}

.nav__item {
  width: 25%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 0;

}
</style>
