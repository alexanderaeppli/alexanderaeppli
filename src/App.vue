<template>
  <div class="app__inner" :style="{ backgroundPosition: currentBackgroundPosition }">
    <router-view class="component" @emitBackgroundPosition="setBackgoundPositon" />

    <nav class="nav">
      <router-link class="nav__item" :to="{ name: 'Home' }">Home</router-link>
      <router-link class="nav__item" :to="{ name: 'TodoApp' }">Todo App</router-link>
      <router-link class="nav__item" :to="{ name: 'Oscarfaeh' }">Oscarfäh</router-link>
      <router-link class="nav__item" :to="{ name: 'Contact' }">Kontakt</router-link>
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
  flex-flow: row wrap;
  background: rgb(240, 152, 25);
  background: linear-gradient(
    135deg,
    rgba(240, 152, 25, 1) 0%,
    rgba(255, 88, 88, 1) 25%,
    rgb(168, 94, 207) 50%,
    rgba(0, 147, 233, 1) 75%,
    rgba(128, 208, 199, 1) 100%
  );
  background-size: 400% 400%;
  transition: background-position .5s ease-in-out;
}

.component {
  width: 100%;
  flex: 4 0 0;
}

.nav {
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  flex: 0 1 100px;

  &__item {
    height: 25%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    padding: 0;
  }
}
</style>
