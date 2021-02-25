<template>
  <div class="app__inner" :style="{ backgroundPosition: currentBackgroundPosition }">
    <header class="page_header"><h1 class="page_header__title">Alexander Aeppli</h1></header>
    <div class="component">
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component
            :is="Component"
            class="component__inner"
            @emitBackgroundPosition="setBackgoundPositon"
          />
        </transition>
      </router-view>
    </div>
    <navigation />
  </div>
</template>

<script>
import navigation from './components/navigation';

export default {
  name: 'App',
  components: { navigation },
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
@use 'variables' as var;

*,
*:after,
*:before {
  box-sizing: border-box;
}

body {
  margin: 0;
  color: var.$color-text;
  font-family: 'Rubik', sans-serif;
  font-size: 18px;
}

p {
  line-height: 1.5;
}

h1 {
  margin: 0;
}

.app__inner {
  padding: 100px 140px 20px 20px;
  min-height: 100vh;
  width: 100%;
  background: rgb(240, 152, 25);
  background: linear-gradient(
    135deg,
    rgb(240, 151, 25) 0%,
    rgb(255, 88, 88) 25%,
    rgb(168, 94, 207) 50%,
    rgb(0, 147, 233) 75%,
    rgb(128, 208, 199) 100%
  );
  background-size: 400% 400%;
  transition: background-position 0.5s ease-in-out;
  overflow-x: hidden;
  // display: flex;
  // align-items: center;

  @media (max-width: 1200px) {
    padding: 20px 140px 20px 20px;
  }

  @media (max-width: 800px) {
    padding: 15px 15px 120px;
  }
}

.component {
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;

  &__inner {
    width: 100%;
    max-width: 1200px;
    display: flex;
    align-items: flex-start;

    @media (max-width: 1200px) {
      flex-direction: column;
    }
  }
}

.card {
  background-color: #fff;
  border-radius: 5px;
  padding: 15px;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.25);
  max-width: 500px;

  @media (max-width: 1200px) {
    max-width: unset;
  }
}

.thumbnail {
  width: 100%;
  border-radius: 5px;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.25);

  @media (max-width: 1200px) {
    margin-top: 15px;
  }
}

.page_header {
  color: #fff;
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 40px;

  &__title {
    font-size: 80px;

    @media (max-width: 800px) {
      font-size: 60px;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
  position: absolute;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
