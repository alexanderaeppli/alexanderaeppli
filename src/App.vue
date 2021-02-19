<template>
  <div class="app__inner" :style="{ backgroundPosition: currentBackgroundPosition }">
    <router-view class="component" @emitBackgroundPosition="setBackgoundPositon" />

    <nav class="nav">
      <router-link class="nav__item" :to="{ name: 'Home' }">Home</router-link>
      <router-link class="nav__item" :to="{ name: 'TodoApp' }">Todo App</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      currentBackgroundPosition: '',
    };
  },
  methods: {
    setBackgoundPositon(position) {
      this.currentBackgroundPosition = position;
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

.app__inner {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  background-image: linear-gradient(135deg, #ff5858 0%, #f09819  25%, #80D0C7 75%, #0093E9 100%);
  //background-image: linear-gradient(135deg,#0093E9 0%, #80D0C7 100%);
  background-size: 400% 400%;
  transition: background-position 1s ease-in-out;
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
